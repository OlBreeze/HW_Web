let group = {
    title: 'Java 20-26',
    students: ['Tanya', 'Alex', 'Masha', 'Roma'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        };

        this.students.forEach(show, this);
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    }
};

group.showList();
console.log('*********************************');

let newGroup = group;
group = null;
newGroup.showList();

///  arr.forEach(function callback(currentValue, index, array) {
//       //your iterator
//    }[, thisArg]);