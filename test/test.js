const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();
const Operations = require('../Prueba/app/app');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

console.info(Operations)



describe('Mathematical operations', () => {
  const operation = new Operations(10, 5);

  describe('Basic operation: sum with assert', () => {
    it('Sum of 2 numbers equals 15', () => {
      const sum = operation.sum.value;
      assert.equal(sum, 15);
    })

    it('The sum of 10 + 5 equals 15 ', () => {
      const sum = operation.sum.text;
      assert.equal(sum, 'La suma de 10 + 5 = 15');
    })

    it('The result is a string', () => {
      const sum = operation.sum.text;
      assert.typeOf(sum, 'string');
    })

    it('The result is a number', () => {
      const sum = operation.sum.value;
      assert.typeOf(sum, 'number');
    })

  })

  describe('Basic operation: subtraction with expect', () => {
    it('Subtraction of 2 numbers equals 5', () => {
      const res = operation.subtraction.value;
      expect(res).to.equal(5);
    })

    it('The subtraction of 10 - 5 equals 5 ', () => {
      const res = operation.subtraction.text;
      expect(res).to.equal('La resta de 10 - 5 = 5');
    })

    it('The result is a string', () => {
      const res = operation.subtraction.text;
      expect(res).to.be.a('string');
    })

    it('The result is a number', () => {
      const res = operation.subtraction.value;
      expect(res).to.be.a('number');
    })
  })

  describe('Basic operation: area of a triangle with should', () => {
    it('Area of triangle with base 10 x height 5 equal 25', () => {
      const area = operation.area.value;
      area.should.equal(25);
    })

    it('Area of triangle equals 25 ', () => {
      const area = operation.area.text;
      area.should.equal('El área del triángulo es 25');
    })

    it('The result is a string', () => {
      const area = operation.area.text;
      area.should.be.a('string');
    })

    it('The result is a number', () => {
      const area = operation.area.value;
      area.should.be.a('number');
    })
  })

})