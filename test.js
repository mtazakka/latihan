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
    // number = number.reverse()

    // let result = []
    let result = number.map(element => {
        if (element % 2 == 0) {
            return "genap"
        } else {
            return "ganjil"
        }
    })
    return result.join()
}
console.log(evenOdd(2, 3, 4, 5))