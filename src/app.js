// Array
let list = {
    "pregunta": "¿Cual es tu lugar favorito cuando estas triste?",
    "resposta1":  "A la playa",
    "resposta2": "A la montaña",
    "resposta3": "En casa",
    "resposta4": "Otros"
}

let pregunta = document.querySelector('.pregunta');

let val1 = document.getElementById('value1');
let val2 = document.getElementById('value2');
let val3 = document.getElementById('value3');
let val4 = document.getElementById('value4');

for(let i = 0; i < 5; i++){
    pregunta.innerHTML = list.pregunta;
    val1.innerHTML = list.resposta1;
    val2.innerHTML = list.resposta2;
    val3.innerHTML = list.resposta3;
    val4.innerHTML = list.resposta4;    
}

/*const btn_prev = document.getElementById('btn-prev');
const btn_next = document.getElementById('btn-next');

btn_prev.addEventListener('click', btn_prev());

function btn_prev(){
    
}

btn_next.addEventListener('click', btn_next());
function btn_next(){

}*/
