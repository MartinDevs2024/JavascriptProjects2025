$(document).ready(function(){
  $("#hand").click(toggleImage);
});
function toggleImage(){
   if($("#hand").html()== '+'){
       $("#pho").show(1000,function(){$('#foo').show();});
           $("#hand").html('-');
    }else{
        $("#foo").hide();
        $("#pho").hide(1000);
        $("#hand").html('+');
    }
}