function appendValue(deger) {
    let display = document.getElementById("display");
    display.value += deger;
  }
  
  function calculate() {
    let display = document.getElementById('display');
    
    display.value = eval(display.value);
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }