# Happy Numbers

According to [Wikipedia](https://en.wikipedia.org/wiki/Happy_number), a happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit.  For example, 13 is a happy number, because `(1*1) + (3*3) = 10 and (1*1) + (0*0) = 1`.  On the other hand, 4 is not a happy number, because `(4*4) = 16, (1*1) + (6*6) = 37, (3*3) + (7*7) = 58, (5*5) + (8*8) = 89, (8*8) + (9*9) = 145, (1*1) + (4*4) + (5*5) = 42, (4*4) + (2*2) = 20 and (2*2) = 4 and repeats without reaching 1`.  The aim is to implement the project using HTML Forms.

## UX

**Getting Started**

Enter a whole number between 1 and 9999 (e.g. 13) and then click on the Submit Button.  You will then get the number you have entered as well as deciding if that number is happy.  Click on the Reset Button to clear the information.

**User Stories**

As a user, if I enter a number that is less than 1 or greater than 9999, I get an error message, `Invalid input.  Please enter a whole number between 1 and 9999.`.

As a user, if I do not enter anything, I get an error message, `Invalid input.  Please enter a whole number between 1 and 9999.`.

As a user, if I enter a number, but it is not an integer, I get an error message, `Invalid input.  Please enter a whole number between 1 and 9999.`.  For example, I have entered 4.5.

As a user, if I enter anything other than a whole number (e.g. text such as bar), I get an error message, `Invalid input.  Please enter a whole number between 1 and 9999.`.

As a user, assuming that my input is valid, I should get information such as:

    You have entered the number 13.

    13 is a happy number



