const namesInput = document.getElementById("namesInput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


btn.addEventListener("click", () => {
    const inputs = namesInput.value;
    
    const rawList = inputs.split(",");
    
    let cleanedList = [];
    
    for (let i = 0; i < rawList.length; i++) {
        let name = rawList[i].trim();
        
        if (name !== "") {
            cleanedList.push(name);
        }
    }
    
    const random = Math.floor(Math.random()* cleanedList.length);
    const winner = cleanedList[random];
    
    result.textContent = `Kazanan: ${winner}`;
})