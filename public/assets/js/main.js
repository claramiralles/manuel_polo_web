'use strict';

  document.addEventListener('DOMContentLoaded', (event) => {


    const scroll = window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        };

    const elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible');
            }
        });
        scroll(loop);
    }

    loop();

    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
                && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }


});

document.addEventListener('DOMContentLoaded', (event) => {
    

    const elementsMenuClose = document.getElementById('mobile-list')
    elementsMenuClose.style = 'display: none';

    const navLogoClose = document.getElementById('close-menu-icon')
    navLogoClose.style = 'display: none';
  

  
    // Function OPEN MENU
    
    function dropdownOpen () {
      const elementsMenuOpen = document.getElementById('mobile-list')
      elementsMenuOpen.style = 'display: block'
  
      const navLogoClose = document.getElementById('close-menu-icon')
      navLogoClose.style = 'display: block'
  
      const navLogoOpen = document.getElementById('open-menu-icon')
      navLogoOpen.style = 'display: none'
    }
  
    // Function CLOSE MENU
    function dropdownClose () {
      const dropdownElementOpen = document.getElementById('mobile-list')
      dropdownElementOpen.style = 'display: none'
  
      const dropdownCloseLogo = document.getElementById('close-menu-icon')
      dropdownCloseLogo.style = 'display: none'
  
      const dropdownOpen = document.getElementById('open-menu-icon')
      dropdownOpen.style = 'display: block'
    }
  
    
    const dropdownOpenClick = document.getElementById('open-menu-icon')
    dropdownOpenClick.addEventListener('click', dropdownOpen)
  
    const dropdownCloseClick = document.getElementById('close-menu-icon')
    dropdownCloseClick.addEventListener('click', dropdownClose)
    
  })

const paintings_june_exposition = [

    { "id": 1,
      "name": "albarracin",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_arcos.jpg'
    },
  
    {
      "id": 2,
      "name": "bares santa eugenia",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_bares_santa_eugenia.jpg'
    },
  
    {
      "id": 3,
      "name": "ciclo stop",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_ciclo_stop.jpg.jpg',
    },
  
    {
      "id": 4,
      "name": "cuadro ciclocenit",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_ciclocenit.jpg',
      
    },
  
    {
      "id": 5,
      "name": "galgo I",
      "technique": "acuarela",
      "image": '../images/cuadro_galgo_1.jpg',
    },
  
    {
      "id": 6,
      "name": "galgo II",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_galgo_2.jpg',
    },
  
    {
      "id": 7,
      "name": "plaza ramales",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_plaza_ramales.jpg',
    },
  
    {
      "id": 8,
      "name": "prohibido madrid I",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_prohibido_madrid_1.jpg',
    },
  
    {
      "id": 9,
      "name": "prohibido madrid II",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_prohibido_madrid_2.jpg',
    },
    {
      "id": 10,
      "name": "ski rojo",
      "technique": "acuarela",
      "image": '../images/paintings_june_exposition/cuadro_ski_rojo.jpg',
    }
  ];
  
  const paintings_previous = [
  
        { "id": 1,
          "name": "arcos",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_arcos.jpg'
        },
    
        {
          "id": 2,
          "name": "callejuela",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_callejuela.jpg',
          
        },
    
        {
          "id": 3,
          "name": "casa nevada",
          "technique": "acuarela",
          "image": '../images/casa_nevada.jpg',
        },
    
        {
          "id": 4,
          "name": "odonell",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_odonell.jpg',
        },
    
        {
          "id": 5,
          "name": "paseantes",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_paseantes.jpg',
        },
    
        {
          "id": 6,
          "name": "paseo maritimo",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_paseo_maritimo.jpg',
        },
        {
          "id": 7,
          "name": "plaza Chinchón",
          "technique": "acuarela",
          "image": '../images/paintings_previous/cuadro_plaza_chinchon.jpg',
        }
  ];

//# sourceMappingURL=main.js.map
