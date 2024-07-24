// Code your solutions in this file
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);


function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);
