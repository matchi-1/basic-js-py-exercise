/*
    Replace all words “index” in a string with a corresponding integer. 
    
    Sample Input: 
    It is highly urbanized and as of 2019 was the world's most densely populated city proper.[index] It
    was the first chartered city in the country, designated as such by the Philippine Commission Act
    183 of July 31, 1901. It became autonomous with the passage of Republic Act No. 409, "The
    Revised Charter of the City of Manila," on June 18, 1949.[index] 
    
    Sample Output: 
    It is highly urbanized and as of 2019 was the world's most densely populated city proper.[1] It
    was the first chartered city in the country, designated as such by the Philippine Commission Act
    183 of July 31, 1901. It became autonomous with the passage of Republic Act No. 409, "The
    Revised Charter of the City of Manila," on June 18, 1949.[2]
*/


function replaceIndexWithNumbers(text) {
    let count = 0;
    return text.replace(/\[index\]/g, () => `[${++count}]`);
    // use global regex pattern to find all "[index]" occurrences
    // each occurrence is replaced with a sequential number inside brackets
}


// test cases
function runTests() {
    const testCases = [
        {
            input: `It is highly urbanized and as of 2019 was the world's most densely populated city proper.[index] It was the first chartered city in the country, designated as such by the Philippine Commission Act 183 of July 31, 1901. It became autonomous with the passage of Republic Act No. 409, "The Revised Charter of the City of Manila," on June 18, 1949.[index]`,
            expected: `It is highly urbanized and as of 2019 was the world's most densely populated city proper.[1] It was the first chartered city in the country, designated as such by the Philippine Commission Act 183 of July 31, 1901. It became autonomous with the passage of Republic Act No. 409, "The Revised Charter of the City of Manila," on June 18, 1949.[2]`
        },
        {
            input: `This is a test sentence with [index], another [index], and one more [index].`,
            expected: `This is a test sentence with [1], another [2], and one more [3].`
        },
        {
            input: `No index here!`,
            expected: `No index here!`
        },
        {
            input: `[index] Start with an index, then another [index], and end with [index].`,
            expected: `[1] Start with an index, then another [2], and end with [3].`
        },
        {
            input: `[index][index][index][index][index][index][index][index][index][index]`,
            expected: `[1][2][3][4][5][6][7][8][9][10]`
        },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = replaceIndexWithNumbers(input);
        console.log(`Test ${index + 1}:`);
        console.log(`Input: ${input}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result: ${result}`);
        console.log(`${result === expected ? "PASSED" : "FAILED"}`);
        console.log();
    });
}

runTests();
