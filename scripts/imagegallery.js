
window.onload = function() {
    console.log("Homma rokkaa!");
}

function gridiMuoto() {
    document.getElementById('contaaner').classList.remove('list-cont');
    document.getElementById('contaaner').classList.add('grid-cont');
}

function listaMuoto() {
    document.getElementById('contaaner').classList.remove('grid-cont');
    document.getElementById('contaaner').classList.add('list-cont');
}


