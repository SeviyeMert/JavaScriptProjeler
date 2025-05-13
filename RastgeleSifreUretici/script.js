const coptbtn = document.getElementById("copybtn");
const uretbtn = document.getElementById("uretbtn");
const password = document.getElementById("password");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/"";

uretbtn.addEventListener("click", () => {
    const length = parseInt(password.value);
    if ( length < 8 || length > 16){
        alert("Şifre uzunluğu 8 ile 16 arasında olmalı.");
        return;
    }
})