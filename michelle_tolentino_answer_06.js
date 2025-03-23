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
        { input: "2023-01-01", expected: ["2022-12-28", "2022-12-29", "2022-12-30", "2022-12-31", "2023-01-01"] }, // year change
        { input: "2000-02-29", expected: ["2000-02-25", "2000-02-26", "2000-02-27", "2000-02-28", "2000-02-29"] }, // leap year
        { input: "2024-03-01", expected: ["2024-02-26", "2024-02-27", "2024-02-28", "2024-02-29", "2024-03-01"] }, // leap year (Feb -> Mar)
        { input: "2023-03-01", expected: ["2023-02-25", "2023-02-26", "2023-02-27", "2023-02-28", "2023-03-01"] }, // non-leap year (Feb -> Mar)
        { input: "2022-05-01", expected: ["2022-04-27", "2022-04-28", "2022-04-29", "2022-04-30", "2022-05-01"] }, // month transition (April -> May)
        { input: "2022-12-01", expected: ["2022-11-27", "2022-11-28", "2022-11-29", "2022-11-30", "2022-12-01"] }, // month transition (Nov -> Dec)
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
