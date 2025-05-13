const copybtn = document.getElementById("copybtn");
const uretbtn = document.getElementById("uretbtn");
const passwordInput = document.getElementById("password");

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/';

function sifreUret(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }
    return password;
}

uretbtn.addEventListener("click", () => {
    const length = Math.floor(Math.random() * 9) + 8; 
    const password = sifreUret(length);
    passwordInput.value = password;
});

copybtn.addEventListener("click", () => {
    const password = passwordInput.value;
    if (!password) {
        alert("Önce bir şifre üret!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => alert("Şifre kopyalandı!"))
        .catch(() => alert("Kopyalama başarısız!"));
});