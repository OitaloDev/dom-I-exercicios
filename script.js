/* # Exercício 1

Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3. */


//1-
const frutas = ["laranja", "limão", "uva"];
/* 
const completeFruta = document.getElementById("fruta-1")
completeFruta.innerHTML += "Laranja"

const completeFruta2 = document.getElementById("fruta-2")
completeFruta2.innerHTML += "limão"

const completeFruta3 = document.getElementById("fruta-3")
completeFruta3.innerHTML += "uva"

console.log("")
 */


const lista = Array.from(document.getElementsByTagName("li"));

for (let i = 0; i < lista.length; i++) {
    document.getElementById(`fruta-${i + 1}`).innerHTML = frutas[i];
  }

/* # Exercício 2

Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
Cole o comando aqui:
```jsx
    cole o código JS nesta área.
``` */

//2-

/* 2- */
let newFruta = document.getElementById("fruta-4")
function frutaNova (){
    let frutaImput = document.getElementById("texto")
    console.log(frutaImput.value)
    newFruta.innerHTML = document.getElementById("texto").value
}


/* # Exercício 3

Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista. */

//3-
function alterarFruta(){
    //valor do elemento p = valor que esta no input
    newFruta.innerHTML = document.getElementById("texto").value
}