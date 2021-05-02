function printPattern() {
    let difference = 2, firstNumber = 1;
    console.log(firstNumber);

    // Restricted the series to 200 so that the program doesn't go in an infinite loop
    while (firstNumber + difference < 200) {
        firstNumber += difference;
        console.log(firstNumber);
        difference++;
    }
}

function printPatternWithForLoop() {
    let difference = 1;

    // Restricted the series to 200 so that the program doesn't go in an infinite loop
    for (let firstNumber = 1; firstNumber < 200; firstNumber = firstNumber + difference) {
        console.log(firstNumber);
        difference++;
    }
}

// printPattern();
printPatternWithForLoop();