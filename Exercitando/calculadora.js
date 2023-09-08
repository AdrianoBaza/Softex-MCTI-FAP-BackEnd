/*Programa de Calculadora:
- Receber dois valores e armazenar em variáveis;
- Usuário escolhe operador artimético para realizar o cálculo;
- Programa deve fazer a operação e retornar o resultado;
- Se houver divisão o sistema deve retornar o resultado e a sobra, caso haja alguma.*/

const input = require("readline-sync");
console.log("======== CALCULADORA ========");
let valor1 = input.questionFloat('Informe o 1o valor: ');
let valor2 = input.questionFloat('Informe o 2o valor: ');
let resultado;
console.log('======== Menu de Operadores ========');
console.log ('+ para Adicao');
console.log ('- para Subtracao');
console.log ('* para Multiplicacao');
console.log ('/ para Divisao');
let operador = input.question('Informe a operacao que deseja realizar: ' );
let sobra = 0;

if (operador == '+') {
    resultado = valor1 + valor2;
}
if (operador == '-') {
    resultado = valor1 - valor2;
}
if (operador == '*') {
    resultado = valor1 * valor2;
}
if (operador == '/') {
    resultado = valor1 / valor2;
    sobra = valor1 % valor2;   
}

console.log('============= Resultado =============');
console.log(`Resultado igual a ${resultado.toFixed(2)}`);

if(operador == '/' && sobra != 0) {
    console.log(`Essa operacao teve como sobra o valor ${sobra}`);
}