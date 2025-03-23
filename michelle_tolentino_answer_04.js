/*
    Create a function that extracts only the last date in a string. The format 
    should be <Month> <Day>, <Year> (example: January 1, 2020). 
    
    Sample Input: 
    The first recorded visit by Europeans is Ferdinand Magellan's expedition who landed in Homonhon
    Island, now part of Guiuan, Eastern Samar on March 17, 1521. They lost a battle against the army
    of Lapulapu, chief of Mactan, where Magellan was killed. Spanish colonialism began with the arrival
    of Miguel López de Legazpi's expedition on February 13, 1565, from Mexico. 
    
    Sample Output: 
    'February 13, 1565'
*/

function extractLastDate(text) {
    // regex match: <Month> <Day>, <Year>   |   also match full and abbreviated month names
    const dateRegex = /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s*\d{1,2},\s*\d{4}\b/gi;
    
    // find matches
    const matches = text.match(dateRegex);
    
    // return last found date or an empty string if no match exists   |    normalize spaces before returning
    return matches ? matches[matches.length - 1].replace(/\s+/g, " ") : "";
}


// test cases
function runTests() {
    const testCases = [
        {
            input: "The event happened on Jan 5, 2000 and another on December 25, 2022.",
            expected: "December 25, 2022",
        },
        {
            input: "My birthday is on Feb 14, 1995. We also met on Mar 10, 2005.",
            expected: "Mar 10, 2005",
        },
        {
            input: "The treaty was signed on July 4, 1776.",
            expected: "July 4, 1776",
        },
        {
            input: "The company was founded on Nov 11, 1988 and expanded on October 1, 2000.",
            expected: "October 1, 2000",
        },
        {
            input: "Here is a date with odd spaces January      25, 1999 and another on June   1,      1556.",
            expected: "June 1, 1556",
        },
        {
            input: "Here is a date with odd spaces & newline characters January     \n 25, 1999 and another on June   1,   \n   1556.",
            expected: "June 1, 1556",
        },
        {
            input: "I got this item on Mar 20, 2021, and another on SomeMonthName 15, 2022.",
            expected: "Mar 20, 2021",
        },
        {
            input: "No dates.",
            expected: "",
        }
    ];
    
    testCases.forEach(({ input, expected }, index) => {
        const result = extractLastDate(input);
        console.log(`Test ${index + 1}: Input: ${input}`);
        console.log(`Expected: ${expected} | Result: ${result}`);
        console.log(`${result === expected ? "PASSED" : "FAILED"}`);
        console.log();
    });
}

runTests();