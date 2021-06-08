const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not emptyy
    if (display.value !== '') {
      // calculate and show the result 
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'CA') {
    // clear all
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}