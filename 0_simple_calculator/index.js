const calc = (n1, n2, sign = "+" )=>{
    switch (sign) {
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2
        default:
            return n1 + n2
    }
}

const c = calc(22, 3, "/")
console.log(c)