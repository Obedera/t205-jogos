let quadradinhos = document.querySelectorAll("img");
let imgsCarta = ["img/img0.jpg","img/img1.jpg"];
let cartas = imgsCarta.concat(imgsCarta);
let cartaUm;
let cartaDois;



function iniciarJogo(){
    cartaUm = null;
    cartaDois = null;
    destravarClick();
}


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
console.log(cartas);

function virarCartas(){
    for (let j of quadradinhos){
        j.classList.toggle('flip');
        j.classList.toggle('aberta');
        j.classList.add('fechada');
        j.src = ('img/null.jpg');
    }
}

function verificarCarta(event, lista){
    for(item in quadradinhos){
        if(quadradinhos[item] == event.target){
            event.target.src = lista[item];
            event.target.classList.toggle('aberta');
        }
    }
    if (event.target.classList.contains('fechada')){
        event.target.src = ('img/null.jpg');
    }
}


setTimeout(function (){
    virarCartas(cartas);
    iniciarJogo();
}, 3000);


function mudarEstado(event){
    event.target.classList.toggle('flip');
    event.target.classList.toggle('fechada');
    verificarCarta(event, cartas);
}

function destravarClick(){
    for(let quadradinho of quadradinhos){
        quadradinho.onclick = mudarEstado;
    }
}
