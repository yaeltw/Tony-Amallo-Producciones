
// loader

window.addEventListener('load', function(){
  let containerLoader = document.querySelector('.container__loader');
  containerLoader.style.display = 'none';
})


// hamburguer

  function hamburguer() {
    let linksHamburguer = document.querySelector(".links_navegacion-hamburguer");
    linksHamburguer.classList.toggle("visible");
  }



  // que cambie a x cuando se presiona

let linea1 = document.querySelector('.line1_hamburguer-menu');
let linea2 = document.querySelector('.line2_hamburguer-menu');
let linea3 = document.querySelector('.line3_hamburguer-menu');

let hamburguerContainer = document.querySelector('.hamburguer');

hamburguerContainer.addEventListener('click', animateBars);

function animateBars(){
  linea1.classList.toggle('active')
  linea2.classList.toggle('active')
  linea3.classList.toggle('active')
}

// hacer que se cierrre el menu cuando se presione una opcion

let linksNavegacionHamburguer = document.getElementsByClassName('link-navegacion')

let arrayLinks = Array.from(linksNavegacionHamburguer)

arrayLinks.forEach(element => (element.addEventListener('click', function(){linksHamburguer.classList.remove("visible");})));