// Variables globales
var alumnos = [];
var cantidadAlumnos = 0;
var alumnoIndex = 0;

// Función para agregar campos de entrada para el próximo alumno
function agregarCampoAlumno() {
  if (alumnoIndex >= cantidadAlumnos) {
    document.getElementById("siguiente-alumno-btn").style.display = "none";
    mostrarAlumnoMayorEdad();
    return;
  }

  var container = document.getElementById("alumnos-container");

  container.innerHTML =
    "<h4>Alumno " + (alumnoIndex + 1) + "</h4>" +
    "<label for='nombre' class='form-label'>Nombre completo:</label>" +
    "<input type='text' id='nombre' class='form-control' required><br>" +
    "<label for='edad' class='form-label'>Edad:</label>" +
    "<input type='number' id='edad' class='form-control' required><br>" +
    "<label for='genero' class='form-label'>Género:</label>" +
    "<select id='genero' class='form-select' required>" +
    "  <option value='Masculino'>Masculino</option>" +
    "  <option value='Femenino'>Femenino</option>" +
    "</select><br><br>";
  
  alumnoIndex++;
}

// Función para obtener el alumno de mayor edad
function obtenerAlumnoMayorEdad() {
  var maxEdad = 0;
  var alumnoMayorEdad = null;

  for (var i = 0; i < alumnos.length; i++) {
    var edad = parseInt(alumnos[i].edad);

    if (edad > maxEdad) {
      maxEdad = edad;
      alumnoMayorEdad = alumnos[i];
    }
  }

  return alumnoMayorEdad;
}

// Función para mostrar el alumno de mayor edad
function mostrarAlumnoMayorEdad() {
  // Obtener el alumno de mayor edad
  var alumnoMayorEdad = obtenerAlumnoMayorEdad();

  // Mostrar el resultado en la página
  var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<h3>Alumno de mayor edad:</h3>" +
    "<p>Nombre: " + alumnoMayorEdad.nombre + "</p>" +
    "<p>Género: " + alumnoMayorEdad.genero + "</p>";
}

// Evento para manejar el envío del formulario de cantidad de alumnos
document.getElementById("cantidad-alumnos-form").addEventListener("submit", function (event) {
  event.preventDefault();

  cantidadAlumnos = parseInt(document.getElementById("cantidad-alumnos-input").value);

  if (cantidadAlumnos < 5 || cantidadAlumnos > 20) {
    alert("La cantidad de alumnos debe estar entre 5 y 20.");
    return;
  }

  document.getElementById("cantidad-alumnos-form").style.display = "none";
  document.getElementById("alumnos-form").style.display = "block";
  agregarCampoAlumno();
});

// Evento para manejar el clic en el botón "Siguiente Alumno"
document.getElementById("siguiente-alumno-btn").addEventListener("click", function () {
  // Obtener los datos del alumno actual
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;

  alumnos.push({ nombre: nombre, edad: edad, genero: genero });

  // Limpiar los campos del alumno actual
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";

  // Mostrar el siguiente alumno o el resultado final
  agregarCampoAlumno();
});

