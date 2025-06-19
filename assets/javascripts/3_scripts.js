  // Función pintar con un color por defecto
  function pintar(color = 'green') {
    document.body.style.backgroundColor = color;
  }

  // Al cargar la página, se pinta de verde por defecto
  pintar();

  // Al hacer clic en el párrafo, se pinta de amarillo
  const parrafo = document.getElementById('miParrafo');
  parrafo.addEventListener('click', function() {
    pintar('yellow');
  });