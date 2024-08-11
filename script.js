let input = document.getElementById("Inputbox");
let buttons = document.querySelectorAll("button");
console.log(buttons);

let expr = "";
// Array. from() lets you create Arrays from: array-like objects (objects with a length property and indexed elements)
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.innerHTML == "=") {
      expr = eval(expr);
      input.value = expr;
    } else if (e.target.innerHTML == "AC") {
      expr = "";
      input.value = expr;
    } else if (e.target.innerHTML == "DEL") {
      expr = expr.substring(0, expr.length - 1);
      input.value = expr;
    } else {
      expr = expr + e.target.innerHTML;
      input.value = expr;
    }
  });
});
