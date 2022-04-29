function getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

window.onload = function() {
    document.getElementById("numberOne").value = getRandomNum();
    document.getElementById("numberTwo").value = getRandomNum();
};

function plusOne() {
    let nummer = parseInt(document.getElementById("numberOne").value);
    let nyyNummer = nummer + 1;

    document.getElementById("numberOne").value = nyyNummer;
}

function minusOne() {
    let nummer = parseInt(document.getElementById("numberOne").value);
    let nyyNummer = nummer - 1;

    document.getElementById("numberOne").value = nyyNummer;
}

function plusOneSec() {
    let nummer2 = parseInt(document.getElementById("numberTwo").value);
    let nyyNummer2 = nummer2 + 1;

    document.getElementById("numberTwo").value = nyyNummer2;
}

function minusOneSec() {
    let nummer2 = parseInt(document.getElementById("numberTwo").value);
    let nyyNummer2 = nummer2 - 1;

    document.getElementById("numberTwo").value = nyyNummer2;
}

function validaatio1() {
    let tarkistus1 = document.getElementById("numberOne").value;
    if (tarkistus1 == "") {
        alert("Numero tarvitaan!");
    }
}

function validaatio2() {
    let tarkistus1 = document.getElementById("numberTwo").value;
    if (tarkistus1 == "") {
        alert("Numero tarvitaan!");
    }
}

function calculate() {
    validaatio1();
    validaatio2();
    let val1 = parseInt(document.getElementById("numberOne").value);
    let val2 = parseInt(document.getElementById("numberTwo").value);
    let merkki = document.getElementById("merkit").value;
    let val3;
    
    if (merkki == 1){
        val3 = val1 + val2;
    }
    else if (merkki == 2){
        val3 = val1 - val2;
    }
    else if (merkki == 3){
        val3 = val1 * val2;
    }
    else if (merkki == 4){
        val3 = val1 / val2;
    }
    
    document.getElementById("tulos").value = val3;
    console.log("Laskutapahtuma suoritettu.");
}
