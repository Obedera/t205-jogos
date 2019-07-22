let botoes = document.querySelectorAll('.botao');
let sequencia = [];
let sequenciaUser = [];
let tamanhoSequencia = 0;
let contadorJogada = 0;
botoes[0].style.backgroundColor = 'red';
botoes[1].style.backgroundColor = 'green';
botoes[2].style.backgroundColor = 'blue';
botoes[3].style.backgroundColor = 'yellow';
ordenarJogo();


function iniciarJogada(valor){
    console.log(contadorJogada);
    if(sequencia.length==valor){
        // zerarSequencia(sequenciaUser);    
        verificarJogo();
    }
}

let contador = 0;
function verificarJogo(){
    for(let posicao in sequenciaUser){
        contador++;
        if(sequencia[posicao] != sequenciaUser[posicao]){
            return alert('você perdeu');
        }
    }
    if(contador>=sequencia.length){
        contador=0;
        contadorJogada=0;
        zerarSequencia(sequenciaUser);
        ordenarJogo();
    }
}


function ordenarJogo(){
    travarBotao(botoes);
    sequenciaMaquina();
}

function zerarSequencia(vetor){
    vetor.splice(0,vetor.length);
}



function acenderUser(event){
    event.target.style.opacity = '1';
    travarBotao(botoes);
    setTimeout(function(){
        event.target.style.opacity = '0.4';
        clicarBotao(botoes);
    },600);
    botaoSelecionado = event.target.id;
    sequenciaUser = sequenciaUser.concat(botaoSelecionado);
    contadorJogada++;
    iniciarJogada(contadorJogada);
}


function somarSequencia(valor){
    sequencia = sequencia.concat(valor);
}


function sequenciaMaquina(){
    travarBotao(botoes);
    acenderAleatorio();
    tamanhoSequencia=0;
    const intervalo = setInterval(function(){
        if (tamanhoSequencia>sequencia.length) {
            clearInterval(intervalo)
            clicarBotao(botoes);
        }
        if (tamanhoSequencia<sequencia.length){
        acender(sequencia[tamanhoSequencia]);
        }
        tamanhoSequencia++
    },1600)
}



function acender(valor){
    botoes[valor].style.opacity = '1';
    setTimeout(function(){
        botoes[valor].style.opacity = '0.4';
    },1000);
}

function clicarBotao(botoes){
    for(let botao of botoes){
        botao.onclick = acenderUser;
    }
}

function travarBotao(botoes){
    for(let botao of botoes){
        botao.onclick = null;
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function acenderAleatorio(){
    let valor = aleatorio(0,3);
    return somarSequencia(valor);
}



