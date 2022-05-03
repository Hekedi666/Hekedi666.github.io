
$("#btn").click(function() {
    let nimmi = $("#käyttis").val();
    let vidu = "https://api.github.com/users/"+nimmi;

    $.ajax({
        url: vidu,
        type: "GET",
        dataType: "json",
        success: function (response) {
            $("#account-data").append("<br>" + "<i>" + response.name + "</i>");
        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
            $("#account-data").append("<br>" + "<i>" + "Ei löydy" + "</i>");
        },
    });
});
