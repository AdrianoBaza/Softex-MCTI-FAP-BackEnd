/*
Declarar uma variável chamada `minhaVar`, sem valor.
Após declarada, atribua o valor 10 à variável `minhaVar`.
Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
Qual é o valor da variável `soma` até aqui?
Declare uma variável chamada `fazSol`, atribuindo à ela o valor booleano que representa `verdadeiro`.
Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
Digite o código que verifica se a variável `soma' é igual a variável `minhaVar` (testando também o tipo).
Digite o código que verifica se a variável `minhaVar` é menor ou igual à variável `soma`.
Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
Invoque a função criada acima, passando os parâmetros 10 e 2.
*/

let minhaVar;
minhaVar = 10;
let soma = 15 + 8;
soma +=1;
soma *= 3;
console.log(`valor da variável soma até aqui: ${soma}`);
let fazSol = true;
let comida = ['arroz', 'feijão', 'ovo'];
console.log(`Impressão do índice 1 do array comida: `, comida[1]);
let verificaSoma = typeof soma === typeof minhaVar;
console.log(`As variáveis soma e minhaVar possuem mesmo tipo de Dado?: `, verificaSoma);
let verificaMenor = minhaVar <= soma;
console.log(`A variável minhaVar tem valor menor ou igual a variável soma?: `, verificaMenor);

function divisao (numero1, numero2) {
    let resultadoDivisao = numero1 / numero2;
    return resultadoDivisao;
}

let resultado = divisao(10, 2);
console.log(`O resultado da divisão é ${resultado}`);