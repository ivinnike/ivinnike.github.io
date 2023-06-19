var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
guess = prompt("Привет! Я - мини-игра Морской бой. \n\nТвоя задача - угадать, в каких из 7 ячеек, начиная с 0 и заканчивая 6, расположен трехпалубный корабль. \n\nЧем меньше попыток, тем лучше результат. \n\nВведи число от 0 до 6:");
if (guess < 0 || guess > 6) {
alert("Введи валидное значение от 0 до 6!");
} else {
guesses = guesses + 1;
if (guess == location1 || guess == location2 || guess == location3) {
alert("Попал!");
hits = hits + 1;
if (hits == 3) {
    isSunk = true;
    alert ("Поздравляю!");
}
} else {
alert("Мимо");
}
}
}
var stats = "Ты потратил " + guesses + " попыток. " + "Твоя удача равна " + (3/guesses);
alert(stats);
