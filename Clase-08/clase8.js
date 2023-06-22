function sinParametros (){
    return true
}

const esperar = function(milisegundos=5000){
    setTimeout(function(){
        console.log("Hola soy una promesa");
        },milisegundos)
}

function* idPares(){
    let id = 0;
    while(true){
        yield id += 2
    }
}