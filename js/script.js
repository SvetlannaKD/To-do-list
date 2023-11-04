$(function () {
    $(".case-form") .on("focus", function () {
        $(this) .addClass("case-form-new");
    });
    $(".case-form") .on("blur", function () {
        $("input") .removeClass("case-form-false");
        $("textarea") .removeClass("case-form-false");
        $(this) .removeClass("case-form-new"); 
    });
    
    $(".buttonToDo") .click(function () {
        let textInput = $("input") .val();
        let textTextarea = $("textarea") .val();
        $("input") .removeClass("case-form-false");
        $("textarea") .removeClass("case-form-false");
        if (textInput && textTextarea) {
            $("#list-false") .hide();
            let toDoCotainer = "<div class='to-do-container'><h3 class='to-do-name'>";
            let clearButton = "<img class='to-do-clear' src='img/icon-clear.png' alt='Clear'>";
            let closeButton = "<img class='to-do-close' src='img/icon-close.png' alt='Close'>";
            let openButton = "<img class='to-do-open' src='img/icon-open.png' alt='Open'>";
            let toDoButtons = "</h3>" + clearButton + closeButton + openButton + "</div>";
            textInput = toDoCotainer + textInput + toDoButtons;
            textTextarea = "<div class='to-do-text'>" + textTextarea + "</div>";
            $("#to-do-list") .append(textInput); 
            $("#to-do-list") .append(textTextarea);
            $("input") .val("");
            $("textarea") .val("");
        } else  if (!(textInput) && !(textTextarea)) {
            $("input") .addClass("case-form-false");
            $("textarea") .addClass("case-form-false");
        } else if (!(textInput)) {
            $("input") .addClass("case-form-false");
        } else if (!(textTextarea)) {
            $("textarea") .addClass("case-form-false");
        } 

        $(".to-do-clear") .on("click", function () {
            $(this) .parent() .next() .remove();
            $(this) .parent() .remove();
            console.log($(".to-do-clear") .length);
            if (!($(".to-do-clear") .length)) {
                console.log("false");
                $("#list-false") .show();
            }
        });

        $(".to-do-close") .click(function () {
            $(this) .next() .show();
            $(this) .parent() .next() .fadeOut(400);
            $(this) .parent() .next() .animate({
                height: "0",
                "font-size": "0"
            }, 400);
            $(this) .hide();
        });
        $(".to-do-open") .click(function () {
            $(this) .prev() .show();
            $(this) .parent() .next() .fadeIn(400);
            $(this) .parent() .next() .animate({
                height: "85px",
                "font-size": "14px"
            }, 400)
            $(this) .hide();
        });
    });
});

