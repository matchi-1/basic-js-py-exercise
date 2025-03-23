/*
    Create a function that converts a year to its respective Japanese Era
    calendar scheme. The output should be in this format: <Name of the era>
    <Year number> (example: Reiwa 3). For more information, check the
    Japanese Calendar Conversion (https://www.ewc.co.jp/en/information/569/).

    Sample Input: 
    2021 
    2004 
    
    Sample Output: 
    'Reiwa 3'
    'Heisei 16'

    Note: Some years might have two Japanese Era years, show both era years 
    for those (example: 2019 is Reiwa 1/Heisei 31).
*/

function convertToJapaneseEra(year) {
    // era name: start year - end year
    const eras = [
        { name: "Reiwa", startYear: 2019, endYear: Infinity },  // Reiwa (2019 - Present)
        { name: "Heisei", startYear: 1989, endYear: 2019 },     // Heisei (1989 - 2019)
        { name: "Showa", startYear: 1926, endYear: 1989 },      // Showa (1926 - 1989)
        { name: "Taisho", startYear: 1912, endYear: 1926 }      // Taisho (1912 - 1926)
    ];

    let matchingEras = eras
        .filter(era => year >= era.startYear && year <= era.endYear)   // check range (inclusive)
        .map(era => `${era.name} ${year - era.startYear + 1}`);        // subtract input year to era's start year & add 1 to get the era year

    /*  
        - if the year overlaps two eras, return both separated by " / "    
        - else if the year is not within the range of any era (array is empty), return msg that it is before the Taisho era
        - else it will return the single era
    */

    return matchingEras.length > 0 ? matchingEras.join(' / ') : "Year is before the Japanese Taisho era (1912)";
}

// test cases
function runTests() {
    const testCases = [
        { input: 2021, expected: "Reiwa 3" },                  
        { input: 2004, expected: "Heisei 16" },               
        { input: 2019, expected: "Reiwa 1 / Heisei 31" },      
        { input: 1989, expected: "Heisei 1 / Showa 64" },      
        { input: 1988, expected: "Showa 63" },                 
        { input: 1926, expected: "Showa 1 / Taisho 15" },
        { input: 1912, expected: "Taisho 1" },               
        { input: 1900, expected: "Year is before the Japanese Taisho era (1912)" } 
    ];

    testCases.forEach((test, index) => {
        const result = convertToJapaneseEra(test.input);
        console.log(`Test ${index + 1}: Input Year = ${test.input}`);
        console.log(`Expected: ${test.expected}   |   Result: ${result}`);
        console.log(result === test.expected ? "PASSED" : "FAILED");
        console.log();
    });
}

runTests();