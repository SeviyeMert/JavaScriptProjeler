
function selamla() {
    
    let isim = prompt("Adınız nedir?");

    if (isim.trim()) {
        let mesaj = "Merhaba, " + isim + "! Hoş geldin.";
        document.getElementById("mesaj").textContent = mesaj;
    } else {
        document.getElementById("mesaj").textContent = "Bir isim giriniz.";
    }
}



