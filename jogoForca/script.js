let tentativas = 5;
let resposta;
let resultado; 

function lerTexto(tipo){
    return prompt('Digite '+tipo);
}

function vetoriar(valor){
    return valor.split('');
}

function reiniciar(){
    tentativas=5;
    document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
    document.querySelector('h3').innerHTML = 'Letras já inseridas:';
    document.querySelector('aside p').innerHTML = `${tentativas}`;
    document.querySelector('img').src = 'img/forca5.png';
    document.querySelector('div').innerHTML = '';

}
function fazerQuadradinhos(vetor){
    for(let item=0;item<vetor.length;item++){
        document.querySelector('div').innerHTML += `<input type="text" value="?" disabled>`;
        console.log(item);
    }

}

function definirResposta(){
    reiniciar();
    let palavra = lerTexto('a resposta');
    resposta = vetoriar(palavra);
    let dica = lerTexto('uma dica');
    document.querySelector('h2').innerHTML = `Dica: ${dica}`;
    fazerQuadradinhos(resposta);
    document.querySelectorAll('aside')[2].innerHTML += '<button onclick="iniciar()">Iniciar</button>';
}


function iniciar(){
    document.querySelectorAll('button')[1].innerHTML = 'chutar';
    resultado = false;
    let letra = lerTexto('uma letra da palavra');
    document.querySelector('h3').innerHTML += ` ${letra}`;
    // comparar a letra com o vetor resposta
    for (let i=0;i<resposta.length;i++){
        if(letra == resposta[i]){
            document.querySelectorAll('input')[i].value = letra;
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
    // verificador pra ver se todos os quadradinho foram preenchidos
    let contador=0;
    for(let verificador of document.querySelectorAll('input')){
        if (verificador.value != '?'){
            contador++;
            if(contador==resposta.length){
                document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
                return alert('vc ganhou');
            }
        }
    }
}
