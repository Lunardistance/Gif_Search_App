var numberMult = 5


function subtract(number, start, end, inc) {
    for (var i = start; i < end; i += inc) {
        number *= i;
    }
    return number
}


subtract(3, 5, 10, 15)


console.log(numberMult)