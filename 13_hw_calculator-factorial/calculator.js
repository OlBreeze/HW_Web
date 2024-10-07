///---------------------------- v1 -----------------------------
let textRes1;
let res = 0;

alert(`
                       WELCOME! (первый вариант)`);


let go = confirm(`
                Давайте что-то посчитаем?`);
if (!go)
    textRes1 = `
                Ждем в следующий раз  )`;
else {
    let num1 = prompt('Введите первое число:');
    let operator = prompt('Введите оператор ( + - * / % ):');
    let num2 = prompt('Введите второе число:');

    num1 = Number(num1);
    num2 = Number(num2);

    let reg = '*/+-%';
    let wrongOperator = reg.indexOf(operator); // проверка на введенные операторы

    if (isNaN(num1) || isNaN(num2) || wrongOperator < 0)
    {
        textRes1 = 'Попробуйте еще раз )';
        alert(`
            Введенные данные с ошибкой!`);
    }
    else {
        switch (operator) {
            case '+' :
                res = num1 + num2;
                break;
            case '-' :
                res = num1 - num2;
                break;
            case '*' :
                res = num1 * num2;
                break;
            case '/' :
                res = num1 / num2;
                break;
            case '%' :
                res = num1 % num2;
                break;
            default:
                res = 0;
        }
        textRes1 = num1 +  ' ' + operator + ' ' + num2 + ' = ' + res;
    }
}

///---------------------------- v2 -----------------------------

let textRes2;

let go2 = confirm('Результат: ' + res + `
                Давайте что-то посчитаем? (второй вариант)`);
if (!go2)
    textRes2 = `
                Ждем в следующий раз  )`;
else {
    const expr = prompt('Введите математическое ВЫРАЖЕНИЕ (без знака равно):');

    // -- проверка введенных данных
    let wrongOperator = 1;
    let reg = '*/+-%()1234567890 ';
    for (let i = 0; i < expr.length && wrongOperator > 0; i++) {
        wrongOperator = reg.indexOf(expr[i]);
    }
    // --

    if (wrongOperator < 0|| expr.length < 3)
    {
        textRes2 = 'Попробуйте еще раз )';
        alert(`
            Введенные данные с ошибкой!`);
    }
    else {
        const computeExpression = (expression) => eval(expression); // почитала про стрелочные функции - прикольно, решила оставить
        try { // нашла как делать обработку исключений, иначе пользователь может из правильных символов набрать какую-нибудь фигню, напр 2(1+3) - пропущен знак умножения
            let res2 = computeExpression(expr);
            textRes2 = expr + ' = ' + res2;
        }
          catch (err){
              textRes2 = expr + ' = ' + ' Ошибка в вычислении выражения!';}
    }
}