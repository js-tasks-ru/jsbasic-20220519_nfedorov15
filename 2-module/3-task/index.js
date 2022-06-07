let calculator = {
  
  read() {
    this.a = +prompt ("Введите первое число a:", 5);
    this.b = +prompt ("Введите второе число b:", 3);
  },
  
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
