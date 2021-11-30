let jogo = document.getElementById("jogo")
let torre1 = document.createElement("div")
let torre2 = document.createElement("div")
let torre3 = document.createElement("div")
let botao = document.createElement("button")
let contador = document.createElement("div")
torre1.id = "torre1"
torre2.id = "torre2"
torre3.id = "torre3"
botao.id = "reset"
contador.id = "contador"



botao.innerText = "Reset"

//store
let aStore = document.getElementById("store")
let store = []
//store

jogo.appendChild(torre1)
jogo.appendChild(torre2)
jogo.appendChild(torre3)
jogo.appendChild(botao)
jogo.appendChild(contador)

let disco1 = document.createElement("div")
let disco2 = document.createElement("div")
let disco3 = document.createElement("div")
let disco4 = document.createElement("div")
torre1.addEventListener("click", function(){
    if(store.length === 0 && torre1.lastChild !== null)
    store.push(currentContidionTower1.pop()) &&
    aStore.appendChild(torre1.lastChild)

    
    else if (store[0] < currentContidionTower1[currentContidionTower1.length -1] ||
        currentContidionTower1[0] === undefined && aStore.lastChild !== null)
    {
        currentContidionTower1.push(store.pop()) &&
        torre1.appendChild(aStore.lastChild) &&
        jogando()

    }
})
torre2.addEventListener("click", function(){
    if(store.length === 0 && torre2.lastChild !== null)
    {store.push(currentContidionTower2.pop()) &&
    aStore.appendChild(torre2.lastChild)
}


else if (store[0] < currentContidionTower2[currentContidionTower2.length -1] ||
    currentContidionTower2[0] === undefined && aStore.lastChild !== null)
{
        currentContidionTower2.push(store.pop()) &&
        torre2.appendChild(aStore.lastChild) &&
        jogando()

    }
    vitoria()
})
torre3.addEventListener("click", function(){
    if(store.length === 0 && torre3.lastChild !== null)
    {store.push(currentContidionTower3.pop()) &&
    aStore.appendChild(torre3.lastChild)}

    else if (store[0] < currentContidionTower3[currentContidionTower3.length -1]||
        currentContidionTower3[0] === undefined && aStore.lastChild !== null)
    {
        currentContidionTower3.push(store.pop()) &&
        torre3.appendChild(aStore.lastChild) 
        jogando()

    }
    vitoria()
})

botao.addEventListener("click", function(){
    document.location.reload(true);
})

disco1.id = "disco1"
disco2.id = "disco2"
disco3.id = "disco3"
disco4.id = "disco4"

//torre 1
torre1.appendChild(disco1)
torre1.appendChild(disco2)
torre1.appendChild(disco3)
torre1.appendChild(disco4)
//torre 1


let currentContidionTower1 = [4,3,2,1]
let currentContidionTower2 = []
let currentContidionTower3 = []

let winCondition = [4,3,2,1]

let vencedor = document.getElementById("vencedor")

function vitoria() {
    if (winCondition.every((item, index) =>item === currentContidionTower2[index]) === true
    || winCondition.every((item, index) =>item === currentContidionTower3[index]) === true)
    {vencedor.style.visibility = "unset";
}
}

let jogadas = 15;

function jogando () {
  if(jogadas <= 0){       
    alert('Jogadas Terminaram');  
    document.location.reload(true);   
    return false;
  }
  
    jogadas--;
    contador.innerText = `${jogadas} Jogadas restantes`
    console.log('Você está usando a função pela ' + jogadas + ' vez');
  
}
