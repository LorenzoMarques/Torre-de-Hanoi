let jogo = document.getElementById("jogo")
let torre1 = document.createElement("div")
let torre2 = document.createElement("div")
let torre3 = document.createElement("div")
let botao = document.createElement("button"

)
torre1.id = "torre1"
torre2.id = "torre2"
torre3.id = "torre3"
botao.id = "reset"

botao.innerHTML = "Reset"

//store
let aStore = document.getElementById("store")
let store = []
//store

jogo.appendChild(torre1)
jogo.appendChild(torre2)
jogo.appendChild(torre3)
jogo.appendChild(botao)


let disco1 = document.createElement("div")
let disco2 = document.createElement("div")
let disco3 = document.createElement("div")
let disco4 = document.createElement("div")
torre1.addEventListener("click", function(){
    if(store.length === 0)
    {store.push(currentContidionTower1.pop()) &&
    aStore.appendChild(torre1.lastChild)
    
}   
    else {
        currentContidionTower1.push(store.pop()) &&
        torre1.appendChild(aStore.lastChild)
        jogando()
    }
    
})
torre2.addEventListener("click", function(){
    if(store.length === 0)
    {store.push(currentContidionTower2.pop()) &&
    aStore.appendChild(torre2.lastChild)
    
}
   else{
        currentContidionTower2.push(store.pop()) &&
        torre2.appendChild(aStore.lastChild)
        jogando()
    }
    
})
torre3.addEventListener("click", function(){
    if(store.length === 0)
    {store.push(currentContidionTower3.pop()) &&
    aStore.appendChild(torre3.lastChild)
    
}

   else{
        currentContidionTower3.push(store.pop()) &&
        torre3.appendChild(aStore.lastChild)
        jogando()
}
}) 

botao.addEventListener('click', function(){
    return 
    
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

function vitoria() {
    if (winCondition.every((item, index) =>item === currentContidionTower2[index]) === true
    || winCondition.every((item, index) =>item === currentContidionTower3[index]) === true)
    {return alert("Vitória")}
}

let jogadas = 0;

function jogando () {
  if(jogadas >= 15){
      alert('Jogadas Terminaram');
      return false;
  }
  
  jogadas++;

  console.log('Você está usando a função pela ' + jogadas + ' vez');
  
}



