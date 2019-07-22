let botoes = document.querySelectorAll('.botao');
let sequencia = [];
let sequenciaUser = [];
let tamanhoSequencia = 0;

botoes[0].style.backgroundColor = 'red';
botoes[1].style.backgroundColor = 'green';
botoes[2].style.backgroundColor = 'blue';
botoes[3].style.backgroundColor = 'yellow';
ordenarJogo();


function ordenarJogo(){
    sequenciaMaquina();
}

// falta terminar
function zerarSequencia(vetor){
    vazio = [];
    vetor = vazio;
}



function acenderUser(event){
    event.target.style.opacity = '1';
    travarBotao(botoes);
    setTimeout(function(){
        event.target.style.opacity = '0.4';
        clicarBotao(botoes);
    },600);
    botaoSelecionado = event.target.style.backgroundColor;
    sequenciaUser = sequenciaUser.concat(botaoSelecionado);
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



