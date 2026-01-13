/**
 * Converts a string to camelCase format.
 * 
 * Splits the input string by spaces, hyphens, and underscores, then converts
 * the result to camelCase where the first word is lowercase and subsequent
 * words have their first letter capitalized.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is a number
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is an empty or whitespace-only string
 * 
 * @example
 * toCamelCase('hi there');        // Returns: 'hiThere'
 * toCamelCase('hi-there');        // Returns: 'hiThere'
 * toCamelCase('hi_there');        // Returns: 'hiThere'
 * toCamelCase('hello-world-test'); // Returns: 'helloWorldTest'
 */

/**
 * Converts a string to dot.case format.
 * 
 * Splits the input string by spaces, hyphens, and underscores, then converts
 * the result to dot.case where all words are lowercase and joined with dots.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is a number
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is an empty or whitespace-only string
 * 
 * @example
 * toDotCase('hi there');        // Returns: 'hi.there'
 * toDotCase('hi-there');        // Returns: 'hi.there'
 * toDotCase('hi_there');        // Returns: 'hi.there'
 * toDotCase('hello-world-test'); // Returns: 'hello.world.test'
 */
function toCamelCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Handle numeric inputs
    if (typeof input === 'number') {
        throw new Error('Input must be a string, not a number');
    }

    // Handle non-string types
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Handle empty strings
    if (input.trim() === '') {
        throw new Error('Input cannot be an empty string');
    }

    // Split by spaces, hyphens, and underscores
    const words = input.split(/[\s\-_]+/);

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            if (word === '') return '';
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return camelCased;
}

// Test cases
console.log(toCamelCase('hi there'));        // hiThere
console.log(toCamelCase('hi-there'));        // hiThere
console.log(toCamelCase('hi_there'));        // hiThere
console.log(toCamelCase('hello-world-test')); // helloWorldTest

try {
    toCamelCase(5);
} catch (e) {
    console.log(e.message); // Input must be a string, not a number
}

try {
    toCamelCase('');
} catch (e) {
    console.log(e.message); // Input cannot be an empty string
}

try {
    toCamelCase(null);
} catch (e) {

    function toDotCase(input) {
        // Handle null or undefined
        if (input === null || input === undefined) {
            throw new Error('Input cannot be null or undefined');
        }

        // Handle numeric inputs
        if (typeof input === 'number') {
            throw new Error('Input must be a string, not a number');
        }

        // Handle non-string types
        if (typeof input !== 'string') {
            throw new Error('Input must be a string');
        }

        // Handle empty strings
        if (input.trim() === '') {
            throw new Error('Input cannot be an empty string');
        }

        // Split by spaces, hyphens, and underscores
        const words = input.split(/[\s\-_]+/);

        // Convert to dot.case
        const dotCased = words
            .map(word => word.toLowerCase())
            .filter(word => word !== '')
            .join('.');

        return dotCased;
    }

    // Test cases
    console.log(toDotCase('hi there'));        // hi.there
    console.log(toDotCase('hi-there'));        // hi.there
    console.log(toDotCase('hi_there'));        // hi.there
    console.log(toDotCase('hello-world-test')); // hello.world.test
    console.log(e.message); // Input cannot be null or undefined
}
