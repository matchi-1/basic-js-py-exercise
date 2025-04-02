/*
    Create a function that converts a Thai year. 
  
    Sample Input: 
    2563 
    2500 
    
    Sample Output: 
    2020 
    1957

    formula for conversion: 
    Gregorian year = Thai year - 543

*/

function convertThaiToGregorian(thaiYear) {
    return thaiYear - 543;  // just subtract 543 from the input, tho i shouldve checked the type first
}

// test cases
function runTests() {
    const testCases = [
        { input: 2563, expected: 2020 },
        { input: 2500, expected: 1957 },
        { input: 2023, expected: 1480 },
        { input: 2000, expected: 1457 },
        { input: 3000, expected: 2457 }
    ];

    testCases.forEach((test, index) => {
        const result = convertThaiToGregorian(test.input);
        console.log(`Test ${index + 1} Input: ${test.input}`);
        console.log(`Expected: ${test.expected}   |   Result: ${result}`);
        console.log(result === test.expected ? "PASSED" : "FAILED");
        console.log();
    });
}

runTests();