function max(a, b) {
    let diff = Math.abs(a - b)
    let avg = a + b / 2
    return avg + (diff / 2)
}

max(3, 5) // 3 + 5 / 2 + 2 / 2 == 6.5
Math.abs(3 - 5)