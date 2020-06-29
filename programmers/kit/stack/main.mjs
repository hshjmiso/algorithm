import Stack from './stack.mjs';

let stack = new Stack();
console.log(stack.isEmpty()); // ture

stack.push(5);
stack.push(8);
console.log(stack.peek()); // 8

stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print(); // 5, 8

function divideBy2(decNumber) {
    let remStack = new Stack();
    let rem = 0;
    let binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(233));  // 11101001
console.log(divideBy2(10));   // 1010
console.log(divideBy2(1000)); // 1111101000

function baseConverter (decNumber, base) {
    let remStack = new Stack();
    let rem = 0;
    let baseString = '';
    let digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(100345, 2));  // 11000011111111001
console.log(baseConverter(100345, 8));  // 303771
console.log(baseConverter(100345, 16)); // 187F9