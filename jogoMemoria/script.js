
// Puxar posição e localização das imgs e armarzenar em um vetor
function pegarCartas(){
    let cartas = [];
    for (i = 0; i<document.querySelectorAll('img').length;i++){
        cartas[i] = document.querySelectorAll('img')[i].src;
    }
    return cartas;
}

// Pegar um vetor e embaralhar as posições deles
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

// Mandar um vetor atualizando no html a posições das imgs
function mandarCartas(lista){
    for (i = 0; i<lista.length;i++){
        document.querySelectorAll('img')[i].src = lista[i];
        
    }
}

embaralhar(pegarCartas());
cartas = pegarCartas();
console.log(cartas);
let quadradinhos = document.querySelectorAll("img");

function virarCartas(){
    // cartasViradas = []
    for (let j of quadradinhos){
        // cartasViradas[j] = '';
        j.classList.toggle('flip');
    }
}

setTimeout(function (){
    virarCartas(cartas);
}, 3000);


function mudarCor(event){
    event.target.classList.toggle('flip');
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}
