// Distanza da percorrere

let path = prompt("Quanti km devi percorrere?");
console.log(path);

// Età del passeggero

let age = prompt("Quanti anni hai?");
console.log(age);

// Costo del biglietto

let price = document.getElementById("costo");
const costoPerKm = 0.21;

// Biglietto

let tiket = path * costoPerKm;
console.log(tiket);


//Sconto per minori 20%
let minorDiscount = tiket / 100 * 20;
console.log(minorDiscount);
let minor = tiket - minorDiscount;


//Sconto per anziani 40%
let seniorDiscount = tiket / 100 * 40;
console.log(seniorDiscount);
let senior = tiket - seniorDiscount;

// Sconti 

let discountedPrice = 0;

if(age < 18){
    discountedPrice = minor;
}else if(age > 65){
    discountedPrice = senior;
}else{
    discountedPrice = tiket;
};

alert (`il prezzo scontato è di ${discountedPrice.toFixed(2)} €`)
price.innerHTML = "il prezzo è di: " + discountedPrice.toFixed(2) + "€";

