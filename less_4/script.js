let celsium = document.getElementById("celsium");
let convert = document.getElementById("convert");
let result = document.getElementById("result");

let counter = 0;

function count() {
    counter = counter + 1;
    // counter += 1
    // counter++ (прибавка на 1)
    console.log("Количество нажатий: " + counter);
}

function translate() {
    let number = Number(celsium.value);
    let numberResult = number * 9 / 5 + 32;
    result.value = numberResult;
}

convert.addEventListener("click", translate)

// если написать function(), то она выполняется и рез-тат заносится в переменную
// если написать function внутри чего-либо, она не выполнится