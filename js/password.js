$(document).ready(() => {
  
  $("#submit").click(function(){
    password()
});

$(document).on('keypress',function(e) {
  if(e.which == 13) {
      password()
  }
});
})

function password(){
  var password = $("#pwd").val()
  if (password == "engagedhealth2023") {
    window.open("main.html", "_self")
  } else {
    $(".invalidpassword").text("Invalid Password")
  }
}