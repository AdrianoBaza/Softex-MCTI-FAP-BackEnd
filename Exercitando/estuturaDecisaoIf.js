/*
Exercícios:
Verifique se um número é positivo.
Verifique se um número é par.
Verifique se uma string é vazia.
Verifique se um número é maior que 10.
Verifique se uma variável é do tipo booleano
*/

let numero = 12;
let nome = '';

if (numero >= 0) {
    console.log(`${numero} é positivo`);
}

if (numero % 2 == 0) {
    console.log(`${numero} é par`);
}

if (nome == '') {
    console.log('A variável está vazia');
}

if (numero > 10) {
    console.log(`O número ${numero} é maior que 10`);
}

let cadastrado = true;
console.log('A variável cadastrado é do tipo ', (typeof cadastrado));