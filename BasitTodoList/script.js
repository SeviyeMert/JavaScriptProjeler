window.onload = function() {
    const kayitliGorevler = JSON.parse(localStorage.getItem("gorevler")) || [];
    kayitliGorevler.forEach(gorev => listeyeEkle(gorev.metin, gorev.tamamlandi));
  };
function gorevEkle() {
  const input = document.getElementById("gorevInput");
  const metin = input.value.trim();

  if (metin === "") {
    alert("Lütfen bir görev giriniz.");
    return;
  }

  listeyeEkle(metin, false);
  input.value = "";
  gorevleriKaydet();
}



function listeyeEkle(metin, tamamlandi) {
    const li = document.createElement("li");
    li.textContent = metin;
    
    if (tamamlandi) {
        li.classList.add("tamamlandi");
    }

    const silButon = document.createElement("button");
    silButon.textContent = "X";
    silButon.style.backgroundColor = "white";
    silButon.style.border = "none";
    silButon.style.marginLeft = "20px";
    silButon.onclick = function (e) {
        li.remove();
        e.stopPropagation();
        gorevleriKaydet();
    };
    
    li.appendChild(silButon);
    
    li.onclick = function () {
        li.classList.toggle("tamamlandi");
        gorevleriKaydet();
    };
    
    document.getElementById("gorevListesi").appendChild(li);
}




function gorevleriKaydet() {
    const liste = document.querySelectorAll("#gorevListesi li");
    const gorevler = [];

    liste.forEach(li => {
      const metin = li.childNodes[0].textContent.trim();
      const tamamlandi = li.classList.contains("tamamlandi");
      gorevler.push({ metin, tamamlandi });
    });

    localStorage.setItem("gorevler", JSON.stringify(gorevler));
}
