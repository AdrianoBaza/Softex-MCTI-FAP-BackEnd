/*
Programa JacaScript que calcula a média aritmética de 3 notas inseridas pelo usuário. 
- Solicitar ao usuário inserir três notas (0 a 10);
- Armazenar as notas em variáveis do tipo number;
- fazer o cálculo da média aritmética e armazenar numa variável chamada media;
- exibir no console o resultado da média; 
*/

const input = require("readline-sync");
console.log(`CALCULADORA DA MÉDIA ARITMÉTICA`)
let nota1 = input.questionFloat(`Informe a nota 1: `);
let nota2 = input.questionFloat(`Informe a nota 2: `);
let nota3 = input.questionFloat(`Informe a nota 3: `);

let media = (nota1 + nota2 + nota3) / 3;

console.log(`A média aritmética é ${media.toFixed(2)}`);


