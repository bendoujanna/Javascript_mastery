// callbacks

function modifyArray(arr, callback) {
    let result = []
    arr.forEach(element => {
        let tranformed = callback(element);
        result.push(tranformed);
        // return result;
        
    });
     return result;

}

let numbers = [1, 2,3,4,5];
const doubled = modifyArray(numbers, (num) => num * 2);
console.log("Doubled:", doubled);


const labels = modifyArray(numbers, (num) => `ID_${num}`);
console.log("Labels:", labels);


function processWords(list, action) {
    let output = [];
    list.forEach(item => {
        output.push(action(item));
    });
    return output;
}

const vocabulary = ["javascript", "callback", "scope", "hoisting"];

const wordLengths = processWords(vocabulary, (word) => {
    return word.length;
});

const hasLetterE = processWords(vocabulary, (word) => {
    return word.includes("e");
});

const htmlTags = processWords(vocabulary, (word) => {
    return `<li>${word}</li>`;
});

console.log(wordLengths);
console.log(hasLetterE);
console.log(htmlTags);


function filterScores(scores, test) {
    let passed = [];
    scores.forEach(num => {
        if (test(num)) {
            passed.push(num);
        }
    });
    return passed;
}

const examResults = [45, 88, 12, 93, 60, 22, 101, 7.5];

const passingScores = filterScores(examResults, (score) => {
    return score > 50;
});

const evenScores = filterScores(examResults, (score) => {
    return score % 2 === 0;
});

const safeScores = filterScores(examResults, (score) => {
    return Number.isSafeInteger(score);
});

console.log(passingScores);
console.log(evenScores);
console.log(safeScores);