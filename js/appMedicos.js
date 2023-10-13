const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const cedula = document.getElementById("cedula");
const consultorio = document.getElementById("consultorio");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const especialidad = document.getElementById("especialidad");
//llamado del formulario
const formularioMedicos = document.getElementById("registroMedicos");

class Usuario {
    constructor(nombres, apellidos, cedula,consultorio, telefono,correo, especialidad) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cedula = cedula;
    this.consultorio= consultorio;
    this.telefono = telefono;
    this.correo=correo;
    this.especialidad = especialidad;
    }
}

const mostrarMedicos = function () {
    let medicos = [];
    let cuerpoTabla = document.getElementById("cuerpoTablaMedicos");
    let localMedicos = localStorage.getItem("medicos");
    if (localMedicos) {
    medicos = JSON.parse(localMedicos);
    }
    medicos.forEach((medico) => {
    let fila = document.createElement("tr");
    //Para crear celda DOM tiene un metodo que es insertCell()
    let celdaNombres = fila.insertCell();
    let celdaApellidos = fila.insertCell();
    let celdaCedula = fila.insertCell();
    let celdaConsultorio = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaCorreo = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaPaciente = fila.insertCell();

    celdaNombres.textContent = medico.nombres;
    celdaApellidos.textContent = medico.apellidos;
    celdaCedula.textContent = medico.cedula;
    celdaConsultorio.textContent = medico.consultorio;
    celdaTelefono.textContent = medico.telefono;
    celdaCorreo.textContent = medico.correo;
    celdaEspecialidad.textContent = medico.especialidad;
    celdaPaciente.textContent = "Sin asignar";

    cuerpoTabla.appendChild(fila);
        });
};

if (window.location.href.endsWith("listadoMedicos.html")) {
    mostrarMedicos();
}

if (window.location.href.endsWith("registroMedicos.html")) {
        formularioMedicos.addEventListener("submit", function (event) {
        event.preventDefault();
            
        let valorNombres = nombres.value;
        let valorApellidos = apellidos.value;
        let valorCedula = cedula.value;
        let valorConsultorio = consultorio.value;
        let valorTelefono = telefono.value;
        let valorCorreo = correo.value;
        let valorEspecialidad = especialidad.value;
            
        const medico = new Usuario(
            valorNombres,
            valorApellidos,
            valorCedula,
            valorConsultorio,
            valorTelefono,
            valorCorreo,
            valorEspecialidad
        );
        let medicos = [];
            
        let localMedicos = localStorage.getItem("medicos");
        if (localMedicos) {
            medicos = JSON.parse(localMedicos);
        }
        medicos.push(medico);
        localStorage.setItem("medicos", JSON.stringify(medicos));
        alert("Medico registrado!");
        });
    }