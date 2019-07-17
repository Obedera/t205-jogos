let resposta;

function lerTexto(tipo){
    return prompt('Digite '+tipo);
}

function definirResposta(){
    let palavra = lerTexto('a resposta');
    document.querySelector('div').innerHTML = '';
    resposta = palavra.split('');
    for(let item=0;item<resposta.length;item++){
        document.querySelector('div').innerHTML += `<input type="text" id="${item}" value="">`;
        console.log(item);
    }
}


let tentativas = 5;
let resultado; 
function iniciar(){
    resultado = false;
    let letra = lerTexto('uma letra da palavra');
    for (let i=0;i<resposta.length;i++){
        if(letra == resposta[i]){
            document.querySelectorAll('input')[i].value += letra;
            resultado=true;  
        }
    }
    if(resultado==false){
        tentativas--;
    }
    if(tentativas<=0){
        return alert('vc perdeu');
    }
}
