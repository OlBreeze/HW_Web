let group = {
    title: 'Java 20-26',
    students: ['Tanya', 'Alex', 'Masha', 'Roma'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);}.bind(this);

        this.students.forEach(show);
    }
};

group.showList();
console.log('*********************************');

let newGroup = group;
group = null;
newGroup.showList();