$(document).ready(function () {
    $(".b1").click(function(){
        alert("The paragraph was clicked.");
        $.ajax({
            type: "GET",
            url: 'http://192.168.2.63:3200/customers/US?pagging='+status,
            processData: false,
            contentType: 'application/json',
            success: function (response)
            {
                console.log(response);
            },
            error: function (error)
            {
                console.log('error '+error);
            }
        });
    });
})