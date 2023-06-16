let compras = ["Pan","Gaseosa", "Carne", "Leche", "Yogurt"]
console.log(compras)

compras.push("Aceite de Girasol")
console.log(compras)

compras.pop("Aceite de Girasol")
console.log(compras)

const peliculasFavoritas = [
    {titulo:"Escuela de Rock", director:"Richard Linklater", fecha: 2003},
    {titulo:"Bastardos sin gloria", director:"Quentin Tarantino", fecha: 2009},
    {titulo:"Relatos Salvajes", director:"Damián Szifrón", fecha: 2014}
]

const nuevaListaDePeliculas = peliculasFavoritas.filter(obj => obj.fecha > 2010)
console.log(nuevaListaDePeliculas)

const directores = peliculasFavoritas.map(obj => obj.director)
console.log(directores)

const titulos = peliculasFavoritas.map(obj => obj.titulo)
console.log(titulos)

const directoresYTitulos = (directores.concat(titulos))
console.log(directoresYTitulos)

const listaPropagacion = [...titulos,...directores]
console.log(listaPropagacion)

