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
