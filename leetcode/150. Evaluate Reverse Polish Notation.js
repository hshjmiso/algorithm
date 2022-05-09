/**
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const n = [];

    for (let i = 0, len = tokens.length; i < len; i++) {
        const token = tokens[i];
        let temp;

        switch (token) {
            case '+':
                temp = +n.pop() + +n.pop();
                break;
            case '-':
                const a = n.pop();
                const b = n.pop();
                temp = b - a;
                break;
            case '*':
                temp = n.pop() * n.pop();
                break;
            case '/':
                const c = n.pop();
                const d = n.pop();
                temp = (d / c) | 0;
                break;
        }
        if (temp === undefined) {
            n.push(token);
        } else {
            n.push(temp);
        }
    }

    return n[0];
};

// Minimum Runtime
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const st = [];
    const t = () => st[st.length - 1];
    tokens.forEach((x) => {
        if (~~x == x) {
            st.push(Number(x));
        } else {
            const b = st.pop();
            const a = st.pop();
            switch (x) {
                case '+':
                    st.push(a + b);
                    break;
                case '*':
                    st.push(a * b);
                    break;
                case '/':
                    st.push((a / b) | 0);

                    break;
                case '-':
                    st.push(a - b);
            }
        }
    });

    return st.pop();
};

// Minimum Memory
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let s of tokens) {
        if (s == '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (s == '-') {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(a - b);
        } else if (s == '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (s == '/') {
            let b = stack.pop();
            let a = stack.pop();

            stack.push(a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b));
        } else {
            stack.push(Number(s));
        }
    }
    return stack.pop();
};
