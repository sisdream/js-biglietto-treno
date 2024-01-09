// Distanza da percorrere

let path = prompt("Quanti km devi percorrere?");
console.log(path);

// Età del passeggero

let age = prompt("Quanti anni hai?");
console.log(age);

// Costo del biglietto

let costo = document.getElementById(".costo");
const costoPerKm = 0.21;

// Biglietto

let tiket = path * costoPerKm;
console.log(tiket);

// Sconti 

//Sconto per minori 20%
let scontoMinori = tiket / 100 * 20;
console.log(scontoMinori);
//Sconto per anziani 40%
let scontoAnziani = tiket / 100 * 40;
console.log(scontoAnziani);