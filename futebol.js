let list = document.querySelectorAll('.item');
let botaoEsquerdo = document.getElementById('botaoEsquedo');
let botaoDireito = document.getElementById('botaoDireito');


let contagem = list.length;
let active = 0

//chamando a função

botaoDireito.onclick = () => {
    let activePrimeiro = document.querySelector(".active");
    activePrimeiro.classList.remove("active");

    active = active >= contagem -1 ? 0 : active+1;
    list[active].classList.add('active')

}

botaoEsquerdo.onclick = () => {
    let activePrimeiro = document.querySelector(".active");
    activePrimeiro.classList.remove("active");
  
    active = active <= 0 ? contagem -1: active -1;
    list[active].classList.add("active");}
