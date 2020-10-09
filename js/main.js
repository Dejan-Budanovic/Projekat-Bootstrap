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
  var text = document.getElementById('FormControlTextarea');
  if (text.value != "") {    //Izvrši ako ima komnetara
    //var imgAttr = "img/person-circle.svg";   //Putanja do Avatara
    var imgSpan = document.createElement("span");
    var div = document.createElement("div"); //DIV u kome se nalazi paragraf sa komentarom
    var attr = document.createAttribute("class"); //Klasa DIV-a
    //var userImg = document.createElement("img"); //Kreira novi IMG element za Avatar
    //userImg.setAttribute('src', imgAttr); //Dodeljuje SRC atribut sa avgAttr putanjom
    var p = document.createElement("p"); //Kreira paragraf u kome će se nalaziti komentar
    p.classList += 'commentText'; //Dodeljuje klasu paragrafu
    p.innerHTML =text.value; //Dodeljuje vrednost iz "text" forme
    attr.value="commentTextWindow"; //Imenuje klasu za DIV
    div.setAttributeNode(attr);   //Dodeljuje klasu DIV-u
    div.append(/*userImg*/imgSpan, p); //Dodeljuje DIV-u vrednosti Avatara i Komentara
    document.getElementById('userComment').appendChild(div); //Dodaje DIV na tačno mesto
    text.value = "";    //Resetuje vrednost "text" forme
  } else {
    alert("Enter a comment");    //ALERT ako nema komentara
  }
}



//post COMMENT function END

//show ARTiCLE function
var readArticle = document.getElementById("article1");
var blogArticle = document.getElementsByClassName("blog-article");
readArticle.style.display = "none"
function readMore() {
  if (readArticle.style.display === "none") {
    readArticle.style.display = "block";
    for (var i = 0; i < blogArticle.length; i++) {
        blogArticle[i].style.display = "none";
        }
  } else {
    readArticle.style.display = "none";
    for (var i = 0; i < blogArticle.length; i++) {
        blogArticle[i].style.display = "block";
    }
  }
}

//show ARTiCLE function END
