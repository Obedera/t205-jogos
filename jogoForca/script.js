let tentativas = 5;
let resposta;

function lerTexto(tipo){
    return prompt('Digite '+tipo);
}

function definirResposta(){
    tentativas=5;
    document.querySelector('img').src = 'img/forca5.png';
    let palavra = lerTexto('a resposta');
    let dica = lerTexto('uma dica');
    document.querySelector('h2').innerHTML = `Dica: ${dica}`;
    document.querySelector('div').innerHTML = '';
    resposta = palavra.split('');
    for(let item=0;item<resposta.length;item++){
        document.querySelector('div').innerHTML += `<input type="text" value="" disabled>`;
        console.log(item);
    }
}


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
    document.querySelector('aside p').innerHTML = `${tentativas}`;
    document.querySelector('img').src = `img/forca${tentativas}.png`;
    if(tentativas<=0){
        return alert('vc perdeu');
    }
}
