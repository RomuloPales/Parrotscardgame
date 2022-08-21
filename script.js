let numeroDeCartas = 0
let gifsSelecionados = []
let gifClicado = []
let paresFeitos = []
let numeroJogadas = 0
let par1
let par2
let gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]

function verificarCarta() {
for(numeroDeCartas;numeroDeCartas < 4 || numeroDeCartas > 14|| numeroDeCartas % 2 !== 0;) {
    numeroDeCartas = prompt("Quer jogar com quantas cartas ?")
}
}

function sortearCarta() {
    for(let i = 0; i < numeroDeCartas;i++){
        gifsSelecionados.push(gifs[i])
        gifsSelecionados.sort(comparador)
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}

gifsSelecionados.sort(comparador)

function colocarCartas() {
    const imagem = document.querySelector(".imagens")
    
       sortearCarta()
    imagem.innerHTML += `<div class="escondido"></div>`
    for(let i = 0; i < numeroDeCartas;i++){
        imagem.innerHTML += `<div class="carta"  onclick = virarCarta(this)>
        <img class="foto frente"  src='arquivos/front.png' />
        <img class="foto verso"  src='arquivos/${gifsSelecionados[i]}' />
        </div>`
    }
   
}
verificarCarta()
colocarCartas()