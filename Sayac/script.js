const sayac = document.getElementById("btn");

function arttir() {
    let sayi = Number(sayac.textContent);
    sayac.textContent = sayi + 1;
}

sayac.onclick = arttir;
