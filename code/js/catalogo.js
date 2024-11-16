// PRODUCTS FEATURES BUTTONS

for (let i = 0; i < productsInfoTitle.length; i++) {
    productsInfoTitle[i].addEventListener("click", ()=>
    {
        if(productsInfoTitle[i].classList.contains("product__info-title--clicked"))
        {
            productsInfoTitle[i].classList.remove("product__info-title--clicked")
            arrowIcons[i].classList.remove("arrowIcon--clicked")
            productsInfoItem[i].classList.remove("product__info-item--clicked")
        }
        else
        {
            productsInfoTitle[i].classList.add("product__info-title--clicked")
            arrowIcons[i].classList.add("arrowIcon--clicked")
            productsInfoItem[i].classList.add("product__info-item--clicked")
        }
    })   
}