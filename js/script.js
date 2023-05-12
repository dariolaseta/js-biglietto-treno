const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const kmPrice = 0.21;
const normalTicketPrice = km * kmPrice;

if(userAge < 18){
    document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + ((normalTicketPrice / 100) * 20) + "&euro;";
}