let numeroDeCartas = 0
let gifsSelecionados = []
let gifClicado = []
let paresFeitos = []
let numeroJogadas = 0
let primeiroPar
let segundoPar
let gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]

function verificarCarta() {
for(numeroDeCartas ;numeroDeCartas < 4 || numeroDeCartas > 14|| numeroDeCartas % 2 !== 0;) {
    numeroDeCartas = prompt("Quer jogar com quantas cartas (4~14)?")
}
}

function sortearCarta() {
    for(let X = 0; X < numeroDeCartas;X++){
        gifsSelecionados.push(gifs[X])
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


function virarCarta(divSelecionada){
    numeroJogadas++
    divSelecionada.querySelector(".verso").classList.add("virar-verso")
    divSelecionada.querySelector(".frente").classList.add("virar-frente")
    if(!document.querySelector(".primeiroPar")){
        divSelecionada.classList.add("primeiroPar")
        primeiroPar = divSelecionada
        primeiroPar.setAttribute('onclick','')
    }
    else{
        document.querySelector(".escondido").style.display = "block";    
        divSelecionada.classList.add("segundoPar");
        segundoPar = divSelecionada
        setTimeout(compararPar, 1000)
    }
}


function compararPar(){
    if(primeiroPar.innerHTML !== segundoPar.innerHTML){
        primeiroPar.querySelector(".verso").classList.remove("virar-verso")
        primeiroPar.querySelector(".frente").classList.remove("virar-frente")
        segundoPar.querySelector(".verso").classList.remove("virar-verso")
        segundoPar.querySelector(".frente").classList.remove("virar-frente")
        primeiroPar.setAttribute("onclick", "virarCarta(this)")
        primeiroPar.classList.remove("primeiroPar")
        segundoPar.classList.remove("segundoPar")
    }
    else{
        paresFeitos.push("Feito")
        primeiroPar.classList.remove("primeiroPar")
        segundoPar.classList.remove("segundoPar")
        primeiroPar.setAttribute('onclick','')
        segundoPar.setAttribute('onclick','')
        mostrarNumeroJogadas()
        
    }
    document.querySelector(".escondido").style.display = "none"
}

 
function mostrarNumeroJogadas(){
    if(paresFeitos.length === (numeroDeCartas / 2)){
        alert(`Parabéns, você ganhou em ${numeroJogadas} jogadas!!`)
        alert("Para reiniciar o jogo atualize a pagina!")
    }
}