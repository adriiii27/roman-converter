// tests.js
const expect = chai.expect;

describe('Pruebas del Convertidor de Números Romanos', function () {

  // ------------------------------------------------------------------
  // Pruebas para integerToRoman(num)
  // ------------------------------------------------------------------
  describe('integerToRoman(num)', function () {

    describe('Entradas Válidas (Límites y Particiones de Equivalencia)', function () {
      it('TC-M-I2R-01 y TC-AI-I2R-01: debería convertir el límite inferior 1 a "I"', function () {
        expect(integerToRoman(1)).to.equal('I');
      });

      it('TC-M-I2R-02 y TC-AI-I2R-02: debería convertir el límite superior 3999 a "MMMCMXCIX"', function () {
        expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
      });

      it('TC-M-I2R-03: debería convertir 494 a "CDXCIV" (Lógica Sustractiva)', function () {
        expect(integerToRoman(494)).to.equal('CDXCIV');
      });

      it('TC-M-I2R-04: debería convertir 28 a "XXVIII" (Lógica Aditiva)', function () {
        expect(integerToRoman(28)).to.equal('XXVIII');
      });

      it('TC-AI-I2R-03: debería convertir 10 a "X" (Un solo carácter)', function () {
        expect(integerToRoman(10)).to.equal('X');
      });

      it('TC-AI-I2R-04: debería convertir 58 a "LVIII" (Aditiva compleja)', function () {
        expect(integerToRoman(58)).to.equal('LVIII');
      });

      it('TC-AI-I2R-05: debería convertir 1994 a "MCMXCIV" (Sustractiva compleja)', function () {
        expect(integerToRoman(1994)).to.equal('MCMXCIV');
      });
    });

    describe('Entradas Inválidas (Pruebas Negativas y Límites)', function () {
      it('TC-M-I2R-05 y TC-AI-I2R-06: debería lanzar un error para el límite inferior inválido (0)', function () {
        expect(() => integerToRoman(0)).to.throw();
      });

      it('TC-M-I2R-06 y TC-AI-I2R-07: debería lanzar un error para el límite superior inválido (4000)', function () {
        expect(() => integerToRoman(4000)).to.throw();
      });

      it('TC-M-I2R-07 y TC-AI-I2R-08: debería lanzar un error para números negativos (-10, -50)', function () {
        expect(() => integerToRoman(-10)).to.throw();
        expect(() => integerToRoman(-50)).to.throw();
      });

      it('TC-M-I2R-08: debería lanzar un error para números decimales/flotantes (15.5)', function () {
        expect(() => integerToRoman(15.5)).to.throw();
      });

      it('TC-AI-I2R-09: debería lanzar un error para entrada nula (null)', function () {
        expect(() => integerToRoman(null)).to.throw();
      });
    });
  });

  // ------------------------------------------------------------------
  // Pruebas para romanToInteger(str)
  // ------------------------------------------------------------------
  describe('romanToInteger(str)', function () {

    describe('Entradas Válidas (Límites y Particiones de Equivalencia)', function () {
      it('TC-M-R2I-01 y TC-AI-R2I-01: debería convertir "I" a 1', function () {
        expect(romanToInteger('I')).to.equal(1);
      });

      it('TC-M-R2I-02 y TC-AI-R2I-02: debería convertir "MMMCMXCIX" a 3999', function () {
        expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
      });

      it('TC-M-R2I-03 y TC-AI-R2I-05: debería convertir "MCMXCIV" a 1994', function () {
        expect(romanToInteger('MCMXCIV')).to.equal(1994);
      });

      it('TC-AI-R2I-03: debería convertir "IX" a 9', function () {
        expect(romanToInteger('IX')).to.equal(9);
      });

      it('TC-AI-R2I-04: debería convertir "LVIII" a 58', function () {
        expect(romanToInteger('LVIII')).to.equal(58);
      });

      it('TC-AI-R2I-14: debería manejar correctamente entradas válidas en minúsculas ("mcmxciv") y devolver 1994', function () {
        expect(romanToInteger('mcmxciv')).to.equal(1994);
      });
    });

    describe('Entradas Inválidas (Gramática, Formato, Caracteres)', function () {
      it('TC-M-R2I-04: debería lanzar un error para caracteres inválidos ("MMXQ")', function () {
        expect(() => romanToInteger('MMXQ')).to.throw();
      });

      it('TC-M-R2I-05 y TC-AI-R2I-06: debería lanzar un error para repetición ilegal ("IIII")', function () {
        expect(() => romanToInteger('IIII')).to.throw();
      });

      it('TC-M-R2I-06: debería lanzar un error para resta ilegal ("IC")', function () {
        expect(() => romanToInteger('IC')).to.throw();
      });

      it('TC-M-R2I-07 y TC-AI-R2I-07: debería lanzar un error para caracteres no repetibles ("VV")', function () {
        expect(() => romanToInteger('VV')).to.throw();
      });

      it('TC-M-R2I-08: debería lanzar un error para una cadena vacía ("")', function () {
        expect(() => romanToInteger('')).to.throw();
      });

      it('TC-AI-R2I-08: debería lanzar un error para notación sustractiva inválida ("IL")', function () {
        expect(() => romanToInteger('IL')).to.throw();
      });

      it('TC-AI-R2I-09: debería lanzar un error para secuencia inválida ("CMC")', function () {
        expect(() => romanToInteger('CMC')).to.throw();
      });

      it('TC-AI-R2I-10: debería lanzar un error para caracteres finales inválidos ("MCMXCIVI")', function () {
        expect(() => romanToInteger('MCMXCIVI')).to.throw();
      });

      it('TC-AI-R2I-11: debería lanzar un error para cadenas numéricas ("123")', function () {
        expect(() => romanToInteger('123')).to.throw();
      });

      it('TC-AI-R2I-12: debería lanzar un error si contiene espacios en blanco ("MC M")', function () {
        expect(() => romanToInteger('MC M')).to.throw();
      });

      it('TC-AI-R2I-13: debería lanzar un error para entrada nula (null)', function () {
        expect(() => romanToInteger(null)).to.throw();
      });
    });
  });
});