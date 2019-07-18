let tentativas = 5;
let resposta;

function lerTexto(tipo){
    return prompt('Digite '+tipo);
}

// função definir resposta e reiniciar dados
function definirResposta(){
    document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
    tentativas=5;
    document.querySelector('h3').innerHTML = 'Letras já inseridas:';
    document.querySelector('aside p').innerHTML = `${tentativas}`;
    document.querySelector('img').src = 'img/forca5.png';
    let palavra = lerTexto('a resposta');
    let dica = lerTexto('uma dica');
    document.querySelector('h2').innerHTML = `Dica: ${dica}`;
    document.querySelector('div').innerHTML = '';
    // converter texto em lista
    resposta = palavra.split('');
    // fazer os quadradinhos
    for(let item=0;item<resposta.length;item++){
        document.querySelector('div').innerHTML += `<input type="text" value="?" disabled>`;
        console.log(item);
    }
    document.querySelectorAll('aside')[2].innerHTML += '<button onclick="iniciar()">Iniciar</button>';
}


let resultado; 
function iniciar(){
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
                return alert('vc ganhou');
            }
        }
    }
}
