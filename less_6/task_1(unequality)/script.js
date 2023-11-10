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