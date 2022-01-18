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
            txt += `${num} is a happy number`;
        } else {
            txt += `${num} is not a happy number`;
        }
    }

    // Display Information in the browser
    document.getElementById('numinfo').innerHTML = txt;

}