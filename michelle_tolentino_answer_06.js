/*
    Generate a list containing five consecutive daily dates in YYYY-MM-DD 
    format. The function should accept an input date (YYYY-MM-DD) which 
    should be the last on the list. 
    
    Sample Input: 
    ‘2021-03-06’ 
    
    Sample Output: 
    [‘2021-03-02’, ‘2021-03-03’, ‘2021-03-04’, ‘2021-03-05’, ‘2021-03-06’]
*/

function generateDateList(endDate) {
    const dates = [];
    const date = new Date(endDate); // convert input string to Date object

    for (let i = 4; i >= 0; i--) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - i); // subtract days from endDate
 
        // format as YYYY-MM-DD
        const formattedDate = newDate.toISOString().split("T")[0];
        dates.push(formattedDate);
    }

    return dates;
}

// test cases
function runTests() {
    const testCases = [
        { input: "2021-03-06", expected: ["2021-03-02", "2021-03-03", "2021-03-04", "2021-03-05", "2021-03-06"] },
        { input: "2023-01-01", expected: ["2022-12-28", "2022-12-29", "2022-12-30", "2022-12-31", "2023-01-01"] },
        { input: "2000-02-29", expected: ["2000-02-25", "2000-02-26", "2000-02-27", "2000-02-28", "2000-02-29"] }, // Leap year case
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = generateDateList(input);
        console.log(`Test ${index + 1}:  Input: ${input}`);
        console.log(`Expected: ${JSON.stringify(expected)} | Result: ${JSON.stringify(result)}`);
        console.log(`${JSON.stringify(result) === JSON.stringify(expected) ? "PASSED" : "FAILED"}`);
        console.log();
    });
}

runTests();
