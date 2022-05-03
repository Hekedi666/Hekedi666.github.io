let index;

let kuvat_array = [{"name":"Olut on hyvää!", "src":"images/saastavesikaloille.png"}, {"name":"Elä neuvo suakeli!", "src":"images/elaneuvo.jpg"}, {"name":"Ai että kun sätii!", "src":"images/Hekedenssi.jpg"}, {"name":"Nakkaa säkki!", "src":"images/nakkaasakki.png"}];

if (localStorage.hasOwnProperty('index')) {
    index = parseInt(localStorage.getItem('index'));
}
else {
    index = 0;
}

function kerusel() {
    document.getElementById("karuselli").src = kuvat_array[index].src;
    document.getElementById("namme").textContent = kuvat_array[index].name;
}

window.onload = function() {
    console.log("Homma start!");
    kerusel();
}

function moveLeft() {
    if (index <= 0)
    {
        index = 3;
        console.log("Indeksin arvo: ", index);
        kerusel();
        localStorage.setItem('index', index);
    }
    else
    {
        index = index - 1;
        console.log("Indeksin arvo: ", index);
        kerusel();
        localStorage.setItem('index', index);
    }
}

function moveRight() {
    if (index >= 3)
    {
        index = 0;
        console.log("Indeksin arvo: ", index);
        kerusel();
        localStorage.setItem('index', index);
    }
    else
    {
        index = index + 1;
        console.log("Indeksin arvo: ", index);
        kerusel();
        localStorage.setItem('index', index);
    }
}

let click = false;
let intervalli;

function pauseShow() {
    
    if (click == false){
        intervalli = window.setInterval(moveRight, 2000);
        click = true;
        console.log("Klik: ", click);
        localStorage.setItem('index', index);
    }
    else {
        click = false;
        clearInterval(intervalli);
        console.log("Klik: ", click);
    }
    
}



