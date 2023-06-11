let nombre = "Sebastian";
let apellido = "Abramowski";

let estudiante = nombre + " " + apellido;
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let estudianteLength = estudiante.length
console.log(estudianteLength)

let primerCaracterNombre = nombre.charAt(0);
console.log(primerCaracterNombre)

let ultimoCaracterApellido =apellido.charAt(apellido.length-1)
console.log(ultimoCaracterApellido)

let estudianteSinEspacios = estudiante.replace(/ /g, "");
console.log(estudianteSinEspacios)
console.log(estudianteSinEspacios.length)

let nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante)