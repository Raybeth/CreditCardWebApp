// caso 2!!!!!!!!!!!!!!!!!!!!!!!
// Obtener referencias a los elementos del formulario
const formulario = document.getElementById('alumno-form');
const mensaje = document.getElementById('mensaje');
const listaAlumnos = document.getElementById('alumnos-lista');

// Agregar evento de envío del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const grado = document.getElementById('grado').value;
    const foto = document.getElementById('foto').files[0];

    // Validar el grado seleccionado
    if (grado === 'Ultimo Grado') {
     // Determinar la academia militar según las condiciones establecidas
     let academia = '';
     let color = '';
     if (genero === 'Femenino' && edad >= 14) {
         academia = 'Fuerza Aérea';
         color = 'rojo';
     } else if (genero === 'Masculino' && edad >= 14) {
         academia = 'Marina de Guerra';
         color = 'verde';
     } else if (edad <= 13) {
         academia = 'Ejército Nacional';
         color = 'marron';
     }

        // Crear una nueva fila en la tabla con los datos del alumno
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${genero}</td>
            <td>${grado}</td>
            <td>
                <div class="color-box ${color}"></div>
                <span class="academia">${academia}</span>
            </td>
            <td><img src="${URL.createObjectURL(foto)}" alt="Foto del alumno" class="student-photo"></td>
        `;

        // Agregar la fila a la lista de alumnos
        listaAlumnos.appendChild(fila);

        // Limpiar los campos del formulario
        formulario.reset();

        // Mostrar mensaje de éxito
        mensaje.innerText = 'Alumno agregado correctamente.';
        mensaje.classList.add('success-message');
    } else {
        // Mostrar mensaje de error
        mensaje.innerText = 'El decreto no aplica para su grado.';
        mensaje.classList.add('error-message');
    }
});
