function pegarCartas(){
    cartas = [];
    for (i = 0; i<document.querySelectorAll('img').length;i++){
        cartas[i] = document.querySelectorAll('img')[i].src;
    }
    return cartas;
}

function mandarCartas(lista){
    for (i = 0; i<lista.length;i++){
        document.querySelectorAll('img')[i].src = lista[i];
    }
}

function embaralhar(lista){
    let valor;
    let indice_aleatorio;
    for (let i = lista.length - 1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
        valor = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor;
    }
    mandarCartas(lista);
}

embaralhar(pegarCartas());
cartas = pegarCartas();

console.log(cartas);



function virarCartas(lista){
    cartasViradas = []
    for (j=0; j<(lista.length); j++){
        cartasViradas[j] = '';
    }
    mandarCartas(cartasViradas);
}

setTimeout(function (){
    virarCartas(cartas);
}, 3000);

