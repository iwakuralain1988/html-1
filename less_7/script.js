let person = {
    name: "Рич",
    age: 52,
    height: 0.02,
}

console.log(person);
console.log(person.name); // вручную к 1 хар-ке
console.log(person["height"]); //  более автоматизированно через цикл

person.name = "Чир";
console.log(person);

delete person.height;
console.log(person);

for (let key in person) {
    console.log(key + ":" + person[key]);
}

let colors = ["pink", "purple", "violet", "white", "blue"]
console.log(colors);
console.log(colors[1]);

colors.pop()
colors.push("brown");
colors.splice(2, 1);
colors.splice(2, 0, "black")
console.log(colors);

let numbers = []
for (let i=1; i <= 100; i++) {
    numbers.push(i);
}

console.log(numbers);

for (let i=0; i < numbers.length; i++) {
    numbers[i] = Math.sqrt(numbers[i]); 
}

console.log(numbers)
