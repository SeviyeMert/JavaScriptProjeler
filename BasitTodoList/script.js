window.onload = function() {
    const kayitliGorevler = JSON.parse(localStorage.getItem("gorevler")) || [];
    kayitliGorevler.forEach(gorev => listeyeEkle(gorev.metin, gorev.tamamlandi));
  };
function gorevEkle() {
  const input = document.getElementById("gorevInput");
  const gorev = input.value.trim();

  if (gorev === "") {
    alert("Lütfen bir görev giriniz.");
    return;
  }

  listeyeEkle(gorev, false);
  input.value = "";
  gorevleriKaydet();
}



function listeyeEkle(gorev, tamamlandi) {
    const li = document.createElement("li");
    li.textContent = gorev;
    document.getElementById("görevListesi").appendChild(li);

  if (tamamlandi) {
    li.classList.add("tamamlandi");
  }
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

function gorevleriKaydet() {
    const liste = document.querySelectorAll("#görevListesi li");
    const gorevler = [];

    liste.forEach(li => {
        const gorev = li.childNodes[0].textContent.trim();
        const tamamlandi = li.classList.contains("tamamlandi");
        gorevler.push({gorev, tamamlandi});
    })

    localStorage.setItem("gorevler", JSON.stringify(gorevler));
}
