/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
const vowels = ['a', 'e', 'i', 'o', 'u'];

let str = 'javascriptloops';
let strArr = Array.from(s);

strArr.forEach((char, index) => {
    if (vowels.indexOf(char) >= 0) {
            console.log(char);
            delete strArr[index];
    }
});

strArr.forEach(char => console.log(char));
}


