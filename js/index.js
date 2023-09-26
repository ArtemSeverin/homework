/** @format */
function SuperMath() {
  this.check = function ({ X, Y, znak }) {
    if (!validOperator(znak)) {
      alert("можливі варіанти znak => `+ - / * %");
      return;
    }

    const user = prompt(`порахувати числа ${X} і ${Y}? (Так/Ні)`);

    if (user.toLowerCase() === "так") {
      const result = this.calculate(obj);
      console.log(`результат: ${X} ${znak} ${Y} = ${result}`);
    } else {
      obj = this.input();
      this.check(obj);
    }
  };

  function validOperator(operator) {
    const operators = ["+", "-", "/", "*", "%"];
    return operators.includes(operator);
  }

  this.input = function () {
    const numX = parseFloat(prompt("значення X:"));
    const numY = parseFloat(prompt("значення Y:"));
    const math = prompt("математичний оператор (+, -, /, *, %):");

    return { X: numX, Y: numY, znak: math };
  };

  this.calculate = function ({ X, Y, znak }) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    }
  };
}

var p = new SuperMath();
var obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
