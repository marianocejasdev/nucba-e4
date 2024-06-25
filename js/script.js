let botonMenu = document.getElementById('btn-menu')
let menu = document.getElementById("menu");


botonMenu.addEventListener("click", () => {

  menu.style.removeProperty(display)
  menu.classList.add('d-flex')


})

