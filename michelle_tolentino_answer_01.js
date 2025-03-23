/*
    Determine if the sentence is a pangram. A pangram is a sentence using
    every letter of a given alphabet at least once. Your function must accept
    user input, and it must be case-insensitive. 
    
    Sample Input: 
    ‘Sphinx of black quartz, judge my vow.’ 
    ‘The five boxing wizard jump quickly.’ 
    
    Sample Output: 
    ‘It is a pangram.’  
    ‘It is NOT a pangram.’ 
*/

function isPangram(sentence) {
    let alphabet = new Set();
    // check if the character is a letter (case insensitive)
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].match(/[a-z]/i)) { 
            alphabet.add(sentence[i].toLowerCase()); // convert to lowercase and add to set
        }

    }

    // if the Set contains all 26 letters, it's a pangram
    return alphabet.size === 26 ? "It is a pangram." : "It is NOT a pangram.";
}

// test cases
function runTests() {
    const testCases = [
        { input: "The quick brown fox jumps over the lazy dog.", expected: "It is a pangram." },
        { input: "Sphinx of black quartz, judge my vow.", expected: "It is a pangram." },
        { input: "Hello, World!", expected: "It is NOT a pangram." },
        { input: "Pack my box with five dozen liquor jugs.", expected: "It is a pangram." },
        { input: "abcdefghijklmnopqrstuvwxyz", expected: "It is a pangram." },
        { input: "Missing letters abcdefghijklmnopqrstuvwxy", expected: "It is NOT a pangram." }
    ];

    testCases.forEach((test, index) => {
        const result = isPangram(test.input);
        console.log(`Test ${index + 1}: ${result} | Expected: ${test.expected}`);
        console.log(result === test.expected ? "Passed" : "Failed");
    });
}

runTests();