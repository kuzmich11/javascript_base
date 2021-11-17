'use strict';
let arg1 = "";
let arg2 = "";
let operation = "";
let result = "";

function sum(arg1, arg2) {
    result = arg1 + arg2;
    return (result);
}

function deduct(arg1, arg2) {
    result = arg1 - arg2;
    return (result);
}

function division(arg1, arg2) {
    result = arg1 / arg2;
    return (result);
}

function multiplication(arg1, arg2) {
    result = arg1 * arg2;
    return (result);
}

function mathOperation(arg1, arg2, operation) {
    arg1 = +prompt("Введите первое число");
    arg2 = +prompt("Введите второе число");
    operation = prompt("Введите нужное действие");

    switch (operation) {
        case 'сложение':
            sum(arg1, arg2);
            alert(result);
            break;
        case 'вычитание':
            deduct(arg1, arg2);
            alert(result);
            break;
        case 'деление':
            division(arg1, arg2);
            alert(result);
            break;
        case 'умножение':
            multiplication(arg1, arg2);
            alert(result);
            break;
    }
    return (result);
}

mathOperation()