// Digite o nome do herói 
let nome = String("Zack");
// Digite a exp do herói
let xp = Number(2001);

// Avaliação do nível de habilidade
if (xp >= 0 && xp <= 1000) {
    console.log(`O herói de nome  **${nome}** está no nível de **Ferro**`);
} else if (xp >= 1001 && xp <= 2000) {
    console.log(`O herói de nome **${nome}** está no nível de **Bronze**`);
} else if (xp >= 2001 && xp <= 5000) {
    console.log(`O herói de nome **${nome}** está no nível de **Prata**`);
} else if (xp >= 6001 && xp <= 7000) {
    console.log(`O herói de nome **${nome}** está no nível de **Ouro**`);
} else if (xp >= 7001 && xp <= 8000) {
    console.log(`O herói de nome **${nome}** está no nível de **Platina Diamante**`);
} else if (xp >= 8001 && xp <= 9000) {
    console.log(`O herói de nome **${nome}** está no nível de **Ascendente**`);
} else if (xp >= 9001 && xp <= 10000) {
    console.log(`O herói de nome **${nome}** está no nível de **Imortal**`);
} else if (xp >= 10001) {
    console.log(`O herói de nome **${nome}** está no nível de **Radiante**`);
} else {
    // Caso digite algo inesperado
    console.log("🛑 Ops! Parece que o herói tropeçou no portal do desconhecido! Verifique o a experiência e tente novamente. 😅"); 
}
