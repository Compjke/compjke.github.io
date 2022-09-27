
const array = [11, 25, 30, 50, 100];
// Число степени 
const multiply = 3;

document.getElementById("red").innerHTML = `<p>Чистый массив: "${(array.join(" / "))}"!</p>`;

const fn = (a, b) => {
   let result = a;
   for (let i = 1; i < b; i++) {
      result *= a;
   }
   return result;
}

const map = (callback, array) => {
   for (i = 0; i < array.length; i++) {
      array[i] = callback(array[i], multiply);
   }
   return array.join(" / ");
};

document.getElementById("green").innerHTML = `<p>Массив возведенный в 3-ю степень: "${(map(fn, array))}"!</p>`;



/*Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1	function checkAge(age) {
2	if (age > 18) {
3	return true;
4	} else {
5	return confirm('Родители разрешили?');
6	} }
*/

var age = +prompt("Enter your age");

let checkAge = (age) => {
   return (age >= 18) ? alert("Держи Пивко") :
      confirm('Родители разрешили?');
}
checkAge(age);




//  const areArraysSame =  (a, b) => {
//    if (a.length !== b.length) {
//        return false;
//    }
//    for (var i = 0; i < a.length; i++) {
//        if (a[i] !== b[i]) {
//            return false;
//        }
//    }
//    return true;
// }
// document.write(areArraysSame([1,2,3],[1,2,4]))