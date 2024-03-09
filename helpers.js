/*
    Get a random number betwen a range [a, b]

    // Math.random() - gens # between 0 (inclusive) and 1
    // * 52 = scales the range to between 0 and 51.99999
    // Math.floor of course rounds it down to 51 then + 1
    // Thank you discrete math lol
*/
export function getRandomNumber(range) {
    return Math.floor((Math.random() * range[1]) + range[0]);
}