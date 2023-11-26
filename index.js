let nomeHeroi = "Superman";
let experienciaHeroi = 5000;

if (experienciaHeroi < 1000) {
    console.log(nomeHeroi + " é de nível Ferro.");
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    console.log(nomeHeroi + " é de nível Bronze.");
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    console.log(nomeHeroi + " é de nível Prata.");
} else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000) {
    console.log(nomeHeroi + " é de nível Ouro.");
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    console.log(nomeHeroi + " é de nível Platina.");
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    console.log(nomeHeroi + " é de nível Ascendente.");
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    console.log(nomeHeroi + " é de nível Imortal.");
} else if (experienciaHeroi >= 10001) {
    console.log(nomeHeroi + " é de nível Radiante.");
} else {
    console.log("Experiência inválida para o herói " + nomeHeroi);
}

console.log("O Herói de nome (nomeHeroi) está no nível de (experienciaHeroi);