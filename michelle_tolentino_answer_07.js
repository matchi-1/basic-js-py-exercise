/*
    Write a javascript function that returns a string list containing all the 
    numbers found in a sentence. 
   
    Sample Input: 
    Whole Numbers is the set of natural numbers, plus zero, i.e., {0, 1, 2, 3, ...}. Integers are the set of all
    whole numbers plus all the negatives (or opposites) of the natural numbers, i.e., {…, ⁻2, ⁻1, 0, 1, 2, …}.
    We next move onto decimal numbers (such as 0.3, 0.32, ⁻2.7). 
    
    Sample Output: 
    [ ‘0’, ‘1’, ‘2’, ‘3’, ‘-2’, ‘-1’, ‘0.3’, ‘0.32’, ‘-2.7’]
*/

function extractNumbers(sentence) {
    // regex: match integers and decimals and negative numbers

    // -?  optional negative number
    // \d+: This matches one or more digits (0-9) -- match whole number
    // group match decimals  \. -- decimal point  \d+ one or more digits
    // g global search
    const numberPattern = /-?\d+(\.\d+)?/g;
    return sentence.match(numberPattern) || []; // return matches or empty array if none found
}

// test cases
function runTests() {
    const testCases = [
        {
            input: "Whole Numbers is the set of natural numbers, plus zero, i.e., {0, 1, 2, 3, ...}. Integers are the set of all whole numbers plus all the negatives (or opposites) of the natural numbers, i.e., {…, -2, -1, 0, 1, 2, …}. We next move onto decimal numbers (such as 0.3, 0.32, -2.7).",
            expected: ["0","1","2","3","-2","-1","0","1","2","0.3","0.32","-2.7"]
        },
        {
            input: "There are 5 apples, 3.14 pies, and -7 oranges.",
            expected: ["5", "3.14", "-7"]
        },
        {
            input: "No numbers here!",
            expected: []
        },
        {
            input: "-10 and 20.5 are both numbers.",
            expected: ["-10", "20.5"]
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = extractNumbers(input);
        console.log(`Test ${index + 1}: Input: ${input}`);
        console.log(`Expected: ${JSON.stringify(expected)} | Result: ${JSON.stringify(result)}`);
        console.log(`${JSON.stringify(result) === JSON.stringify(expected) ? "PASSED" : "FAILED"}`);
        console.log();
    });
}

runTests();