let group = {
    title: 'Java 20-26',
    students:['Tanya', 'Alex', 'Masha', 'Roma'],
    showList: function (){
        const show = function (name){
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
console.log('*********************************');
let newGroup = group;
group = null;
newGroup.showList();

/* newGroup и group указывают на один и тот же объект в памяти
group = null; обнуляет ссылку group, и теперь group не указывает на объект.
но newGroup все еще содержит ссылку на тот же объект.*/

// В строке this.students.forEach(show);
// show - функция обратного вызова, которая будет выполнена для каждого элемента массива students.
// аргумент name - текущий элемент массива на каждой итерации.