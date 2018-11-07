document.addEventListener("DOMContentLoaded", function() {


//contact form submission action

function saveName(){
let nameInput = document.querySelector("#userName")
localStorage.setItem("name", nameInput.value)
}

function thankYou (){
  let formConfirm = document.querySelector(".form-confirm")
  let savedName = localStorage.getItem("name")
  formConfirm.innerHTML= '<h3>' + 'Thank you'+ '</h3>' + ' ' + '<h2>' + savedName + '!'+'</h2>'
}

document.querySelector(".saveContact").addEventListener('submit', function (event) {
  // Don't submit the form
	event.preventDefault()
  saveName()
  thankYou()

}, false);

//end contact form submission action

});
