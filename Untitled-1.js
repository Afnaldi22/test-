// test 1

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return Math.max(maxCount, count);
}

// test 2

function reverseString(str) {
    if (str.length === 0) {
        return str;
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
}

// test 3

function areBracketsBalanced(expr) {


    let stack = [];


    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {

            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}

// Driver code
let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");


