

function somar(){
  let entrada1 = parseInt(document.getElementById("valorA").value, 10);
  let entrada2 = parseInt(document.getElementById("valorB").value, 10);
  let resultado = entrada1 + entrada2
  let result = alert("A soma entre " + entrada1 + " + " + entrada2 + " é: " + resultado)
  return result
}

function multiplicar(){
  let entradaA = parseInt(document.getElementById("valorC").value, 10);
  let entradaB = parseInt(document.getElementById("valorD").value, 10);
  let resultado = entradaA * entradaB
  let resulte = alert("A multiplicação entre " + entradaA + " * " + entradaB + " é: " + resultado)
  return resulte
}

function dividir(){
  let entrada0 = parseInt(document.getElementById("valorE").value, 10);
  let entrada00 = parseInt(document.getElementById("valorF").value, 10);
  let resultado = entrada0 / entrada00
  let resultante = alert("A divisão entre " + entrada0 + " / " + entrada00 + " é: " + resultado)
  return resultante
}

function subtrair(){
  let entrada01 = parseInt(document.getElementById("valorG").value, 10);
  let entrada02 = parseInt(document.getElementById("valorH").value, 10);
  let resultado = entrada01 - entrada02;
  let resultate = alert("A subtração entre " + entrada01 + " - " + entrada02 + " é: " + resultado)
  return resultate
}