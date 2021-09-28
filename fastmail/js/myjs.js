$(document).ready(function(){
    
   
    $("#form1").hide();
    $("#form2").hide();

    $(".btn-show").mousedown(function(){
        $(".lead").hide();
        $(".btn-show").hide();
        $(".btn-show2").hide();
        

        $("#form1").fadeIn();

    });

    $(".btn-show2").mousedown(function(){
        
        $(".lead").hide();
        $(".btn-show").hide();
        $(".btn-show2").hide();


        $("#form2").fadeIn();

    });
});