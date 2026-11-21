const stades = [
    {"Ville":"Rabat","Capacites":53000,"prix":180},
    {"Ville":"Casablanca","Capacites":45000,"prix":250},
    {"Ville":"Marrakech","Capacites":45240,"prix":200},
    {"Ville":"Tanger","Capacites":65000,"prix":150}
];

function charger() {

    let select = document.getElementById("stade");

    for(let i = 0; i < stades.length; i++) {

        let option = document.createElement("option");

        option.value = stades[i].prix;

        option.text =
        "Stade de " +
        stades[i].Ville +
        " - " +
        stades[i].prix +
        " MAD";

        select.appendChild(option);
    }
}

function calculerTotal() {

    let nbTickets =
    parseInt(document.getElementById("nbTickets").value) || 0;

    let prix =
    parseFloat(document.getElementById("stade").value);

    let total = nbTickets * prix;

    document.getElementById("totalLabel").innerHTML =
    "Total à payer : " + total + " MAD";
}

function PayReservation() {

    alert("Paiement effectué avec succès");
}

function supprimerReservation(btn) {

    btn.parentNode.parentNode.remove();
}

function Reserver() {

    let nom = document.getElementById("nom").value;

    let stade =
    document.getElementById("stade").options[
    document.getElementById("stade").selectedIndex
    ].text;

    let date = document.getElementById("date").value;

    let tickets =
    document.getElementById("nbTickets").value;

    let total =
    document.getElementById("totalLabel").innerText;

    let table =
    document.getElementById("tableReservation");

    let ligne = table.insertRow();

    ligne.insertCell(0).innerHTML = nom;
    ligne.insertCell(1).innerHTML = stade;
    ligne.insertCell(2).innerHTML = date;
    ligne.insertCell(3).innerHTML = tickets;
    ligne.insertCell(4).innerHTML = total;

    ligne.insertCell(5).innerHTML =
    '<button onclick="supprimerReservation(this)">Supprimer</button> ' +
    '<button onclick="PayReservation()">Payer</button>';
}

window.onload = charger;