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


//Part 2: Expanding Functionality; modifying the parseCSV function
//Parse CSV to Extract Headings

function extractHeadings(csvString) {
    const rows = csvString.split("\n");
    const headings = rows[0].split(",");
    return headings;
}

//Parse CSV to Extract Headings
function extractHeadings(csvString) {
    const rows = csvString.split("\n");
    const headings = rows[0].split(",");
    return headings;
}

//Parse CSV to Extract Data Rows
function extractDataRows(csvString) {
    const rows = csvString.split("\n").slice(1);
    const dataRows = rows.map(row => row.split(","));
    return dataRows;
}


//Combine Functions to Create Two-Dimensional Array
function parseCSVToArray(csvString) {
    const headings = extractHeadings(csvString);
    const dataRows = extractDataRows(csvString);
    const result = [headings, ...dataRows];
    return result;
}

// Example of usage
const csvArray = parseCSVToArray(csvString);
console.log(csvArray);


//Part 3: Transforming Data
function transformData(csvArray) {
    const headings = csvArray[0];
    const dataRows = csvArray.slice(1);
    const transformedData = dataRows.map(row => {
        const obj = {};
        headings.forEach((heading, index) => {
            obj[heading.toLowerCase()] = row[index];
        });
        return obj;
    });
    return transformedData;
}

// Example of usage
const transformedData = transformData(csvArray);
console.log(transformedData);


//Part 4: Sorting and Manipulating Data
function manipulateData(data) {
    // Remove the last element from the sorted array
    data.pop();

    // Insert object at index 1
    data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

    // Add object to the end of the array
    data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    // Calculate average age
    let totalAge = 0;
    data.forEach(obj => {
        totalAge += parseInt(obj.age);
    });
    const averageAge = totalAge / data.length;

    return { manipulatedData: data, averageAge };
}

// Example of usage
const { manipulatedData, averageAge } = manipulateData(transformedData);
console.log(manipulatedData);
console.log("Average Age:", averageAge);



//Full Circle - Part 5
function convertToCSV(data) {
    const headings = Object.keys(data[0]);
    const csvArray = [headings.join(",")];
    data.forEach(obj => {
        const values = headings.map(heading => obj[heading]);
        csvArray.push(values.join(","));
    });
    const csvString = csvArray.join("\n");
    return csvString;
}

// Example of usage; red because previously declared. Keeping for future reference.
const csvString = convertToCSV(manipulatedData);
console.log(csvString);
