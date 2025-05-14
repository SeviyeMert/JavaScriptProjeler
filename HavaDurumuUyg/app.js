const apiKey = "996f55677bca753a5b0e2a5be7301d43";
const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        result.innerHTML = "Lütfen bir şehir giriniz";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=tr&units=metric`)

    .then(response => {
        if (!response.ok) {
            throw new Error("Şehir bulunamadı.");
        }
        return response.json();
    })
    .then(data => {
        const name = data.name;
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        result.innerHTML = `
            <h3>${name}</h3>
            <p>Sıcaklık: ${temp}°C</p>
            <p>Durum: ${desc}</p>
        `;
    })

    .catch(error => {
        result.innerHTML = `⚠️ Hata: ${error.message}`;
    });

})