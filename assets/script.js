

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

function raio(){
  let valorRaio = document.getElementById('circulo').value
  let pi = 3.14
  let result = pi * valorRaio * valorRaio
  let view = alert ("O valor em metros do raio do circulo " + "(3.14 * " + valorRaio + "²) = " + result + "m")
  return view
}

function retangulo(){
  let valorBase = document.getElementById('base').value
  let valorAltura = document.getElementById('altura').value  
  let result = valorBase * valorAltura
  let view = alert ("O valor da aréa do retângulo" + " ( com base: " + valorBase + " * altura: " + valorAltura + ") = " + result )
  return view
}

function trapezio(){
  let valorBaseMaior = parseInt(document.getElementById('baseMaior').value, 10)
  let valorBaseMenor = parseInt( document.getElementById('baseMenor').value, 10)
  let valorAltura = parseInt(document.getElementById('altura').value, 10)
  let result = (valorBaseMaior + valorBaseMenor) * valorAltura / 2
  let view = alert ("O valor da aréa do trapézio" + " ( com base maior: " + valorBaseMaior + " + base menor: " + valorBaseMenor + " ) * " +  " altura: " + valorAltura + " / 2 = " + result )
  return view
}

function triangulo(){
  let valorBase = document.getElementById('baseTriangulo').value
  let valorAltura = document.getElementById('alturaTriangulo').value  
  let result = (valorBase * valorAltura) / 2
  let view = alert ("O valor da aréa do triângulo" + " (base: " + valorBase + " * altura: " + valorAltura + ") / 2 = " + result )
  return view
}

