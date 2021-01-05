let calculator = {
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    console.log(this.a + this.b)
      return((this.a ^ 0) === this.a && (this.b ^ 0) === this.b)?  this.a + this.b: NaN
  },
  mul: function () {
    console.log(this.a * this.b)
    return((this.a ^ 0) === this.a && (this.b ^ 0) === this.b)? this.a * this.b: NaN
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально




