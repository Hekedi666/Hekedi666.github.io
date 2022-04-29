
window.onload = function() {
    document.getElementById("framme").src = 'https://www.google.com/maps?q=AlkoLappeenranta&output=embed';
}

function hakuFunktio() {
    let address = document.getElementById('osote').value;
    let city = document.getElementById('kaapunki').value;
    let place = 'https://www.google.com/maps?q='+ address + city + '&output=embed';
    document.getElementById("framme").src = place;
    console.log("Viesti konsoliin :D");
}





