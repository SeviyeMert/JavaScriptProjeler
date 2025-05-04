const sayac = document.getElementById("btn");

sayac.addEventListener("click", function() {
    sayac.textContent = Number(sayac.textContent) + 1;
});
