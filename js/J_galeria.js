
const galeria = document.querySelector("#galeria");
var seccionImg = document.querySelectorAll(".seccion-img");
var seccionImgLast = seccionImg[seccionImg.length - 1];
// const btnRight = document.querySelector("#btn-left");
// const btnLeft = document.querySelector("#btn-right");

galeria.insertAdjacentElement("afterbegin", seccionImgLast);

function MoverDerecha() {
    var seccionImgFirst = document.querySelectorAll(".seccion-img")[0];
    galeria.style.marginLeft = "-200%";
    galeria.style.transition = "all .5s";

    setTimeout(function () {
        galeria.style.transition = "none";
        galeria.insertAdjacentElement("beforeend", seccionImgFirst);
        galeria.style.marginLeft = "-100%";
    }, 500);

}

function MoverIzquierda() {
    var seccionImg = document.querySelectorAll(".seccion-img");
    var seccionImgLast = seccionImg[seccionImg.length - 1];
    galeria.style.marginLeft = "0";
    galeria.style.transition = "all .5s";

    setTimeout(function () {
        galeria.style.transition = "none";
        galeria.insertAdjacentElement("afterbegin", seccionImgLast);
        galeria.style.marginLeft = "-100%";
    }, 500);

}

// btnRight.addEventListener("click", function(){
//  MoverDerecha();
// });

// btnLeft.addEventListener("click", function(){
//  MoverIzquierda();
// });

setInterval(() => {
    MoverDerecha();
}, 2500);