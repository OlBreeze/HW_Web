const h1Style = document.querySelector('h1');
const itemOl = document.querySelector('.itemOl');
const btnAdd = document.querySelector('#addBtn');
const input = document.querySelector('input');

h1Style.setAttribute('style', 'color: cornflowerblue;');

btnAdd.onclick = () => {
    if (input.value.trim() === '')
        return;

    //li
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    itemOl.appendChild(newLi);
    input.value = '';

    //btn delete
    const newBtnDelete = document.createElement('button');
    setStyleButtonDel(newBtnDelete);

    newLi.appendChild(newBtnDelete);
    newBtnDelete.onclick = ()=>
    {
        newLi.removeChild(newBtnDelete);
        itemOl.removeChild(newLi);
    }

}

function setStyleButtonDel(btnDel){
    btnDel.textContent = 'X';
    btnDel.style.color = 'red';
    btnDel.style.border = '2px solid black';
    btnDel.style.margin = '5px';
}