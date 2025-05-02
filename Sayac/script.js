const deger = document.getElementById("sayi");
const art = document.getElementById("arti");
const azalt = document.getElementById("eksi");

function minus(){
    if (Number(deger.textContent)<= 0) {
        azalt.disabled = true;
    } else {
        azalt.disabled = false;
    }
}

function arttir() {
    deger.textContent = Number(deger.textContent) + 1;
    minus();
}

art.onclick = arttir;


function azalttir() {
    deger.textContent = Number(deger.textContent) - 1;
    minus();
}

azalt.onclick = azalttir;





