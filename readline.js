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