var x = 6, y = 14, z = 4;

console.log(x += y - x++ * z);
document.write("(x += y - x++ * z) получаем по факту шось таке  6 += 14-(6*4) <br>")

/* 1.Срабатывает постфиксный инкремент получаем число 6 +1 (но он не успевает добавиться и остается 6)
   2.Это число т.е 6 умножил на z т.е 4 получили +24
   3. Просисходит вычитание y т.е 14 - (х++*z) т.е 24 и плучаем -10
   4.Далее к х присвается(тут именно плюсуется) значение у и полуаем 6+ (-10) = -4
*/

x = 6, y = 14, z = 4;
console.log(z = --x - y * 5);
document.write("(z = --x - y * 5) получаем по факту шось таке z = 5 - (14*5) <br>")

/*1. на х срабатывает декремент получаем 5
  2. у умножается на 5 получаем 70
  3. от х т.е 5 отнимаеться 70 и получаем -65
  4. z присваивается значение -65.
 */

x = 6, y = 14, z = 4;
console.log(y /= x + 5 % z);
document.write("(y /= x + 5 % z) получаем по факту шось таке 14 / (6 + 1)  <br>")
/*
  1.Выводиться остаток от деления 5 на переменную z получаем 1
  2.К х прибавляется этот остаток т.е 1 и получаем 7
  3. К переменной у присваивается это значение с делением (14/7=2)
 */

x = 6, y = 14, z = 4;
console.log(z - x++ + y * 5);
document.write("(z - x++ + y * 5) получаем по факту шось таке  4 - 6 + (14 * 5) <br>")
/*
  1. Срабатывает постфиксный инкримент на х и получаем 6 + 1 но он видимо опять не успевает добавиться и остается 6
  2.у умножается на 5 получаем 70
  3.от z отнимается х++ (т.е 6) и получаем -2
  4. к -2 прлюсуется (y * 5) т.е 70 и получаем 68.
  Вычитание и сложение одинаковые по приоритету но читается слева на право , поэтому первым производится вычитание в данном случае.
 */

x = 6, y = 14, z = 4;
console.log(x = y - x++ * z);
document.write("(x = y - x++ * z) получаем по факту шось таке  x = 14 - (6*4) <br>")
/*
  1.Срабатывает постфиксный инкримент на х и получаем 6 + 1 но опять не успеет и остается 6
  2.х (т.е 6) умножается на z и получаем 24
  3. от у (т.е 14) вычитается (x++ * z) т.е 24 получаем 14-24 = -10
  4. х присваивается это знаяение и на выходе получаем также -10
 */
