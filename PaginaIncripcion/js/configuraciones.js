
//Boton Hiddent
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

//Configuracion para la galeria
let i = 0; // current slide
let j = 4; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#022873";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

//Slider Dinamico
const carrerasContainer = [...document.querySelectorAll('.contenedor-carreras')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

carrerasContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//Modals
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


//Programando el formulario
function validarform1(){
  const $carreras = document.getElementById('carreras').value;

  switch($carreras){
    case "IngeCompu":
      IngeCompu();
      break;
    case "IngeIndustrial":
      IngeIndustrial();
      break;
    case "IngeTelecom":
      IngeTelecom();
      break;
    case "LicDiseño":
      LicDiseño();
      break;
    case "TecCompu":
      TecCompu();
      break;
    case "TecCCADD":
      TecCCADD();
      break;
    default:
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seleccione una carrera',
      })
      break;
  
    }

}
function IngeIndustrial(){
  const $formIngeIndustrial = document.querySelector(".form-IngeIndustrial");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formIngeIndustrial.style.setProperty("display","block")
}
function IngeCompu(){
  const $formIngeCompu = document.querySelector(".form-IngeCompu");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formIngeCompu.style.setProperty("display","block")
}
function IngeTelecom(){
  const $formIngeTelecom = document.querySelector(".form-IngeTelecom");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formIngeTelecom.style.setProperty("display","block")
}
function TecCompu(){
  const $formTecCompu = document.querySelector(".form-TecCompu");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formTecCompu.style.setProperty("display","block")
}
function LicDiseño(){
  const $formLicDiseño = document.querySelector(".form-LicDiseño");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formLicDiseño.style.setProperty("display","block")
}
function TecCCADD(){
  const $formTecCCADD = document.querySelector(".form-TecCCADD");
  const $form1 = document.querySelector(".form-carreras");
  $form1.style.setProperty("display","none")
  $formTecCCADD.style.setProperty("display","block")
}



function validarIngeIndustrial(){
  const $ciclo = document.getElementById('ciclo').value;
  var $carnet = document.getElementById("carnet").value;
  var $nombre = document.getElementById("nombre").value;

  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios',
      })
    } else {
      if ($ciclo == "" | $ciclo == "0") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete los campos vacios',
        })
      } else {
        const $formIngeIndustrial = document.querySelector(".form-IngeIndustrial");
        const $formMateriasIngeIndustrial = document.querySelector(".form-materias-IngeIndustrial");
        const $formMateriasIngeIndustrial2 = document.querySelector(".form-materias-IngeIndustrial2")
        switch($ciclo){
          case "1":
            $formMateriasIngeIndustrial.style.setProperty("display","block");
            $formIngeIndustrial.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasIngeIndustrial2.style.setProperty("display","block");
            $formIngeIndustrial.style.setProperty("display","none");
            break;
          default:
            alert("Error")
            break;
        }
      }
      
    }
  }
}


function validarIngeTelecom(){
  const $ciclo = document.getElementById('ciclo02').value;
  var $carnet = document.getElementById("carnet02").value;
  var $nombre = document.getElementById("nombre02").value;

  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios /carnet',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios /nombre',
      })
    } else {
      if ($ciclo == "" | $ciclo == "0") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete los campos vacios /ciclo',
        })
      } else {
        const $formIngeTelecom = document.querySelector(".form-IngeTelecom");

        const $formMateriasIngeTelecom = document.querySelector(".form-materias-IngeTelecom");
        const $formMateriasIngeTelecom2 = document.querySelector(".form-materias-IngeTelecom2")
      
        switch($ciclo){
          case "1":
            $formMateriasIngeTelecom.style.setProperty("display","block");
            $formIngeTelecom.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasIngeTelecom2.style.setProperty("display","block");
            $formIngeTelecom.style.setProperty("display","none");
            break;
          default:
            alert("Error")
            break;
        }
      }
    }
  }
}


function validarIngeCompu(){
  const $ciclo = document.getElementById('ciclo03').value;
  var $carnet = document.getElementById("carnet03").value;
  var $nombre = document.getElementById("nombre03").value;

  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios /carnet',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios /nombre',
      })
    } else {
      if ($ciclo == "" | $ciclo == "0") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete los campos vacios /ciclo',
        })
      } else {
        const $formIngeCompu = document.querySelector(".form-IngeCompu");

        const $formMateriasIngeCompu = document.querySelector(".form-materias-IngeCompu");
        const $formMateriasIngeCompu2 = document.querySelector(".form-materias-IngeCompu2")
      
        switch($ciclo){
          case "1":
            $formMateriasIngeCompu.style.setProperty("display","block");
            $formIngeCompu.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasIngeCompu2.style.setProperty("display","block");
            $formIngeCompu.style.setProperty("display","none");
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ha ocurrido un error',
              footer: '<a href="..index.html">Deseas Regresar?</a>'
            })
            break;
        }
      }
    }
  }
}


function validarTecCompu(){
  const $ciclo = document.getElementById('ciclo04').value;
  var $carnet = document.getElementById("carnet04").value;
  var $nombre = document.getElementById("nombre04").value;

  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios /carnet',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios /nombre',
      })
    } else {
      if ($ciclo == "" | $ciclo == "0") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete los campos vacios /ciclo',
        })
      } else {
        const $formTecCompu = document.querySelector(".form-TecCompu");

        const $formMateriasTecCompu = document.querySelector(".form-materias-TecCompu");
        const $formMateriasTecCompu2 = document.querySelector(".form-materias-TecCompu2")
      
        switch($ciclo){
          case "1":
            $formMateriasTecCompu.style.setProperty("display","block");
            $formTecCompu.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasTecCompu2.style.setProperty("display","block");
            $formTecCompu.style.setProperty("display","none");
            break;
          default:
            alert("Error")
            break;
        }
        }
      }
    }
}


function validarLicDiseño(){
  const $ciclo = document.getElementById('ciclo05').value;
  var $carnet = document.getElementById("carnet05").value;
  var $nombre = document.getElementById("nombre05").value;

  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios /carnet',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios /nombre',
      })
    } else {
        const $formLicDiseño = document.querySelector(".form-LicDiseño");

        const $formMateriasLicDiseño = document.querySelector(".form-materias-LicDiseño");
        const $formMateriasLicDiseño2 = document.querySelector(".form-materias-LicDiseño2")

        switch($ciclo){
          case "1":
            $formMateriasLicDiseño.style.setProperty("display","block");
            $formLicDiseño.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasLicDiseño2.style.setProperty("display","block");
            $formLicDiseño.style.setProperty("display","none");
            break;
          default:
            alert("Error")
            break;
      }
    }
  }
}


function validarTecCCADD(){
  const $ciclo = document.getElementById('ciclo06').value;
  var $carnet = document.getElementById("carnet06").value;
  var $nombre = document.getElementById("nombre06").value;



  if($carnet==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos vacios /carnet',
    })
  }else{
    if ($nombre=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos vacios /nombre',
      })
    } else {
      const $formTecCCADD = document.querySelector(".form-TecCCADD");

      const $formMateriasTecCCADD = document.querySelector(".form-materias-TecCCADD");
      const $formMateriasTecCCADD2 = document.querySelector(".form-materias-TecCCADD2")

        switch($ciclo){
          case "1":
            $formMateriasLicDiseño.style.setProperty("display","block");
            $formLicDiseño.style.setProperty("display","none");
            break;
          case "2":
            $formMateriasLicDiseño2.style.setProperty("display","block");
            $formLicDiseño.style.setProperty("display","none");
            break;
          default:
            alert("Error")
            break;
      }
    }
  }
}

function registrar(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Te Has registrado Corectamente',
    showConfirmButton: false,
    timer: 1500
  })
}

let myText = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.getElementById("count-result").textContent = `Total characters: ${count}`;
});