cartas = [];
for (let item of document.querySelectorAll('img')){
    for(i = 0; i<document.querySelectorAll('img').length;i++){
        cartas[i] = item.src;
    }
}
console.log(cartas);



