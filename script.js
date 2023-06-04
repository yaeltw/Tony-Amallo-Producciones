// loader 

window.addEventListener('load', function(){
  let containerLoader = document.querySelector('.container__loader');
  containerLoader.style.display = 'none';
})



// ver mas button

let masObras = document.getElementById("masObrasMostrar");
let buttonMostrar = document.getElementById("masObrasMostrar_btn");

function toggleText() {
  masObras.classList.toggle("show");

  if (masObras.classList.contains("show")) {
    buttonMostrar.innerHTML = "Ver Menos";
  } else {
    buttonMostrar.innerHTML = "Ver mas";
  }
}

// hamburguer menu hacer que aparezca y desaparezca cuando se le hace click

let linksHamburguer = document.querySelector(".links_navegacion-hamburguer");

function hamburguer() {
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

arrayLinks.forEach(element => (element.addEventListener('click', function(){
  linksHamburguer.classList.remove("visible"); 
  linea1.classList.remove('active'); 
  linea2.classList.remove('active'); 
  linea3.classList.remove('active');
})));







// formulario

const form = document.getElementById("formulario-id");
const containerForm = document.querySelector('.container-form')
const loader = document.querySelector('.lds-dual-ring')

function loaderShow(){
    containerForm.style.visibility = 'hidden';
    loader.style.visibility = 'visible';
}

function loaderHide(){
  containerForm.style.visibility = 'visible';
    loader.style.visibility = 'hidden';
}

form.addEventListener("submit", manejarSubmit);

async function manejarSubmit(event) {
  event.preventDefault();
  loaderShow()
  const formObj = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formObj,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    let graciasForm = document.querySelector('.gracias-form');
    graciasForm.style.display = 'flex';
  } else {
    alert("Hubo un error, intente de nuevo mas tarde.");
  }
  loaderHide();
}

function ocultarGracias(){
  let graciasForm = document.querySelector('.gracias-form');
  graciasForm.style.display = 'none';
}

// formulario suma

let select = document.querySelector("#asunto");

let selectObras = document.querySelector('#selectObras');

let inputEdad = document.querySelector('#edadEmpezarTeatro')

let options = '<option disabled selected>Elija una obra</option><option value="el-mismo-destino">El mismo destino</option><option value="reunion-de-consorcio">Reunion de Consorcio</option><option value="la-cabaña">La cabaña</option><option value="karma">Karma</option><option value="plato-frio">Un plato que se come frio!</option><option value="la-gran-revelacion">La gran revelacion!</option>'

function cambioSelect() {
   const valor = select.value;

   switch(valor){
    case 'comprar-entradas': 
     selectObras.style.display = 'block';
     selectObras.innerHTML = options;
     inputEdad.style.display = 'none';
     inputEdad.setAttribute('disabled', '')
     selectObras.removeAttribute('disabled', '')
    break;
    case 'empezar-teatro':
      inputEdad.style.display = 'block';
      selectObras.style.display = 'none';
      inputEdad.removeAttribute('disabled', '')
      selectObras.setAttribute('disabled', '')
    break;
   }
 }

// Ver mas detalles obras

let opacityLow = document.querySelector(".opacity-low");

let elMismoDestino = document.querySelector(".el-mismo-destino");

function verElMismoDestino() {
  elMismoDestino.classList.add("show-obras");
  opacityLow.classList.add("show-opacity");
}

function salirElMismoDestino() {
  elMismoDestino.classList.remove("show-obras");
  opacityLow.classList.remove("show-opacity");
}

let reunionDeConsorcio = document.querySelector(".reunion-de-consorcio");

function verReunionDeConsorcio() {
  reunionDeConsorcio.style.display = "flex";
  opacityLow.classList.add("show-opacity");
}

function salirReunionDeConsorcio() {
  reunionDeConsorcio.style.display = "none";
  opacityLow.classList.remove("show-opacity");
}

// cabaña

let cabaña = document.querySelector(".cabaña");

function verCabaña() {
  cabaña.style.display = "flex";
  opacityLow.classList.add("show-opacity");
}

function salirDeCabaña() {
  cabaña.style.display = "none";
  opacityLow.classList.remove("show-opacity");
}
