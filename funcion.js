function stringRev2(str) {
    let myMessage = str.split(''); // []
    let reversedMyMessage = myMessage.reverse();
    let finalReverse = reversedMyMessage.join('');
    return finalReverse;
}

const stringRev2 = (str) => {
    return str.split("").reverse().join("")
}

const stringRev2 = (str) => str.split("").reverse().join("")