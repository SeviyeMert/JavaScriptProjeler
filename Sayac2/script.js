const deger = document.getElementById("sayi");
const art = document.getElementById("arti");
const azalt = document.getElementById("eksi");

function arttir() {
    deger.textContent = Number(deger.textContent) + 1;
}

art.onclick = arttir;


function azalttir() {
    deger.textContent = Number(deger.textContent) - 1;
}

azalt.onclick = azalttir;



