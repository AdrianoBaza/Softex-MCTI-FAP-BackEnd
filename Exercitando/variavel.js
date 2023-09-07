// definição undefined (declaração sem atribuição)
let nome;
let chassi;
let possuiMulta;
let categoria;

// impressão para obter o retorno da variável no estado atual (undefined)
console.log('Impressão das Variáveis antes da atribuição')
console.log(`nome: ${nome}`);
console.log(`chassi: ${chassi}`);
console.log(`possuiMulta: ${possuiMulta}`);
console.log(`categoria: ${categoria}`);
console.log();

// definição null (atribuição de valor null)
nome = null;
chassi = null;
possuiMulta = null;
categoria = null;

// impressão para obter o retorno de cada variável no estado atual (null)
console.log('Impressão das Variáveis após atribuição null')
console.log(`Nome: ${nome}`);
console.log(`Chassi: ${chassi}`);
console.log(`Possui multa: ${possuiMulta}`);
console.log(`Categoria: ${categoria}`);
console.log();

// definição de valores (atribuição de valor a cada variável)
nome = "Adriano";
chassi = 986578459321045879865415326n;
possuiMulta = false;
categoria = Symbol("DEVPOO-JS");

// impressão para obter o conteúdo de cada variável no estado atual
console.log('impressão do conteúdo de cada variável no estado atual');
console.log(`Nome: ${nome}`);
console.log(`Chassi: ${chassi}`);
console.log(`Possui multa: ${possuiMulta}`);
console.log(categoria);
console.log();

// impressão para obter o tipo de cada variável
console.log(`nome é do tipo primitivo: ${typeof nome}`);
console.log(`chassi é do tipo primitivo: ${typeof chassi}`);
console.log(`possuiMulta é do tipo primitivo: ${typeof possuiMulta}`);
console.log(`categoria é do tipo primitivo: ${typeof categoria}`);