function update1(on, hour) {
    if(!on && (hour > 23 || hour < 7)) {         //  если(не и on (hour больше 23 или hour меньше 7))
        console.log("Обновление...");
    }
}

function update2(on, hour) {
    if(!on && hour > 23 || hour < 7) {         //  если(не и on hour больше 23 или hour меньше 7)
        console.log("Обновление...");
    }
}
update1(1, 1)
update2(1, 1)


// && - and
// || - or
// ! - nah

// для on подойдут любые числа, для hour необходимы числа либо больше 23 либо меньше 7