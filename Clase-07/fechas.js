const fechaHoy = new Date("June 19, 2023 23:31:43")
console.log(fechaHoy)

const fechaNacimiento = new Date("October 17, 1997 03:04:23")
console.log(fechaNacimiento)

const tiempo = fechaHoy > fechaNacimiento
console.log(tiempo)

const diaDeNacimiento = fechaNacimiento.getDate()
console.log(diaDeNacimiento)

const mesDeNacimiento = fechaNacimiento.getMonth() + 1
console.log(mesDeNacimiento)

const añoDeNacimiento = fechaNacimiento.getFullYear()
console.log(añoDeNacimiento)