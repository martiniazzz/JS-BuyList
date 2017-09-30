$(function(){
    var $list = $(".in-left-block");
    var $left_list = $(".about-left");
    var $bought_list = $(".about-bought");
    var ONE_ROW_HTML = $(".item-row").html();
    var ITEM_BOUGHT = $(".item-left-box").html();

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $node_box_left = $(ITEM_BOUGHT);
        var $node_box_bought = $(ITEM_BOUGHT);

        $node.find(".item-name").text(title);
        $node_box_left.find(".item-left-text").text(title);
        $node_box_bought.find(".item-left-text").text(title);

        var quantity = 1;
        var $quantity_label = $node.find(".item-number");
        $quantity_label.text(quantity);

        var $quantity_label_left = $node_box_left.find(".item-left-number");
        var $quantity_label_bought = $node_box_bought.find(".item-left-number");
        $quantity_label_left.text(quantity);
        $quantity_label_bought.text(quantity);

        $node.find(".item-name").click(function (){
            $node.find(".item-name").hide();
            $node.find(".edit-item").val(title);
            $node.find(".edit-item").show();
            $node.find(".edit-item").focus();
        });

        $node.find(".edit-item").focusout(function () {
            $node.find(".edit-item").hide();
            title = $node.find(".edit-item").val();
            $node.find(".item-name").text(title);
            $node_box_left.find(".item-left-text").text(title);
            $node_box_bought.find(".item-left-text").text(title);
            $node.find(".item-name").show();
        });


        $node.find(".button-minus").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $quantity_label_left.text(quantity);
                $quantity_label_bought.text(quantity);
            }
            if (quantity == 1) {
                $node.find(".button-minus").removeClass("button-minus-more");
                $node.find(".button-minus").prop("disabled", true);
            }

        });

        $node.find(".button-plus").click(function () {
            quantity+=1;
            $quantity_label.text(quantity);
            $quantity_label_left.text(quantity);
            $quantity_label_bought.text(quantity);
            if(quantity>1){
                $node.find(".button-minus").addClass("button-minus-more");
                $node.find(".button-minus").prop("disabled",false);
            }
        });

        $node.find(".button-delete").click(function () {
            $node.hide();
            $node_box_bought.hide();
            $node_box_left.hide();
        });

        $node.find(".button-buy").click(function () {
            $node.find(".button-buy").hide();
            $node.find(".button-delete").hide();
            $node.find(".button-not-buy").show();
            $node_box_bought.show();
            $node_box_left.hide();
        });

        $node.find(".button-not-buy").click(function () {
            $node.find(".button-buy").show();
            $node.find(".button-delete").show();
            $node.find(".button-not-buy").hide();
            $node_box_bought.hide();
            $node_box_left.show();
        });

        $list.append($node);
        $left_list.append($node_box_left);
        $bought_list.append($node_box_bought);
        $node_box_bought.hide();
    }

    addItem("Tomatoes");
    addItem("Cookies");
    addItem("Cheese");

    $(".add-item-button").click(function () {
        var $label = $(".add-item-input").val().replace(/\s/g, '');
        if($label != ""){
            addItem($label);
        }
        $(".add-item-input").val("");
        $(".add-item-input").focus();
    });
});