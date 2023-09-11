/* Exercícios:
Verifique se um número é positivo. Caso contrário, exiba uma mensagem de erro.
Verifique se um número é par. Caso contrário, exiba uma mensagem indicando que é ímpar.
Verifique se uma string é vazia. Caso não seja, exiba seu conteúdo.
Verifique se um número é maior que 10. Caso não seja, multiplique-o por 2.
Verifique se uma variável é do tipo booleano. Caso não seja, atribua um valor booleano a ela. */
let numero = 7;
let nome = '';
let cnh = '';

if (numero >= 0) {
    console.log(`${numero} é um número positivo`);
} else {
    console.log(`${numero} é um número negativo`);
}

if (numero % 2 == 0) {
    console.log(`${numero} é um número par`);
} else {
    console.log(`${numero} é um número ímpar`);
}

if (nome == '') {
    console.log(`A String ${nome} é vazia`);
} else {
    console.log(`Conteúdo da String é ${nome}`);
}

if (numero > 10) {
    console.log(`${numero} é maior que 10`);
} else {
    console.log(`${numero} multiplicado por 2 dá um total de ${numero * 2} `);
}

if (typeof cnh === 'boolean') {
    console.log(`Esta variável é do tipo boolean`);
} else {
    console.log(`A variável cnh é do tipo null e está sendo convertida em tempo de execução para tipo boolean`)
    cnh = false;
    console.log(`Tipo de dado da variável cnh?: ${typeof cnh}`);
}