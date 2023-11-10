let toggle = document.getElementById("switch");

toggle.addEventListener("click", function() {
    console.log(toggle.checked);
})

console.log("2" == 2);
console.log("2" === 2);

console.log("2" != 2);
console.log("2" !== 2);

console.log(3 >= 5);

function solveQuadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        console.log("Два корня: " + x1 + " и " + x2);
    } else {
        if (d === 0) {
            let x = -b / 2 * a;
            console.log("Один корень: " + x);
        } else {
            console.log("Корней нет ;)");
        }
    }     
}
solveQuadraticEquation(4, 1, 3)

let number = 5
while (number != 556) {
    console.log(number);
    number++;
}

for (let i=5; i < 556; i++) {
    console.log(i);
}

function inequalitySolver(a, b, c) {
    if (a > b) {
        if (b > c) {
            console.log("Наименьшее число: " + c);
        } else {
            console.log("Наименьшее число: " + b);
        }
    } else {
        if (c > a) {
            console.log("Наименьшее число: " + a);
        } else {
            console.log("Наименьшее число: " + c);
        }
    }
}