ScrollReveal().reveal('.aparecer');


window.sr = ScrollReveal();
  sr.reveal('.animacion3', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
  });


  /*= Text multiple =*/

const typed = new Typed('.multiple-text', {
  strings: ['Automoviles', 'Motocicletas.', 'Mascotas.', 'Personas.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
