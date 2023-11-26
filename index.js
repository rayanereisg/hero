let heroi = "Superman";
let xp = 5000;

if (xp < 1000) {
    console.log(`${heroi} é de nível Ferro.`);
} else if (xp >= 1001 && xp <= 2000) {
    console.log(`${heroi} é de nível Bronze.`);
} else if (xp >= 2001 && xp <= 5000) {
    console.log(`${heroi} é de nível Prata.`);
} else if (xp >= 6001 && xp <= 7000) {
    console.log(`${heroi} é de nível Ouro.`);
} else if (xp >= 7001 && xp <= 8000) {
    console.log(`${heroi} é de nível Platina.`);
} else if (xp >= 8001 && xp <= 9000) {
    console.log(`${heroi} é de nível Ascendente.`);
} else if (xp >= 9001 && xp <= 10000) {
    console.log(`${heroi} é de nível Imortal.`);
} else if (xp >= 10001) {
    console.log(`${heroi} é de nível Radiante.`);
} else {
    console.log(`Experiência inválida para o herói ${heroi}`);
}

console.log(`O Herói de nome ${heroi} está no nível de ${xp}`);