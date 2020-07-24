
$(document).ready(function () {

    $("div#click-one").click(function (event) {
      whatToSay = "Hello!";
        alert(whatToSay);
    });

    $("div#click-two").click(function (event) {
        alert(whatToSay);
    });
});

$(document).ready(function () {
    $("#show").click(function () {
        $("#ul").css("color", "red")
            .slideUp(2000)
            .slideDown(2000);
    });
});