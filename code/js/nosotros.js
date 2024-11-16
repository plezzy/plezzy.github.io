const $gallerySlider = document.querySelector(".gallery__slider")


const $next = document.querySelector('.next')
const $prev = document.querySelector('.prev')

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
