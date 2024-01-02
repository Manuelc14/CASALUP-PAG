window.onscroll = () => {

    scroll = document.documentElement.scrollTop;

    let header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
        
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }    

    let titulo = document.querySelector('.title_header');
    titulo.classList.toggle('sticky', window.scrollY > 100);

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

    menu = document.getElementById("header");
    body = document.getElementById("container__all");
    nav = document.getElementById("nav");

function mostrar_menu(){

    body.classList.toggle('move_content');
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        body.classList.remove('move_content');
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

});

/*========= scroll reveal =========*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .procesos-title, .contenedor__casalup__img', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .portfolio-box, .testimonial-wrapper, .about-content, .contactanos, .services-box, .cursos-box, .box-consultas, .categories, .contacto, .box__nosotros, .slider', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .education-column, .skills-column, form, .categorias, .box-paso, .titulo__principal, .certificados, .container__card_pag, .box__nosotros1', { origin: 'left' });