const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let input = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      input = "";
    } else if (value === '=') {
      try {
        input = eval(input).toString();
      } catch {
        input = "Error";
      }
    } else {
      input += value;
    }

    display.value = input;
  });
});
