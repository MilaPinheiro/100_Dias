
import inputRL from 'readline-sync'
    ;

console.log(`===========
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
No final, mostre o total de salários pagos aos homens e o total pago às 
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não 
sempre que ler os dados de um funcionário.=============`)

let femile = []
let muscle = []
let salarioF = []
let salarioM = []

function validarNumero(input) {
    let numero = parseFloat(input);
    while (isNaN(numero)) {
        input = inputRL.question("Por favor, digite um número para o salário:");
        numero = parseFloat(input);
    }
    return numero;
}



function calcularTotalSalarios(listaSalarios /*salarioF*/) {
    return /*salarioF*/ listaSalarios.reduce((total, salario) => total + parseFloat(salario),
        0);
}

function teste() {

    console.log('===========================')

    let sexo =
        inputRL.question
            ("Digite o sexo: ")

    let salarioInput = inputRL.question("Digite o salário: ");
    let salario =
        validarNumero(salarioInput);

    let mensagem = inputRL.question
        ("Deseja perguntar novamente (s/n?):")

    if (sexo.toLowerCase() === 'feminino') {
        femile.push(sexo);
        salarioF.push(salario);
    } else {
        muscle.push(sexo);
        salarioM.push(salario);
    }

    while (mensagem === 'sim') {
        teste()
        mensagem = ''
    }
}

teste()

let totalSalariosMulheres = calcularTotalSalarios(salarioF);
let totalSalariosHomens = calcularTotalSalarios(salarioM);


console.log(`O total de mulheres cadastradas foram ${femile.length}`)
console.log(`O total de homens cadastrados foram ${muscle.length}`)
console.log(`Total de salários pagos às mulheres: ${totalSalariosMulheres}`);
console.log(`Total de salários pagos aos homens: ${totalSalariosHomens}`);












