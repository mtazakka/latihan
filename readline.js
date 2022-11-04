const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'input> '
});

const evenOdd = (input) => {
    let data = input.split(",")
    let result = []

    for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i]) % 2 == 0) {
            result.push("genap")
        } else {
            result.push("ganjil")
        }
    }
    return result.join()
}



const arrangeWord = function (word) {
    let newWord;
    newWord = word.substring(1) + word[0]

    return newWord;
}
console.log(arrangeWord("ABCD"))


const arrangeLetter = (word) => {
    let newWord;
    let result = "";
    newWord = word.split(" ")
    let j = newWord.length;

    for (let i = 0; i <= newWord.length - 1; i++) {
        let initialResult = newWord[i].substr(0, j)
        j--
        result += initialResult
    }
    return result
}
console.log(arrangeLetter("HALO INDONESIA"))

const evenOdd = (input1, input2, input3, input4) => {
    let number = [input1, input2, input3, input4];
    number = number.reverse()

    let result = []
    for (let i = 0; i < number.length; i++) {
        if (i % 2 == 0) {
            result.push("genap")
        } else {
            result.push("ganjil")
        }
    }
    result = result.reverse();
    return result.join()
}
console.log(evenOdd(2, 3, 4, 5))

rl.prompt();
rl.on('line', (line) => {
    switch (line.trim()) {
        case line:
            console.log(`output: ${evenOdd(line)}`)
    }
    rl.prompt();

}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});

text.split()
