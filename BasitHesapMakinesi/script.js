let display = document.getElementById("display");


function appendValue(deger) {
  display.value += deger;
}
  
  function calculate() {
    display.value = eval(display.value);
  }
  
  function clear() {
    display.value = '';
  }