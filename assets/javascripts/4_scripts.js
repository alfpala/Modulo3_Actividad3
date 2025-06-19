 // Parte 1: Al hacer clic, cambia el color del div a negro
    const divs = ['divAzul', 'divRojo', 'divVerde', 'divAmarillo'];
    divs.forEach(id => {
      document.getElementById(id).addEventListener('click', function () {
        this.style.backgroundColor = 'black';
      });
    });

    // Parte 2: Teclas que cambian el color del div "key"
    let colorGlobal = '';

    document.addEventListener('keydown', function (event) {
      const keyDiv = document.getElementById('key');
      let newDiv;
      // Cambia el color del div "key" según la tecla presionada

      switch (event.key.toLowerCase()) {
        case 'a':
          colorGlobal = 'pink';
          keyDiv.style.backgroundColor = colorGlobal;
          break;
        case 's':
          colorGlobal = 'orange';
          keyDiv.style.backgroundColor = colorGlobal;
          break;
        case 'd':
          colorGlobal = 'skyblue';
          keyDiv.style.backgroundColor = colorGlobal;
          break;
        case 'q':
          newDiv = crearDiv('purple');
          document.body.appendChild(newDiv);
          break;
        case 'w':
          newDiv = crearDiv('gray');
          document.body.appendChild(newDiv);
          break;
        case 'e':
          newDiv = crearDiv('brown');
          document.body.appendChild(newDiv);
          break;
      }
    });

    // Función para crear nuevos divs
    function crearDiv(color) {
      const nuevoDiv = document.createElement('div');
      nuevoDiv.style.width = '200px';
      nuevoDiv.style.height = '200px';
      nuevoDiv.style.backgroundColor = color;
      nuevoDiv.style.border = '2px solid black';
      nuevoDiv.style.margin = '10px';
      return nuevoDiv;
    }