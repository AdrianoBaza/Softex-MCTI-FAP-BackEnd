/*
Crie dois códigos de sistema de notas para uma escola:
*/

/*
PRIMEIRO CÓDIGO
programa que informa se o aluno reprovou ou não, com base nas três notas que ele adicionou ao programa. Utilize no mínimo, um operador de atribuição e um operador ternário.
*/

const input = require("readline-sync");
let totalNotasAluno = 0;
let mediaEscola = 7;
let totalProvas;

console.log('=====  SOFTEX - FAP - 2023 | BACKEND =====');
console.log('===== SISTEMA DE CONTROLE PEDAGÓGICO =====');
console.log('===== Consulta  Situação  do  Aluno  =====');
let nome = input.question('Nome: ');
for (let i = 1; i <= 3; i++) {
    let nota = input.questionFloat(`Nota ${i}: `);
    totalNotasAluno += nota;
    totalProvas = i;
}

let mediaAluno = totalNotasAluno / totalProvas;

console.log('=====      Situação   do   Aluno     =====');
console.log(`Nome do aluno: ${nome}`);
console.log(`Situação: `, mediaAluno >= mediaEscola ? 'Aprovado' : 'Reprovado');
console.log(`Média Final: `, mediaAluno.toFixed(2));


/*
SEGUNDO CÓDIGO
programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete. 
*/

/*
const input = require("readline-sync");
let somaNotasAluno = 0;
let mediaEscolar = 7;
let quantidadeProvas;

console.log('=====  SOFTEX - FAP - 2023 | BACKEND =====');
console.log('===== SISTEMA DE CONTROLE PEDAGÓGICO =====');
console.log('=====  Consulta Nota para Aprovação  =====');

let nome = input.question('Nome: ');

for (let i = 1; i < 3; i++) {
    let nota = input.questionFloat(`Nota ${i}: `);
    somaNotasAluno += nota;
    quantidadeProvas = i+1;
}

let notaAprovacao = (mediaEscolar * quantidadeProvas) - somaNotasAluno;

console.log('=====      Nota  para  Aprovação     =====');
console.log(`Olá ${nome},`);
console.log(`Você já conquistou ${somaNotasAluno} pontos.`);

console.log(`Situação: `, notaAprovacao > 10 ? 'Infelizmente, você não alcançará a média. Procure a coordenação!' : `Você precisa alcançar nota ${notaAprovacao} na próxima avaliação.`);
*/