
// DOM ELEMENTS & VARIABLES
const $gallerySlider = document.querySelector(".gallery__slider")
const $next = document.querySelector('.next')
const $prev = document.querySelector('.prev')
const $galleryItem = document.getElementsByClassName('gallery__item')
const $zoomOverlay = document.querySelector(".zoom-overlay")
const $zoomExit = document.querySelector(".zoom__icon")
const $zoomImage = document.getElementById("zoomImg")
let imagesLink = [];

// CODE

for (let i = 1; i <= $galleryItem.length; i++) 
{
    imagesLink.push("../gallery-media/img" + i + ".jpeg")
}

for (let element of $galleryItem) 
{
    element.addEventListener("click", zoom) 
}


// FUNCIONES

function zoom()
{
    let index = this.id
    $zoomImage.setAttribute("src", imagesLink[index])
    $zoomOverlay.classList.toggle("zoom-overlay--hidden")
}

$zoomExit.addEventListener("click", ()=>
{
    $zoomOverlay.classList.add("zoom-overlay--hidden")
})

$next.addEventListener("click", () =>
{
    const $slidesCollection = document.querySelectorAll(".gallery__item")
    $gallerySlider.appendChild($slidesCollection[1])
})


$prev.addEventListener("click", () =>
{
    const $slidesCollection = document.querySelectorAll(".gallery__item")
    $gallerySlider.prepend($slidesCollection[$slidesCollection.length - 1])
})
