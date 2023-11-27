let $lia = $('#lia');

let $alan = $('#alan');

const alanPass = "crazydude";

const liaPass = "kittycat";

let greetingMsg = document.querySelector('#greeting');

let $childName = $('.nameButton');

let operatorSelector = document.querySelector('#operator');

let displayProblem = document.querySelector('#displayProblem');

let answer = document.querySelector('#answer');

let answersContainer = document.querySelector('#answersContainer');

let resultMessage = document.getElementById('displayResult');

// let nextProblem = document.querySelector('#nextProblem');

let result;
let numberOne;
let numberTwo;
let answerCounter = 0;
let correctCounter = 0;

let num1 = function () {
    return Math.floor(Math.random() * 10);
}

let num2 = function () {
    return Math.floor(Math.random() * 10);
}

function addition() {
    numberOne = num1();
    numberTwo = num2();
    displayProblem.textContent = numberOne + ' + ' + numberTwo;
    result = numberOne + numberTwo;
    console.log(result);
    answerArrayBuilder();
}

function subtraction() {
    let numberOne = num1();
    let numberTwo = num2();
    if (numberOne > numberTwo) {
        displayProblem.textContent = numberOne + ' - ' + numberTwo;
        result = numberOne - numberTwo;
    }
    else {
        displayProblem.textContent = numberTwo + ' - ' + numberOne;
        result = numberTwo - numberOne;
    }
    answerArrayBuilder();
}

function division() {
    let numberOne = num1();
    let numberTwo = num2();

    while (numberOne % numberTwo != 0) {
        numberOne = num1();
        numberTwo = num2();
    }
    displayProblem.textContent = numberOne + ' : ' + numberTwo;
    result = numberOne / numberTwo;
    answerArrayBuilder();
}

function multiplication(baseNum) {


    if ($(answer).textContent != '') {
        $(answer).empty();
    }
    $(resultMessage).empty();
    // let baseNumRegister;
    let numberOne = baseNum;
    let numberTwo = num2();
    while (numberTwo == 0) {
        numberTwo = numberTwo + Math.floor(Math.random() * 10);
    }
    displayProblem.textContent = numberOne + ' * ' + numberTwo;

    displayProblem.textContent = numberOne + ' * ' + numberTwo;

    result = numberOne * numberTwo;

    let userInput = '<input type="text" id="user-input-number">';
    let checkButton = '<button id="check-answer">Check</button>';
    let checkScore = '<button id="check-score">Check Score</button>';
    let warningMessage = '<p id="check-warning" class="display-result-incorrect">Please enter your answer</p>';

    $(answer).append(userInput, checkButton);

    $('#check-answer').on('click', function () {
        $('#check-warning').remove();

        answerCounter += 1;
        let userInputValue = $('#user-input-number').val();

        if (userInputValue != '' && isNaN(userInputValue) == false) {
            if (userInputValue == result) {
                correctCounter += 1;
                $(resultMessage).css('color', '#6db01a')
                $(resultMessage).text('That is correct! ');
            }
            else {
                $(resultMessage).css('color', '#c42712')
                $(resultMessage).text('Sorry, ' + userInputValue + ' is not correct...');
            }
            $(answer).empty();
            $(displayProblem).empty();

        }
        else {

            $('#answer').append(warningMessage);
        }

        if (answerCounter == 10) {
            $(displayProblem).empty();
            $(answer).empty();
            $(resultMessage).empty()
            $(resultMessage).append(checkScore);

            $('#check-score').on('click', function () {
                // baseNumRegister = 0;
                $(checkScore).remove();
                $(answer).empty();
                $(resultMessage).text('Your score is ' + Math.floor(correctCounter / answerCounter * 100) + '%');
                answerCounter = 0;
                correctCounter = 0;
            });
        }
    });
}




// function calculateScore(answerCounter, correctCounter) {
//     console.log(correctCounter + ' ' + answerCounter);
//     return correctCounter / answerCounter * 100;

// }

// $('#check-score').on('click', calculateScore(4, correctCounter));

// function answerArrayBuilder() {
//     answers.textContent = null;
//     answerArray = Array();
//     answerArray.push(result);
//     for (let i = 7; i >= answerArray.length; i--) {
//         numHolder = Math.floor(Math.random() * 10);
//         while (answerArray.includes(numHolder)) {
//             numHolder = Math.floor(Math.random() * 10);
//         }
//         if (numHolder <= 4) {
//             answerArray.unshift(numHolder);
//         }
//         else if (numHolder >= 5) {
//             answerArray.push(numHolder);
//         }
//     }
//     let i = 0;
//     while (i < answerArray.length) {
//         newAnswerText = document.createTextNode(answerArray[i]);
//         answers.appendChild(newAnswer);
//         i++;
//     }
// }
// function checkAnswer(e) {
//     target = e.target;
//     $(answers).data('clicked', 'yes');
//     if (target.matches("button")) {
//         if (result == target.textContent) {
//             target.style.backgroundColor = 'green';
//             target.style.color = 'white';
//         }
//         else {
//             target.style.backgroundColor = 'red';
//             target.style.color = 'white';
//         }
//     }

// }

function selectOperator(e) {
    let target = e.target;
    switch (target.textContent) {
        case '2x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '3x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '4x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '5x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '6x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '7x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '8x':
            multiplication(e.target.getAttribute('id'));
            break;
        case '9x':
            multiplication(e.target.getAttribute('id'));
            break;
    }
}

let childNameDiv = document.querySelector('#child-name');


// function displayName(e) {
//     target = e.currentTarget;
//     console.log(target.textContent);
//     greetingMsg.textContent = '';
//     greetingMsg.innerHTML = 'Hello ' + target.textContent + '!';
// }

// childName.addEventListener('click', displayName, false);

operatorSelector.addEventListener('click', selectOperator, false);

// answers.addEventListener('click', checkAnswer, true);


// $childName.on('click', displayName);

childNameDiv.addEventListener('click', function (e) {
    target = e.target;
    console.log(target.textContent);
    greetingMsg.textContent = '';
    greetingMsg.innerHTML = 'Hello ' + target.textContent + '!';
    $('#child-name').html('');
    $('#greeting-message').text('');

}, false);

// nextProblem.addEventListener('click', example.selectOperator, false);


