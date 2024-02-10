
window.addEventListener("scroll", function(){
    let nav = document.querySelector("#nacegacion");
    nav.classList.toggle("abajo",window.scrollY>0);

    let main = document.querySelector("#main");
    main.classList.toggle("arriba",window.scrollY>0);

});

$(".cargando").fadeOut(1500);