const datosPersonales = {
    nombre: "Sebastian",
    apellido: "Abramowski",
    edad: 25,
    altura: "1.72",
    eresDesarrollador: false
}

const edad = "edad"
console.log(datosPersonales[edad])

const lista = [
    {datosPersonales},
    {
        nombre:"Lautaro",
        apellido:"Lopez",
        edad: 24,
        altura: "1.72",
        eresDesarrollador: false
    },
    {
        nombre:"Gonzalo",
        apellido:"Pereyra",
        edad: 20,
        altura: "1.83",
        eresDesarrollador: false
    }
]

lista.sort((a, b) => a.edad - b.edad)

console.log(lista)
