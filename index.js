document.addEventListener("DOMContentLoaded", function() {
//
// var elem = document.querySelector('.gallery-wrap');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item'
//
//   })
//
// document.on('click','[data-toggle="lightbox"]', function(event){
//   event.preventDefault()
//   this.ekkoLightbox()
//
// })



//contact form submission action

function saveName(){
let nameInput = document.querySelector("#userName")
localStorage.setItem("name", nameInput.value)
}

function thankYou (){
  let formConfirm = document.querySelector(".form-confirm")
  let savedName = localStorage.getItem("name")
  formConfirm.innerHTML= '<h3>' + 'Thanks'+ '</h3>' + '<br>' + '<h2>' + savedName + '!'+'</h2>'
}

document.querySelector(".saveContact").addEventListener('submit', function (event) {
  // Don't submit the form
	event.preventDefault()
  saveName()
  thankYou()

}, false);

//end contact form submission action









//
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//                 event.preventDefault();
//                 $(this).ekkoLightbox();
//             });
})
