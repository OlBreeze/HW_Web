let group =
    {
      title: 'Java20-26',
      students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
      showList: function ()
      {
          const show = function (name)
          {
              console.log(`${this.title}: ${name}`);
          }
          this.students.forEach(show);
      }
    };
group.showList();
console.log('**********');
let newGroup = group;
group = null;
newGroup.showList();

console.log('1. Arrow function');
let group1 =
    {
        title: 'Java20-26',
        students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
        showList: function ()
        {
            const show = name => console.log(`${this.title}: ${name}`);
            this.students.forEach(show);
        }
    };
group1.showList();
console.log('**********');
let newGroup1 = group1;
group1 = null;
newGroup1.showList();

console.log('2. bind()');
let group2 =
    {
        title: 'Java20-26',
        students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
        showList: function ()
        {
            const show = function (name)
            {
                console.log(`${this.title}: ${name}`);
            }
            this.students.forEach(show.bind(this));
        }
    };
group2.showList();
console.log('**********');
let newGroup2 = group2;
group2 = null;
newGroup2.showList();

console.log('2.1. bind()');
let group3 =
    {
        title: 'Java20-26',
        students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
        showList: function ()
        {
            const show = function (name)
            {
                console.log(`${this.title}: ${name}`)
            }.bind(this);
            this.students.forEach(show);
        }
    };
group3.showList();
console.log('**********');
let newGroup3 = group3;
group3 = null;
newGroup3.showList();

console.log('3. local variable');
let group4 =
    {
        title: 'Java20-26',
        students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
        showList: function ()
        {
            let title = this.title;
            const show = function (name)
            {
                console.log(`${title}: ${name}`)
            }
            this.students.forEach(show);
        }
    };
group4.showList();
console.log('**********');
let newGroup4 = group4;
group4 = null;
newGroup4.showList();

console.log('4. ForEach with optional parameter');
let group5 =
    {
        title: 'Java20-26',
        students: ['Tanya', 'Alexandr', 'Maria', 'Roman'],
        showList: function ()
        {
            const show = function (name)
            {
                console.log(`${this.title}: ${name}`);
            }
            this.students.forEach(show, this);
        }
    };
group5.showList();
console.log('**********');
let newGroup5 = group5;
group5 = null;
newGroup5.showList();