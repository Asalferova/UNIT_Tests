// Задание 1.
// В классе Calculator создайте метод calculateDiscount, который принимает сумму покупки и процент скидки и
// возвращает сумму с учетом скидки.
// Ваша задача - проверить этот метод с использованием библиотеки AssertJ. Если метод calculateDiscount
// получает недопустимые аргументы, он должен выбрасывать исключение ArithmeticException.
// Не забудьте написать тесты для проверки этого поведения


//В JavaScript нет специфического класса  ArithmeticException , который используется в языке Java. 
//Но его можно создать
class ArithmeticException extends Error {
  constructor(message) {
    super(message)
    this.name = 'ArithmeticException'
  }
}

const myCustomError = new ArithmeticException('impossible to calculate, incorrect values');


// Функция  testArithmetic  проверяет корректность аргументов  
// purchaseAmount  и  discountPercentage  с помощью  console.assert . 
// Если условия не выполняются, то срабатывает  console.assert  
// и выбрасывается ошибка  AssertionError . 

function testArithmetic(purchaseAmount, discountPercentage){
    console.assert(Number.isFinite(purchaseAmount), myCustomError);     //сумма покупки не Infinity
    console.assert(Number.isInteger(discountPercentage), myCustomError);  //сумма скидки - целое число
    console.assert(purchaseAmount >= 1, myCustomError);              //сумма покупки больше или равна 1
    console.assert(discountPercentage >= 0, myCustomError);         //сумма скидки больше или равна 0
    console.assert(discountPercentage < 100, myCustomError);      //скидка не больше 100%
    
}


// При использовании  console.assert  в JS, если условие возвращает  false, 
// то будет выброшена ошибка  AssertionError, но выполнение программы продолжится. 
// console.assert  не является операцией, которая автоматически 
// останавливает выполнение программы. 
// Чтобы прекратить выполнение программы после выбрасывания ошибки, 
// нужно использовать  throw  вместо  console.assert:

// function testArithmetic(purchaseAmount, discountPercentage) {
//     if (!Number.isFinite(purchaseAmount)) {
//       throw myCustomError;
//     }
//     if (!Number.isInteger(discountPercentage)) {
//         throw myCustomError;
//       }
//     if (purchaseAmount < 0) {
//       throw myCustomError;
//     }
//     if (discountPercentage < 0) {
//       throw myCustomError;
//     }
//     if (discountPercentage > 100) {
//         throw myCustomError;
//       }
    
//   }


class Calculator { 
    calculateDiscount(purchaseAmount, discountPercentage) {
        const discountAmount = purchaseAmount * (discountPercentage / 100);
        const discountedPrice = purchaseAmount - discountAmount;
        testArithmetic(purchaseAmount, discountPercentage);
        return Number(discountedPrice.toFixed(2));
      } 
  } 

const purchase = new Calculator;

purchase.calculateDiscount(100, 10); 
purchase.calculateDiscount(-2, 10); 
purchase.calculateDiscount(100, 0); 
purchase.calculateDiscount(Infinity, 10); 
purchase.calculateDiscount(0, 0);
purchase.calculateDiscount(100, -10); 
purchase.calculateDiscount(0, 20); 
purchase.calculateDiscount(1200, 120); 
purchase.calculateDiscount(12, 23.99); 
