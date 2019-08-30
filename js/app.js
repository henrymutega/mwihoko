/*************USER INTERFACE*********/
$(document).ready(function(){
  $("#sub").click(function(){
    var name = $("#name").val();
    var email = $("#mail").val();
    var comment = $("#comment").val();

  if(name== ""){
    alert("Please Enter your Name.");
    return;
  }else if(email== ""){
    alert("Please Enter your Email.");
    return;
  }else if (comment== "") {
    alert("Please Enter your Message.");
    return;
  }else{
    alert(name.toUpperCase() + " We have recieved your message. Thank you for reaching out to us.")
  }

/*********RESET INPUTS***********/
  $("input#name").val("");
  $("input#mail").val("");
  $("textarea#comment").val("");
});
});
