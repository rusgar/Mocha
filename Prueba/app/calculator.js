let assert = chai.assert;

// Por ejemplo, estamos creando una función potencia. 
// Escribimos algo de código, testeamos: f(x)(1) funciona,
//  pero f(x)(2) no funciona. 
//  Corregimos el código y ahora funciona f(x)(2).
//   ¿Está completo? Hemos olvidado re-testear f(x)(1). 
//   Esto puede resultar error.


describe('Array', function() {
  describe('#indexOf()', function() {
    it('debería devolver -1 cuando el valor no está presente', function() {
      assert.equal([1,2,3,].indexOf(4), -1);
    });
  });
});

describe("potencia", function() {
  
  it("eleva a la n-ésima potencia", function() {
    assert.equal(potencia(2, 3), 8);
  });
  
});

// De momento, el test falla.
//  Es lógico: tenemos el código vacío en la función potencia,
//   así que potencia(2,3) devuelve undefined en lugar de 8.

function potencia(x, n) {
  return 8; // :) ¡hacemos trampas!
};

  // describe("potencia", function() {

  //   it("eleva a la n-ésima potencia", function() {
  //     assert.equal(potencia(2, 3), 8);
  //     assert.equal(potencia(3, 3), 27);
  //   });
  // });
  
 
  // describe("potencia", function() {

  //   it("2 elevado a la potencia de 3 es 8", function() {
  //     assert.equal(potencia(2, 3), 8);
  //   });
  
  //   it("3 elevado a la potencia de 3 es 27", function() {
  //     assert.equal(potencia(3, 3), 27);
  //   });
  
  // });

  // La diferencia principal se da cuando assert lanza un error,
  //  el bloque it termina inmediatamente. 
  //  De forma que si en la primera manera el primer assert falla, 
  //  no veremos nunca el resultado del segundo assert.

  // function potencia(x, n) {
  //   let result = 1;
  
  //   for (let i = 0; i < n; i++) {
  //     result *= x;
  //   }
  
  //   return result;
  // }

  // describe("pow", function() {

  //   function makeTest(x) {
  //     let expected = x * x * x * x;
  //     it(`${x} elevado a 4 es ${expected}`, function() {
  //       assert.equal(pow(x, 4), expected);
  //     });
  //   }
  
  //   for (let x = 1; x <= 10; x++) {
  //     makeTest(x);
  //   }
  
  // });

  describe("potencia", function() {
 
    it("para n negativos el resultado es NaN", function() {
      assert.isNaN(potencia(2, -1));
    });
  
    it("para no enteros el resultado is NaN", function() {
      assert.isNaN(potencia(2, 1.5));
    });
  
  });


  function potencia(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

 
  
 

  