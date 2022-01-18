// Function to get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length==0 || num<1 || num>9999 || !Number.isInteger(Number(num))) {
        txt += `Invalid input.  Please enter a whole number between 1 and 9999.`;
    } else {
        // Get number information
        txt += `You have entered the number ${num}.<p>`;
        // Check if the number is a happy number
        if (isHappyNumber(num)) {
            txt += `${num} is a happy number.`;
        } else {
            txt += `${num} is not a happy number.`;
        }
    }

    // Display Information in the browser
    document.getElementById('numinfo').innerHTML = txt;

}

// Function to check if the number is happy
function isHappyNumber(n) {
    let currentNumber = n;
    let sumSquares;

    // Check if the current number is not 1 and not 4
    while (currentNumber !==1 && currentNumber !==4) {
        // Set Sum of Squares to 0
        sumSquares = 0;
        // Calculate the sum of squares of the digits
        while (currentNumber > 0) {
            let currentDigit = currentNumber % 10;
            sumSquares += (currentDigit) * (currentDigit);
            currentNumber = Math.floor(currentNumber/10);
        }

        // Set the current number to the sum of squares
        currentNumber = sumSquares;
    }

    // Compare the current number to 1 and return
    return currentNumber == 1;
}

// Function to Clear Information
function clearInfo() {
    let txt="";
    document.getElementById('numinfo').innerHTML = txt;
}