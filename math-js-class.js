const lia = 'Lia';

const alan = 'Alan';

let greetingMsg = document.querySelector('#greeting');

let childName = document.querySelector('#childName');

let operatorSelector = document.querySelector('#operator');

let displayProblem = document.querySelector('#displayProblem');

let answers = document.querySelector('#answers');

let answersContainer = document.querySelector('#answersContainer');

// let nextProblem = document.querySelector('#nextProblem');

class randomProblems {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = null;
    }
    randomNumbers() {
        this.num1 = Math.floor(Math.random() * 10);
        this.num2 = Math.floor(Math.random() * 10);
    }
    addition() {
        this.randomNumbers();
        displayProblem.textContent = this.num1 + ' + ' + this.num2;
        this.result = this.num1 + this.num2;
        this.answerArrayBuilder();
    }
    subtraction() {
        this.randomNumbers();
        if (this.num1 > this.num2) {
            displayProblem.textContent = this.num1 + ' - ' + this.num2;
            this.result = this.num1 - this.num2;
        }
        else {
            displayProblem.textContent = this.num2 + ' - ' + this.num1;
            this.result = this.num2 - this.num1;
        }
        this.answerArrayBuilder();
    }
    division() {
        this.num1 = Math.floor(Math.random() * 30);
        this.num2 = Math.floor(Math.random() * 10);
        if (this.num1 != 0 && this.num2 != 1 && this.num1 % this.num2 == 0) {
            displayProblem.textContent = this.num1 + ' : ' + this.num2;
            this.result = this.num1 / this.num2;
        }
        else {
            this.division();
        }
        this.answerArrayBuilder();
    }
    multiplication() {
        this.randomNumbers();
        displayProblem.textContent = this.num1 + ' * ' + this.num2;
        this.result = this.num1 * this.num2;
        this.answerArrayBuilder();
    }
    answerArrayBuilder() {
        answers.textContent = null;
        this.answerArray = Array();
        this.answerArray.push(this.result);
        for (let i = 7; i >= this.answerArray.length; i--) {
            this.numHolder = Math.floor(Math.random() * 10);
            while (this.answerArray.includes(this.numHolder)) {
                this.numHolder = Math.floor(Math.random() * 10);
            }
            if (this.numHolder <= 4) {
                this.answerArray.unshift(this.numHolder);
            }
            else if (this.numHolder >= 5) {
                this.answerArray.push(this.numHolder);
            }
        }
        let i = 0;
        while (i < this.answerArray.length) {
            this.newAnswer = document.createElement('button');
            this.newAnswer.className = 'answerItem'
            this.newAnswerText = document.createTextNode(this.answerArray[i]);
            this.newAnswer.appendChild(this.newAnswerText);
            answers.appendChild(this.newAnswer);
            i++;
        }
    }
    checkAnswer(e) {
        this.target = e.target;
        if (this.result == this.target.textContent) {
            this.target.style.backgroundColor = 'green';
            this.target.style.color = 'white';
        }
        else {
            this.target.style.backgroundColor = 'red';
            this.target.style.color = 'white';
        }
    }
    selectOperator(e) {
        this.target = e.target;
        switch (this.target.textContent) {
            case '+':
                this.addition();
                break;
            case '-':
                this.subtraction();
                break;
            case ':':
                this.division();
                break;
            case '*':
                this.multiplication(e);
                break;
        }
        return this.result;
    }
}


let example = new randomProblems();

function displayName(e) {
    target = e.target;
    switch (target.textContent) {
        case alan:
        case lia:
            greetingMsg.textContent = 'Hi ' + target.textContent.toUpperCase();
            break;
        default:
            alert('Invalid name');
            break;
    }
}


function generateRanNum() {
    return Math.random();
}

function createRanProblem() {
    let num1 = generateRanNum();
    let num2 = generateRanNum();
    return num1 + ' + ' + num2;
}

console.log(createRanProblem());



childName.addEventListener('click', displayName, false);

operatorSelector.addEventListener('click', (e) => { example.selectOperator(e); }, false);

answers.addEventListener('click', (e) => { example.checkAnswer(e); }, false);

// nextProblem.addEventListener('click', example.selectOperator, false);


// function multiply(arr, n) {
//     if (n <= 0) {
//         return 1;
//     } else {
//         return multiply(arr, n - 1) * arr[n - 1];
//     }
// }

// console.log(multiply([2, 3, 4, 5, 6], 1));
