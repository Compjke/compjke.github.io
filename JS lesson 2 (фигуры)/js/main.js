// Задание переписать оператора
var result = parseInt(prompt("Enter number"));
var a = 1;
var b = 2;

result <= (a + b < 4) ? document.write("Мало") :
	result >= (a + b < 4) ? document.write("Много") :
		document.write("Шось не то ввел")
document.write("<br><br>");

// След. условие
var message = prompt("Enter login");

(message == "Вася") ? document.write("Привет") :
	(message == "Директор") ? document.write("здравствуйте") :
		(message == " ") ? document.write("Нет логина") : document.write("Напиши 'Вася' или 'Директор' , по другому никак.");
document.write("<br><br>")

// Вывести нечетные числа 
document.write("Нечетные числа в промежутке 10 и 20: ");
var num = 10;
while (num < 20) {
	num++;
	if (num % 2) document.write("&nbsp;" + (num));
}
document.write("<br><br>")


// Сумма в диапазоне чисел

var a = Number(prompt("введіть початок діапазону", ""));
var b = Number(prompt("введіть кінець діапазону", ""));
var sum = 0;

while (a <= b) {
	sum += a;
	a++;
}
alert(sum)



// &#9734; - zvezda 
// &nbsp; - probel

// Прямоугольник
document.write("<br>Это Прямоугольник<br><br>")
var line = 5;

for (var i = 0; i < line; i++) {
	for (var zvezda = 0; zvezda < line * 3; zvezda++) {
		document.write("&#9734;");
	}
	document.write("<br>");
}
document.write("<br>Это прямоугольный треугольник<br><br>")

// Прямоугольный треугольник
var line = 7;

for (var i = 0; i < line; i++) {
	for (var zvezda = (0 - i); zvezda < 1; zvezda++) {
		document.write("&#9734;");
	}
	document.write("<br>");
}
document.write("<br>Равносторонний треугольник<br><br>")

// Равносторонний треугольник

var line = 8;

for (var i = 0; i < line; i++) {
	for (var probel = (i + 1); probel < line; probel++) {
		document.write("&nbsp;")
	}
	for (var zvezda = 1 + i; zvezda > 0; zvezda--) {
		document.write("&#9734;")
	}
	document.write("<br>")
}

document.write("<br>Ромб<br><br>")
// Ромб

var line = 8;

for (var i = 0; i < line; i++) {
	for (var probel = (i + 1); probel < line; probel++) {
		document.write("&nbsp;")
	}
	for (var zvezda = (i + 1); zvezda > 0; zvezda--) {
		document.write("&#9734;")
	}
	document.write("<br>")
}
for (var i = 0; i < line; i++) {
	for (var probel = (i + 1); probel > 1; probel--) {
		document.write("&nbsp;")
	}
	for (var zvezda = (i); zvezda < line; zvezda++) {
		document.write("&#9734;")
	}
	document.write("<br>")
}

// Ромб чуть по другому
document.write("<br><br><br>")
var line = 15;

for (var i = 0; i < line; i++) {
	for (var probel = (i + 1); probel < line; probel++) {
		document.write("&nbsp;")
	}
	for (var zvezda = (i); zvezda > 0; zvezda--) {
		document.write("&#9734;")
	}
	document.write("<br>")
}

for (var i = line; i > 0; i--) {
	for (var probel = (i + 1); probel < line; probel++) {
		document.write("&nbsp;")
	}
	for (var zvezda = (i); zvezda > 0; zvezda--) {
		document.write("&#9734;")
	}
	document.write("<br>")
}








// for (var i = 0; i <= 10; i++) {
//   	document.write(i + ` : Hello, JavaScript!` + "<br>" );
//   	}


// var imya = prompt("Vvedi Imya");
// imya === "Alex" ? document.write("Hello Sanek") :  imya === "Ann" ? document.write("Hello Ann") : imya === "Nata" ? document.write("HELLO MOM") : document.write("HTO TI CHUDOVIWE");

// var an = ["лев", "фламинго", "белый медведь", "удав"];
// for (var i = 0; i < an.length; i++) {
// 	document.write("В этом зоопарке есть " + an[i] + ".<br>");
// }


// var imya = ["Ник", "Колян", "Olya", "Vasya"];
// for (var i = 0; i < imya.length; i++) {
//  document.write("В моем zooparke есть " + imya[i] + ".<br><br>");
// }

// var x = 1;

// while ( x < 10000) {
// 	document.write(x + "<br>");
// 	x = x * 10
//   }