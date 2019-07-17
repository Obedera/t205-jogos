let resposta;

function lerTexto(tipo){
    return prompt('Digite a '+tipo);
}

function definirResposta(){
    let palavra = lerTexto('resposta');
    resposta = palavra.split('');
    console.log(resposta);
}



function iniciar(){
    for (let i=0;i<resposta.length;i++){
        let tentativas = 4;
        let letra = lerTexto((i+1)+'º letra da palavra');
        console.log(i);
        if (letra != resposta[i]){
            while(letra != resposta[i]){
                alert('Você errou, tentativas restantes '+tentativas);
                letra = lerTexto((i+1)+'º letra da palavra');
                tentativas--;
                if(tentativas==0){
                    return alert('vc perdeu');
                }
            }
        }
        if(letra == resposta[i]){
            document.querySelector('input').value += letra;  
        }
    }
}