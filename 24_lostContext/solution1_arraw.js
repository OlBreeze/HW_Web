let group = {
    title: 'Java 20-26',
    students:['Tanya', 'Alex', 'Masha', 'Roma'],
    showList: function (){
        const show =  (name)=>{
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

// showList остается обычной функцией, использование стрел функции внутри forEach - мы сохраняем контекст this.