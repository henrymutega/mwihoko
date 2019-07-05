/*************USER INTERFACE*********/
$(document).ready(function(){
  $("#sub").click(function(){
    var name = $("#name").val();
    var email = $("#mail").val();
    var comment = $("#comment").val();

  if(name== ""){
    document.getElementById('con').innerHTML ="Please Enter your Name.";
    return;
  }else if(email== ""){
    document.getElementById('con').innerHTML ="Please Enter your Email.";
    return;
  }else if (comment== "") {
    document.getElementById('con').innerHTML ="Please Enter your Message.";
    return;
  }else{
    document.getElementById('cont').innerHTML = name.toUpperCase() + " We have recieved your message. Thank you for reaching out to us.";
    $("#con").hide();
  }

/*********RESET INPUTS***********/
  $("input#name").val("");
  $("input#mail").val("");
  $("textarea#comment").val("");
});

/********COLLECTING USER PRODUCT*************/
});
