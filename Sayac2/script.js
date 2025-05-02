const sayac = document.getElementById("btn");

let x = 0;
sayac.onclick = () => sayac.textContent = ++x;