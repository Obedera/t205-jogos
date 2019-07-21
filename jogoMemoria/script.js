let quadradinhos = document.querySelectorAll("img");
let imgsCarta = ["img/img0.jpg","img/img1.jpg"];
let cartas = imgsCarta.concat(imgsCarta);
let cartaUm;
let cartaDois;


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

embaralhar(cartas);
// cartas = pegarCartas();
console.log(cartas);

function virarCartas(){
    // cartasViradas = []
    for (let j of quadradinhos){
        // cartasViradas[j] = '';
        j.classList.toggle('flip');
        j.src = ('img/null.jpg');
    }
}

function verificarCarta(event, lista){
    for(item in quadradinhos){
        if(quadradinhos[item] == event.target){
            event.target.src = lista[item];
        }
    }
}


setTimeout(function (){
    virarCartas(cartas);
    destravarClick();
}, 3000);


function mudarEstado(event){
    event.target.classList.toggle('flip');
    verificarCarta(event, cartas);
}

function destravarClick(){
    for(let quadradinho of quadradinhos){
        quadradinho.onclick = mudarEstado;
    }
}
