
// DOM ELEMENTS
const headerMenu = document.querySelector(`.header__menu-icon`);
const headerExit = document.querySelector(`.header__exit-icon`);
const headerMenuResponsive = document.querySelector(`.header__nav`);
const headerDarkOverlay = document.querySelector('.header__dark-overlay');
const header = document.querySelector('.header');
const headerElement = document.querySelectorAll('.header__nav-element');
const headerIcons = document.querySelectorAll('.header__icon')
const productsInfoTitle = document.getElementsByClassName("product__info-title")
const arrowIcons = document.getElementsByClassName("arrowIcon")
const productsInfoItem = document.getElementsByClassName("product__info-item")
const usButton = document.getElementById("usButton")
const storyUs = document.querySelector('.us__story')
const $scrollUpButton = document.getElementById('scrollUpButton')
// HEADER RESPONSIVE

window.onload = function () 
{
    window.onscroll = function () 
    {
        if (scrollY > 5 && !headerMenuResponsive.classList.contains('header__nav--clicked')) 
        {
            header.classList.add('header--shadow')
            // console.log
            $scrollUpButton.classList.add('scroll-up__button--shown')

            if(window.screen.width >= 1100)
            {
                for (let i = 0; i < headerElement.length; i++) 
                {
                    headerElement[i].classList.add('header--text-color');
                }
            }

            for (let i = 0; i < headerIcons.length; i++) 
            {
                headerIcons[i].classList.add('header--text-color');
            } 
            
        }
        else if(scrollY > 5)
        {
            for (let i = 0; i < headerIcons.length; i++) 
                {
                    headerIcons[i].classList.add('header--text-color');
                }    
        }
        else if(scrollY < 5)
        {
            header.classList.remove('header--shadow')
            $scrollUpButton.classList.remove('scroll-up__button--shown')

            // if(window.screen.width >= 1100)
                // {
                    for (let i = 0; i < headerElement.length; i++) 
                    {
                        headerElement[i].classList.remove('header--text-color');
                    }
                // }

            for (let i = 0; i < headerIcons.length; i++) 
            {
                headerIcons[i].classList.remove('header--text-color');
            }
        }

    };
  };

//   HEADER OPEN AND CLOSE

  headerMenu.addEventListener("click", () =>
    {
        headerMenuResponsive.classList.toggle('header__nav--clicked');
    
        if(header.classList.contains("header--shadow"))
        {
            header.classList.remove('header--shadow')
        }
    })
    
    headerExit.addEventListener('click', () =>
    {
        headerMenuResponsive.classList.toggle('header__nav--clicked'); 
    
        if(!header.classList.contains("header--shadow") && scrollY > 5)
        {
            header.classList.add('header--shadow')
        }
    })



// INDEX STORY

usButton.addEventListener('click', ()=>
{
    // console.log(storyUs)
    if(storyUs.style.height == "auto")
    {
        storyUs.style.height = "300px"
        usButton.setAttribute("data-after", "Ver más")
        usButton.style.bottom = "7%"
        usButton.style.right = "51%"
    }
    else
    {
        storyUs.style.height = "auto"
        usButton.setAttribute("data-after", "Ver menos")
        usButton.style.bottom = "2%"
        usButton.style.right = "50%"
    } 
})

// CONTACTO






