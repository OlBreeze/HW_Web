let group = {
    title: 'Java 20-26',
    students: ['Tanya', 'Alex', 'Masha', 'Roma'],
    showList: function () {
        const self = this;  // Сохранение значения this

        const show = function (name) {
            console.log(`${self.title}: ${name}`);
        };

        this.students.forEach(show);
    }
};

group.showList();
console.log('*********************************');

let newGroup = group;
group = null;
newGroup.showList();