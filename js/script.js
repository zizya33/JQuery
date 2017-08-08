jQuery('#first').click(function() {
    $("span.ch").css("color", "yellow").css("font-size", "15px");
    $("img.ch").css("border", "3px solid yellow");

});

jQuery('#second').click(function() {
    $("img.nn").animate({height: "100px", width: "85px"}, 2500);
    $("span.nn").text("классика");
});
