const prompt = require('prompt-sync')();
let vitorias = prompt("Digite o número de vitórias: ");
let derrotas = prompt("Ditie o número de derrotas: ");
let saldo;
let nivel;

rankF(vitorias,derrotas)
function rankF(vitorias, derrotas){
    saldo = vitorias - derrotas;
    return saldo;
}

switch (true) {
    case (saldo < 10):
        nivel = "Ferro";
        break;
    case (saldo >= 11 && saldo <= 20):
        nivel = "Bronze";
        break;
    case (saldo >= 21 && saldo <= 50):
        nivel = "Prata";
        break;
    case (saldo >= 51 && saldo <= 80):
        nivel = "Ouro";
        break;
    case (saldo >= 81 && saldo <= 90):
        nivel = "Diamante";
        break;
    case (saldo >= 91 && saldo <= 100):
        nivel = "Lendário";
        break;
    case (saldo >= 101):
        nivel = "Imortal";
        break;
    default:
        break;
}

console.log('O Herói tem um saldo de ' + saldo + ' está no nível de ' + nivel)
