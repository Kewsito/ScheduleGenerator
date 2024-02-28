var coloresMaterias = {};
function agregarMateria() {
    var dia = prompt("Ingrese el día de la semana (ej. lunes)").toLowerCase();
    var materia = prompt("Ingrese el nombre de la materia").toLowerCase();
    var horario = prompt("Ingrese el horario de la materia (ej. 10:00 - 12:00)").toLowerCase();

        // Verificar si la materia ya tiene un color asignado
    if (!coloresMaterias[materia]) {
        // Generar un color aleatorio en formato hexadecimal
        var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
        coloresMaterias[materia] = colorAleatorio;
    }
  
    var materiaDiv = document.createElement('div');
    materiaDiv.classList.add('materia');
    materiaDiv.style.backgroundColor = coloresMaterias[materia]; // Asignar el color de fondo
    materiaDiv.innerHTML = '<h3>' + materia.charAt(0).toUpperCase() + materia.slice(1) + '</h3><p>' + horario + '</p>';

    document.getElementById(dia).appendChild(materiaDiv);
}