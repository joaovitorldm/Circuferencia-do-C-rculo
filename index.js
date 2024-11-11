const pi = 3.14;
function esfera1(){
    let name = document.querySelector("#esfera2");
    let value = name.value;
    let resultado = 4 * pi * value ** 2
    document.getElementById("resultado3").innerHTML = "O resultado é " + resultado
}

function lado1(){
  let name = document.querySelector("#quadrado1")
  let value = name.value
  let resultado = value ** 2
  document.getElementById("resultado2").innerHTML = "O resultado é " + resultado
}

function circulo1(){
  let name = document.querySelector("#circulo")
  let value = name.value
  let resultado = value * 2 * pi
  document.getElementById("resultado1").innerHTML = "O resultado é " + resultado
}