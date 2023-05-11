$(document).ready(function() {
    $("#btnsearch").click(function(e) {
        var txtInput = $("#srchInv").val()
        $("#infoinvarccr").html("Halo Kelas 2 A");
        $.ajax({
            type: "POST" ,
            url: "/assets/scripts/ajax/getcurl.php" ,
            success: function (response) {
                $("#infoinvarccr").html("<br/>Response<br/> " + response);
            }
        });
    })
});
