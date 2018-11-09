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


//begin gallery

let createImage = (function(){
console.log('hello')
  let photos = ['portfolio-image-24','portfolio-image-19','portfolio-image-2','portfolio-image-3','portfolio-image-5','portfolio-image-6','portfolio-image-7','portfolio-image-8','portfolio-image-10','portfolio-image-11','portfolio-image-12','portfolio-image-13','portfolio-image-14','portfolio-image-15','portfolio-image-17','portfolio-image-18','portfolio-image-1','portfolio-image-21','portfolio-image-22','portfolio-image-23','portfolio-image-25','portfolio-image-26','portfolio-image-27','portfolio-image-28', ]

    for(let i = 0; i < photos.length; i++ ){
      let imagePath = "./images/portfolio_images/" + photos[i] + ".jpg"

    let newImage = document.createElement('img')
    newImage.setAttribute('src', imagePath )
    newImage.classList.add('grid-item')
    let newLink = document.createElement('a')
    newLink.setAttribute('href','""' )
    newLink.setAttribute('data-toggle','modal')
    newLink.setAttribute('data-target','.bd-example-modal-lg')

    let mainGallery = document.getElementById('gallery-wrap')
    newLink.appendChild(newImage)
    mainGallery.appendChild(newLink)

    // create and set carousel items
    let caroWrap = document.getElementById('carousel-inner')
    let carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    let carouselImage = document.createElement('img')
    carouselImage.classList.add('d-block','w-100','lightbox')
    carouselImage.setAttribute('src', imagePath)
    carouselItem.appendChild(carouselImage)
    caroWrap.appendChild(carouselItem)

    mainGallery.addEventListener('click',function(event){
      console.log('click')
      if (!event.target.classList.contains('grid-item')) return
        let ciActive = document.querySelector('.carousel-item')
        ciActive.classList.add('active')

        let thumbLinks = document.querySelectorAll('.grid-item')
        for (var i = 0; i < thumbLinks.length; i++) {
          console.log(thumbLinks[i])

          // if (thumbLinks[i] === event.target){
          //   ciActive.classList.remove('active')
          // }
       }
      }, false);
 }
}());
// end gallery
});
