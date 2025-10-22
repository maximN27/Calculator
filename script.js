function calculator() {
    let expression = {
        operand1 : null,
        operand2 : null,
        operator : null
    };
    let text = document.querySelector(".text");
    let buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "1":
                text.value += "1";
                break;
            case "2":
                text.value += "2";
                break;
            case "3":
                text.value += "3";
                break;
            case "4":
                text.value += "4";
                break;
            case "5":
                text.value += "5";
                break;
            case "6":
                text.value += "6";
                break;
            case "7":
                text.value += "7";
                break;
            case "8":
                text.value += "8";
                break;
            case "9":
                text.value += "9";
                break;
            case "0":
                text.value += "0";
                break;
            case "add":
                text.value = operatorPressed("add", text.value, expression);
                break;
            case "sub":
                text.value = operatorPressed("sub", text.value, expression);
                break;
            case "mul":
                text.value = operatorPressed("mul", text.value, expression);
                break;
            case "divide":
                text.value = operatorPressed("divide", text.value, expression);
                break;
            case "AllClear":
                expression.operand1 = null;
                expression.operand2 = null;
                expression.operator = null;
                text.value = "";
                break;
            case "Backspace":
                let str = text.value
                text.value = str.slice(0, str.length - 1)
                break;
            case "equals":
                text.value = operatorPressed("equals", text.value, expression);
                break;
            case ".":
                text.value = text.value + "."
                break;
            
        }
    })
}

function operatorPressed(operator, value, exp) {
    if (operator === "equals") {
        if (checkExpression(exp))
            return evaluateExpression(exp);
        else if (exp.operand1 && !exp.operand2) {
            exp.operand2 = value;
            return evaluateExpression(exp);
        }
        else return value;

    }

    if (!exp.operand1 && !exp.operand2) {
        exp.operand1 = value;
        exp.operator = operator;
        return ``;
    }
    else if (exp.operand1 && !exp.operator &&!exp.operand2) {
        exp.operator = operator;
        return "";
    }
    else {
        exp.operand2 = value;
        return evaluateExpression(exp);
    }
    return value;
}

// Check if the expression is complete for evaluation
function checkExpression(exp) {
    if (exp.operand1 && exp.operand2 && exp.operator) return true;
    else return false;
}

// Evaluate the expression
function evaluateExpression(exp) {
    let result;
    switch (exp. operator) {
        case "add":
            result = parseFloat(exp.operand1) + parseFloat(exp.operand2);
            break;
        case "sub":
            result = parseFloat(exp.operand1) - parseFloat(exp.operand2);
            break;
        case "mul":
            result = parseFloat(exp.operand1) * parseFloat(exp.operand2);
            break;
        case "divide":
            result = parseFloat(exp.operand1) / parseFloat(exp.operand2);
            break;
    }
    exp.operand1 = result;
    exp.operand2 = null;
    exp.operator = null;
    return result;
}

calculator();