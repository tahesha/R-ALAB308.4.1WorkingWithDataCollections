//Part 1: Refactoring Old Code "Feeling Loopy"

// Given CSV string
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse the CSV string and log each row of data
function parseCSV(csvString) {
    // Split the CSV string into rows using the newline character (\n) as delimiter
    const rows = csvString.split("\n");

    // Loop through each row
    for (let i = 0; i < rows.length; i++) {
        // Split the row into cells using the comma (,) as delimiter
        const cells = rows[i].split(",");

        // Log each row of data
        console.log(cells[0], cells[1], cells[2], cells[3]);
    }
}

// Call the parseCSV function with the given CSV string
parseCSV(csvString);



//FizzBuzz
// Loop through all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } 
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // If the number is not divisible by either 3 or 5
    else {
        console.log(i);
    }
}


//PrimeTime
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the next prime number starting from n
function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            return n;
        }
        n++;
    }
}

// Declare an arbitrary number, n
const n = 4;

// Find the next prime number starting from n
const nextPrime = findNextPrime(n);

// Log the next prime number
console.log(`The next prime number after ${n} is: ${nextPrime}`);



