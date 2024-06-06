

function writeCards(array, party) {
    const messages = [];
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${party} gift!`);
        debugger;
    }

    return messages;
}

// const result = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }

}

let result = countDown(10);


console.log(result);