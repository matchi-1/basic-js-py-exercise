/*
    Transform the date format of the output from the previous question into 
    YYYY-MM-DD. (example: 2020-01-01) 
    
    Sample Input: 
    ‘Feb 13, 1565’ 
    ‘February 13, 1565’ 
    
    Sample Output: 
    ‘1565-02-13’
*/

function transformDateFormat(dateStr) {
    // month lookup map (full and abbreviated names)
    const monthMap = {
        Jan: "01", January: "01",
        Feb: "02", February: "02",
        Mar: "03", March: "03",
        Apr: "04", April: "04",
        May: "05", 
        Jun: "06", June: "06",
        Jul: "07", July: "07",
        Aug: "08", August: "08",
        Sep: "09", September: "09",
        Oct: "10", October: "10",
        Nov: "11", November: "11",
        Dec: "12", December: "12"
    };

    // regex: match both full and abbreviated month formats
    const match = dateStr.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})/);

    if (!match) return ""; // return empty string if format is invalid

    const [_, month, day, year] = match; // extract matched parts
    const formattedDay = day.padStart(2, "0"); // two-digit day

    return `${year}-${monthMap[month]}-${formattedDay}`;
}

// test cases
function runTests() {
    const testCases = [
        { input: "Feb 13, 1565", expected: "1565-02-13" },
        { input: "February 13, 1565", expected: "1565-02-13" },
        { input: "Dec 25, 2022", expected: "2022-12-25" },
        { input: "December 25, 2022", expected: "2022-12-25" },
        { input: "Jul 4, 1776", expected: "1776-07-04" },
        { input: "July 4, 1776", expected: "1776-07-04" },
        { input: "Mar 1, 2000", expected: "2000-03-01" },
        { input: "March 1, 2000", expected: "2000-03-01" },
        { input: "May 5, 2023", expected: "2023-05-05" },
        { input: "Invalid Date", expected: "" }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = transformDateFormat(input);
        console.log(`Test ${index + 1}: Input: ${input}`);
        console.log(`Expected: ${expected} | Result: ${result}`);
        console.log(`${result === expected ? "PASSED" : "FAILED"}`);
        console.log();
    });
}

runTests();
