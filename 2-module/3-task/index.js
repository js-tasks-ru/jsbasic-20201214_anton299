let calculator = {
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    console.log(this.a + this.b)
      return this.a + this.b
  },
  mul: function () {
    console.log(this.a * this.b)
    return this.a * this.b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально




