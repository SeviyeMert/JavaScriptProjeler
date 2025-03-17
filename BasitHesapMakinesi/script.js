function appendValue(value) {
    let display = document.getElementById("display");
    display.value += value;
  }
  
  function calculate() {
    let display = document.getElementById('display');
    
    display.value = eval(display.value);
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }