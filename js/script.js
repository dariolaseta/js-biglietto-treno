const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const kmPrice = 0.21;
const normalTicketPrice = km * kmPrice;
let discountPrice;

if(userAge < 18){
    discountPrice = (normalTicketPrice / 100) * 20;
    document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + (normalTicketPrice - discountPrice) + "&euro;";
}else if(userAge > 65){
    discountPrice = (normalTicketPrice / 100) * 40;
    document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + (normalTicketPrice - discountPrice) + "&euro;";
}else{
    document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + normalTicketPrice + "&euro;";
}