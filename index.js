// Arrays para armazenar os heróis e suas experiências
let herois = ["Superman", "Batman", "Mulher Maravilha"];
let experiencias = [];

// Pedindo ao usuário para inserir a experiência para cada herói
for (let i = 0; i < herois.length; i++) {
    let xp = prompt(`Insira a experiência de ${herois[i]}:`);
    experiencias.push(parseFloat(xp)); // Convertendo a entrada para número e armazenando no array
}

// Verificando o nível de cada herói com base na experiência inserida
for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let xp = experiencias[i];

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
}