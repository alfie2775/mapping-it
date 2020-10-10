$(document).ready(function() {
    $("#dps").carousel({interval:2500});
    $("#dps-button").click(function() {
        if($("#dps-button").children("span").hasClass("fa-pause")) {
            $("#dps").carousel("pause");
            $("#dps-button").children("span").removeClass("fa-pause");
            $("#dps-button").children("span").addClass("fa-play");
        }
        else {
            $("#dps").carousel("cycle");
            $("#dps-button").children("span").removeClass("fa-play");
            $("#dps-button").children("span").addClass("fa-pause");
        }
    });
});