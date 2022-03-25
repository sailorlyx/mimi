function botones(nombre) {
    console.log("puta tu madre, " + nombre);
}

let slides = document.getElementsByClassName('mySlide');
console.log('Sin esperar a que cargue: ' + slides.length);

document.addEventListener("DOMContentLoaded", function(event) { 
   let slides = document.getElementsByClassName('mySlide');
   console.log('Esperando a que cargue: ' + slides.length);
});