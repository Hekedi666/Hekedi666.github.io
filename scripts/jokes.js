
let laskuri = 0;

$( document ).ready(function() {
    $('p').text("Onnistuneita hakuja: ");
    $("#wonk").text("Onnistuneita hakuja: " + laskuri);
  });

$("#btn").click(function() {
    let nimmi = $("#käyttis").val();
    let vidu = "https://api.github.com/users/" + nimmi;

    $.ajax({
        url: vidu,
        type: "GET",
        dataType: "json",
        success: function (response) {

            setTimeout(function() {
                $("#account-data").append("<br>" + "<i>" + response.name + "</i>");
                $("#account-data").append("<br>" + "<i>" + response.bio + "</i>");
                $("#account-data").append("<br>" + "<i>" + response.blog + "</i>");
                laskuri = laskuri + 1;
                $("#wonk").text("Onnistuneita hakuja: " + laskuri);
            }, 3000);
        },
        error: function (jqxhr, textStatus, error) {
            setTimeout(function() {
                console.log("Error: " + textStatus);
                $("#account-data").append("<br>" + "<i>" + "Ei löydy" + "</i>");
            });
        },
    });
});

$(document).on({
    ajaxStart: function(){
        $("body").addClass("loading"); 
    },
    ajaxStop: function(){ 
        setTimeout(function(){
            $("body").removeClass("loading"); 
        }, 3000);
    }    
});
