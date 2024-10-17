// в какой момент может потеряться контекст и как этого избежать
// когда есть this
class User{
    constructor(nickName) {
        this.nickName = nickName;
    }

    infoFunc = function (prefix, suffix){
        ///console.log(this)
        console.log(prefix + this.nickName + suffix);
    }
}

const user = new User('Masha');
user.infoFunc('hello ', '!');

/*let func = user.infoFunc;
func('Hello ', '!'); // потеряли контекст*/

///// решение func bind
//let func = user.infoFunc.bind(user); // подсунь туда объект там где он потерян
let func = user.infoFunc.bind(new User('Pasha')); // работает, несмотря на то что у нас юзер - маша

func('Hello ', '!');
console.log('-----------------------------')

///---2
function printInfo(infoFunc){
    infoFunc();
}

//printInfo(user.infoFunc);
printInfo(user.infoFunc.bind(user));

//apply - массив параметров
//call - эти две сразу вызывают функции

user.infoFunc.call(new User('Pasha'), 'Hello ', '!');
user.infoFunc.apply(new User('Tasha'), ['Hello ', '!']);


/*
*Вопрос о потере контекста в JavaScript может касаться проблем, связанных с потерей значения this при передаче функции в другой контекст
* или при использовании внутри колбэков. Вот несколько способов решения этой проблемы:

1. Использование стрелочных функций:
Стрелочные функции в JavaScript не создают своего собственного контекста this и наследуют его от родительской области видимости.
Их можно использовать для предотвращения потери контекста.

someObject.method = function() {
    setTimeout(() => {
        // "this" сохраняет значение из родительской области видимости
        console.log(this.property);
    }, 1000);
};
2. Использование bind:
Метод bind позволяет явно привязать значение this к функции.

someObject.method = function() {
    setTimeout(function() {
        console.log(this.property);
    }.bind(this), 1000);
};

3. Сохранение значения this в переменной:
Можно сохранить значение this в переменной и использовать её внутри функций.

someObject.method = function() {
    var self = this;
    setTimeout(function() {
        console.log(self.property);
    }, 1000);
};

//------------------
4. Использование свойства function при вызове метода:
Вы можете вызвать метод, используя свойство function, чтобы получить доступ к оригинальной функции и установить контекст.

someObject.method = function() {
    setTimeout(this.method.bind(this), 1000);
};
*/
