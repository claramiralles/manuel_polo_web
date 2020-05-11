'use strict';

console.log('>> Ready :)');

const menuButton = document.querySelector('.nav-trigger');
const closeButton = document.querySelector('.nav-close');
const navigationMenu = document.querySelector('.nav__items');
const pageWrapperElement = document.querySelectorAll('.page__wrapper');

pageWrapperElement[1].classList.add('page__wrapper--footer');

function accessMenu() {
    navigationMenu.classList.toggle('active');
    menuButton.classList.toggle('hidden');
}

menuButton.addEventListener('click', accessMenu);
closeButton.addEventListener('click', accessMenu);



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
  
  
  const my_work = document.getElementById(my_work);
  const newArticle = document.createElement (article);
  