const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const cedula = document.getElementById("cedula");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
//llamado del formulario
const formularioPacientes = document.getElementById("registroPacientes");

class Usuario {
    constructor(nombres, apellidos, cedula, edad, telefono, especialidad) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cedula = cedula;
    this.edad = edad;
    this.telefono = telefono;
    this.especialidad = especialidad;
    }
}
const mostrarPacientes = function () {
    let pacientes = [];
    let cuerpoTabla = document.getElementById("cuerpoTablaPacientes");
    let localPacientes = localStorage.getItem("pacientes");
    if (localPacientes) {
    pacientes = JSON.parse(localPacientes);
    }
    pacientes.forEach((paciente) => {
    let fila = document.createElement("tr");
    //Para crear celda DOM tiene un metodo que es insertCell()
    let celdaNombres = fila.insertCell();
    let celdaApellidos = fila.insertCell();
    let celdaCedula = fila.insertCell();
    let celdaEdad = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaMedico = fila.insertCell();

    celdaNombres.textContent = paciente.nombres;
    celdaApellidos.textContent = paciente.apellidos;
    celdaCedula.textContent = paciente.cedula;
    celdaEdad.textContent = paciente.edad;
    celdaTelefono.textContent = paciente.telefono;
    celdaEspecialidad.textContent = paciente.especialidad;
    celdaMedico.textContent = "Sin asignar";

    cuerpoTabla.appendChild(fila);
    });
};

if (window.location.href.endsWith("listadoPacientes.html")) {
    mostrarPacientes();
}

if (window.location.href.endsWith("registroPacientes.html")) {
        formularioPacientes.addEventListener("submit", function (event) {
        event.preventDefault();
            
        let valorNombres = nombres.value;
        let valorApellidos = apellidos.value;
        let valorCedula = cedula.value;
        let valorEdad = edad.value;
        let valorTelefono = telefono.value;
        let valorEspecialidad = especialidad.value;
            
        const paciente = new Usuario(
            valorNombres,
            valorApellidos,
            valorCedula,
            valorEdad,
            valorTelefono,
            valorEspecialidad
        );
        let pacientes = [];
            
        let localPacientes = localStorage.getItem("pacientes");
        if (localPacientes) {
            pacientes = JSON.parse(localPacientes);
        }
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        alert("Paciente registrado!");
        });
    }
