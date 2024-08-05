// Função para calcular o desempenho
function calculateLevel(wins, defeats) {
    return wins - defeats;
}

// Função para determinar o nível com base no desempenho
function determineLevel(performance) {
    if (performance < 10) {
        return "Ferro";
    } else if (performance >= 10 && performance < 20) {
        return "Bronze";
    } else if (performance >= 21 && performance < 50) {
        return "Prata";
    } else if (performance >= 51 && performance < 80) {
        return "Ouro";
    } else if (performance >= 81 && performance < 90) {
        return "Diamante";
    } else if (performance >= 91 && performance < 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Definindo variáveis
let nameCharacter = "SuperDev";
let wins = 200;
let defeats = 60;

// Calculando o desempenho e determinando o nível
let performance = calculateLevel(wins, defeats);
let level = determineLevel(performance);

// Exibindo a mensagem de saída no console
console.log("O Heroi", nameCharacter, "tem saldo de", performance, "e está no nível", level);