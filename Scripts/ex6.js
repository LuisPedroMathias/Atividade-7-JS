/*➔ Crie um algoritmo que peça ao usuário uma letra do alfabeto.
O programa deverá verificar se a letra digitada é:
➔ Vogal
➔ Consoante
E mostrar o resultado no console.*/

function ex6() {

    const vogais = ['a', 'e', 'i', 'o', 'u'];

    let letra = prompt("Digite uma letra: ").toLocaleLowerCase();

    if (vogais.includes(letra)) {

        console.log('É uma vogal')

    } else {

        console.log('Não é uma vogal!')

    }
}