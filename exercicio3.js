// fazer um menu de exercicios utilizando exemplos dados em aula
//(6 exercicios dentro de funcoes, e incluir nome ou algo de sua preferncia )
import promptSync from "prompt-sync"

let prompt = promptSync() 

import { exercicio1,exercicio2,exercicio3,exercicio4,exercicio5,exercicio6 } from "./moduloExercicio1.js"

let resposta

do {

console.log("bem vindo ao menu de execicios!")

resposta = prompt("digite um numero de 1 a 6, e para escolher ")

  switch (resposta){
  //chamar exercicio 1 
case '1':
  console.log("voce escolheu o exercicio 1  ")  

  exercicio1()
  break;
  case '2':
  console.log("voce escolheu o exercicio 2  ")  

  exercicio2()
  break;
  case '3':
  console.log("voce escolheu o exercicio 3 ")  

  exercicio3()
  break;
  case '4':
  console.log("voce escolheu o exercicio 4  ")  

  exercicio4()
  break;
  case '5':
  console.log("voce escolheu o exercicio 5  ")  

  exercicio5()
  break;
  case '6':
  console.log("voce escolheu o exercicio 6  ")  

  exercicio6()
  break;
  default:
    console.log("valor digitado nao corresonde ") 
    break 
    }

} while (resposta != "sair");