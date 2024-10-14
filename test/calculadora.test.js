var assert = require('assert');
const Calculadora = require('../src/calculadora');
  describe('Testes da Calculadura', function () {
    let calc;

    beforeEach(function() { // antes de cada teste
      calc = new Calculadora(); // crie uma calculadora
    });

    it('teste de soma', function () {
      assert.equal(calc.somar(2, 3), 5);
    });

    it('teste de subtrair', function () {
    assert.equal(calc.subtrair(3, 3), 0);
   });

   it('teste de multiplicar', function () {
    assert.equal(calc.multiplicar(2, 2), 4);
   });

   it('teste de dividir', function () {
    assert.equal(calc.dividir(8, 2), 4);
   });
// codigo abaixo para ver se a palavra "Divisão por zero não é permitida" aparece
   it('deve lançar um erro quando tentar dividir por zero', function() {
    assert.throws(() => calc.dividir(10, 0), /Divisão por zero não é permitida./);
  });

  it('deve retornar 1 para qualquer base com expoente 0', function() {
    const resultado = calc.potencia(5, 0);
    assert.strictEqual(resultado, 1);
  });

  it('deve lançar um erro para um operador inválido', function() {
    assert.throws(() => calc.operar(5, 3, '%'), /Operador inválido/); // asset throws é para pegar o erro "Operador inválido"
  });

});
