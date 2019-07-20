let quadradinhos = document.querySelectorAll("div");
let jogador = 0;

function mudarCor(event){
    if (event.target.style.backgroundImage == ''){
        if((jogador%2)==0){
            event.target.style.backgroundImage = 'url(img/x.png)';
            event.target.classList.add('x');
        }
        else{
            event.target.style.backgroundImage = 'url(img/o.png)';
            event.target.classList.add('o');
        }
        jogador++;
    }
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}

function zerar(){
    for(let item of quadradinhos){
        item.style.backgroundImage = '';
    }
}

function pegar(lista){
    let quadrados = [];
    console.log(lista[0].style.backgroundImage);
    for (i = 0; i<lista.length;i++){
        if(lista[i].classList.contains('x')){
            quadrados[i] = 'x';
            console.log('x');
        }
        else if(lista[i].classList.contains('o')){
            quadrados[i] = 'o';
            console.log('o');
        }
    }
    console.log(quadrados);
    return quadrados;
}

function verificar(){
    pegar(quadradinhos);

}
