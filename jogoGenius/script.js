let botoes = document.querySelectorAll('.botao');
let sequencia = [];
let sequenciaUser = [];
botoes[0].style.backgroundColor = 'red';
botoes[1].style.backgroundColor = 'green';
botoes[2].style.backgroundColor = 'blue';
botoes[3].style.backgroundColor = 'yellow';
clicarBotao(botoes);

function acenderUser(event){
    event.target.style.opacity = '1';
    travarBotao(botoes);
    setTimeout(function(){
        event.target.style.opacity = '0.4';
        clicarBotao(botoes);
    },1000);
    botaoSelecionado = event.target.style.backgroundColor;
    sequenciaUser = sequenciaUser.concat(botaoSelecionado);
}

function acender(event){
    event.target.style.opacity = '1';
    setTimeout(function(){
        event.target.style.opacity = '0.4';
    },1000);
    botaoSelecionado = event.target.style.backgroundColor;
    sequencia = sequencia.concat(botaoSelecionado);
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
    let valor = aleatorio(0,4);
    if(valor==0){
        return 'red'
    }
    if(valor==1){
        return 'green'
    }
    if(valor==2){
        return 'blue'
    }
    if(valor==3){
        return 'yellow'
    }
}



