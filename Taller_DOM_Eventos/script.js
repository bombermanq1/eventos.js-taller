
const menuMovil = document.getElementById('menuMovil');
document.getElementById('botonMovil').addEventListener('click', function () {
  menuMovil.classList.toggle('responsive');
});


document.getElementById('botonDropdown').addEventListener('click', function () {
  document.getElementById('opcionesDropdown').classList.toggle('show');
});


document.getElementById('abrirLateral').addEventListener('click', function () {
  document.getElementById('sidebar').style.left = '0';
});
document.getElementById('cerrarLateral').addEventListener('click', function () {
  document.getElementById('sidebar').style.left = '-200px';
});

const botones = document.querySelectorAll('.acordeon');
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const contenido = boton.nextElementSibling;
    if (contenido.style.display === 'block') {
      contenido.style.display = 'none';
    } else {
      contenido.style.display = 'block';
    }
  });
});

document.getElementById('miCheckbox').addEventListener('change', function () {
  const mensaje = document.getElementById('mensajeCheckbox');
  mensaje.style.display = this.checked ? 'block' : 'none';
});


document.getElementById('helado').addEventListener('change', function () {
  const resultado = document.getElementById('resultadoHelado');
  resultado.textContent = this.value ? 'Te gusta el sabor ' + this.value : '';
});


window.addEventListener('scroll', function () {
  const barra = document.getElementById('barraScroll');
  const top = document.getElementById('botonTop');
  if (window.scrollY > 100) {
    barra.classList.add('cambio');
    top.style.display = 'block';
  } else {
    barra.classList.remove('cambio');
    top.style.display = 'none';
  }
});
document.getElementById('botonTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('pantallaCarga').style.display = 'none';
  }, 3000);
});


function agregarTarea() {
  const entrada = document.getElementById('nuevaTarea');
  const texto = entrada.value.trim();
  if (texto !== '') {
    const tarea = document.createElement('li');
    tarea.textContent = texto;
    document.getElementById('listaTareas').appendChild(tarea);
    entrada.value = '';
  }
}
document.getElementById('agregarTarea').addEventListener('click', agregarTarea);
document.getElementById('nuevaTarea').addEventListener('keyup', function (evento) {
  if (evento.key === 'Enter') agregarTarea();
});
