let x = 5;

console.log(factorial(x));

function factorial(x){
    x = Number(x);

    if (isNaN(x) || x <= 0) {
        return "Wrong number!";
    }

    let res = x;                    // 5
    for (let i = 2; i < x; i++) {
        res *= i;                   // 5*2 -> 10 * 3 = 30 ->30 * 4 = 120
    }
    return res;
}