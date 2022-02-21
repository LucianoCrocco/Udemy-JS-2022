let numero = parseInt(prompt("Ingrese hasta que numero calcular es par o impar a partir del numero 1: "));

for(let i = 1; i < numero; i++){
    console.log(`${i} ${i % 2 === 0 ? "Es par" : "Es impar"}`);
}

