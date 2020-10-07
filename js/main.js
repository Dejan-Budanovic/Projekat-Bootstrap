//Subscribe ALERT function
function subscribeAlert() {
  var userSubEmail = document.getElementById("InputSubEmail").value;
  var userSubEmailValid = document.getElementById("InputSubEmail").value.indexOf("@");
  submitOK = "true";
  if (userSubEmailValid == -1) {
    alert("Please enter a valid e-mail!");
    submitOK = "false";
  }
  if (submitOK == "false") {
    return false;
  }
  alert("Thank you for subcribing " + userSubEmail);
}
//Subscribe ALERT function

// post COMMENT function

function postComment() {
  var userText = document.getElementById("FormControlTextarea").value;
  var userCom = document.getElementById("commentText");
  if (userText === "") {
    alert("Please enter a comment")
  } else {
    userCom.innerHTML = userText;
  }
}

//post COMMENT function END
