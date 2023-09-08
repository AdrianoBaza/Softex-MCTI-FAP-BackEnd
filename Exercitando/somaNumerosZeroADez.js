let soma = 0;

for (let i = 1; i <= 10; i++) {
    console.log("Soma: ", soma, " + i = ", i);
    soma += i;
    console.log('Valor soma: ' + soma);
}

console.log(`A soma de todos os números entre 0 e 10 é igual a ${soma}`);