/*Desenvolva um algoritmo que:
➔ Peça um número inteiro ao usuário.
➔ Verifique se o número é par ou ímpar.
O programa deverá:
➔ Se for par, transformá-lo em ímpar.
➔ Se for ímpar, transformá-lo em par.
➔ Mostre o valor final no console.*/

function ex5() {

    let numero = (prompt("Digite um número: "));
    let resultado = 0;

    if (numero % 2 === 0) {
        resultado = numero - 1;
    }else{
        resultado = numero +1;
    }

    console.log("Resultado:" + resultado);

}