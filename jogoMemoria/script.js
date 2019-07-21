let quadradinhos = document.querySelectorAll("img");
let imgsCarta = ["img/img0.jpg","img/img1.jpg"];
let cartas = imgsCarta.concat(imgsCarta);
let cartaUm = null;
let cartaDois = null;
let vez=0;

function iniciarJogo(){
    cartaUm = null;
    cartaDois = null;
    destravarClick();
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

function virarCartas(){
    for (let j of quadradinhos){
        j.classList.toggle('flip');
        j.classList.toggle('aberta');
        j.classList.add('fechada');
        j.src = ('img/null.jpg');
    }
}


function abrirCarta(event, lista){
    for(item in quadradinhos){
        if(quadradinhos[item] == event.target){
            event.target.src = lista[item];
            event.target.classList.toggle('aberta');
            event.target.classList.toggle('flip');
            event.target.classList.toggle('fechada');
        }
    }
}


function verificarCarta(event, lista, carta){
    if(event.target.classList.contains('fechada')){
        console.log('aberta')
    // if(event.target.classList.contains('aberta')){
        if((carta%2)==1){
            console.log(cartaUm);
            abrirCarta(event, lista);
            cartaUm = event.target;
        }

        if((carta%2)==0){
            abrirCarta(event, lista);
            cartaDois = event.target;

            if( ((cartaUm.src) == (cartaDois.src)) ){
                cartaUm.classList.remove('fechada');
                cartaUm.classList.remove('flip');
                cartaDois.classList.add('aberta');
                cartaDois.classList.remove('fechada');
                cartaDois.classList.remove('flip');
                iniciarJogo();
            }

            else{
                cartaUm.classList.toggle('aberta');
                cartaUm.classList.add('fechada');
                cartaDois.classList.toggle('aberta');
                cartaDois.classList.add('fechada');
                travarCliques();
                setTimeout(function(){
                    cartaUm.src = ('img/null.jpg');
                    cartaDois.src = ('img/null.jpg');
                    iniciarJogo();
                },2000)
            }
        }
        
    

    }
}

function travarCliques(){
    for(let carta of quadradinhos){
        carta.onclick = null;
    }
}

setTimeout(function (){
    virarCartas(cartas);
    iniciarJogo();
}, 3000);


function mudarEstado(event){
    vez++;
    verificarCarta(event, cartas, vez);
}

function destravarClick(){
    for(let quadradinho of quadradinhos){
        quadradinho.onclick = mudarEstado;
    }
}
