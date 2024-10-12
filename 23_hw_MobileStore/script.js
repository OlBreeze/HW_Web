const products = document.querySelector('.products');
const cart = document.querySelector('.cart');
const navHome = document.getElementById('navHome');
const navCart = document.getElementById('navCart');
const anchorNavCart = document.querySelector('#navCart a');
const tableElement = document.querySelector('table');
const totalPrice = document.querySelector('.totalPrice');

const emptyTable = tableElement.innerHTML;
const arrayCart = [];

/// ---------------------- Storage --------------
function Mobile(id, title, src, price) {
    this.id = id;
    this.title = title;
    this.src = src;
    this.price = price;
}

const arrayProducts = [
    new Mobile(10, 'Ericsson T20', 'images/ericsson-t20s-1000x1000.jpg', 70),
    new Mobile(20, 'Ericsson T65', 'images/ericsson-t65-1000x1000.jpg', 300),
    new Mobile(30, 'Nokia 5210', 'images/nokia-5210-1000x1000.jpg', 100),
    new Mobile(40, 'Nokia 6300', 'images/nokia-6300-1000x1000.jpg', 110),
    new Mobile(50, 'Nokia 6310i', 'images/nokia-6310i-1000x1000.jpg', 110),
    new Mobile(60, 'Nokia E5', 'images/nokia-e5-1000x1000.jpg', 100),
    new Mobile(70, 'Nokia E63', 'images/nokia-e63-1000x1000.jpg', 300),
    new Mobile(80, 'Siemens A50', 'images/siemens-a50-1000x1000.jpg', 80)
];

//--------------------------- Store ----------------------------------

renderProducts();

function renderProducts(){
    cart.style.display = 'none';

    products.innerHTML = `${arrayProducts.map(function (p)
    {
        return `<div class="card">
                    <table>
                        <tr><td><h2>${p.title}</h2></td></tr>
                        <tr><td><img src=${p.src} alt=""/></td></tr>
                        <tr><td><h4>$${p.price}</h4></td></tr>
                        <tr><td><button class="btnAdd" type="button" data-id = ${p.id}>Add to cart</button></td></tr>
                   </table>
                </div>`
    }).join('')}`;
}

function renderCart() {
    const objCart = {}; // { id : {title, price, count, totalPrice}}
    let sum = 0;
    // собираем отдельный объект с уникальными ИД и суммируем количество, цену
    arrayCart.forEach(function (product) {
            const {id, title, price} = product;

            if (objCart[id]) {
                objCart[id].count++;
                objCart[id].totalPrice += price;
            } else {
                objCart[id] = {
                    title: title,
                    price: price,
                    count: 1,
                    totalPrice: price,
                }
            }
            sum += price;
        }
    );

    drawCartTable(objCart);
    totalPrice.innerText = `Total: $${sum}`;
}

function drawCartTable(objCart) {
    // get sort cart
    const cartSort = Object.values(objCart).sort(function (a,b){return b.totalPrice - a.totalPrice });

    tableElement.innerHTML = emptyTable +
        `${cartSort.map(function (product){
        return `<tr>
                <td class="title">${product.title}</td>
                <td class="price">${product.price}</td>
                <td class="count">${product.count}</td>
                <td class="total">${product.totalPrice}</td>
            </tr>`
    }).join('')}`;
}


//---------- events -----------
navHome.onclick =  ()=> {
    navHome.classList.add('active');
    navCart.classList.remove('active');
    cart.style.display = 'none';
    products.style.display = 'flex';
}

navCart.onclick =  ()=> {
    navHome.classList.remove('active');
    navCart.classList.add('active');
    products.style.display = 'none';
    cart.style.display = 'block';
    renderCart();
}

products.onclick =  (e)=>{
    if (e.target.hasAttribute('data-id')){
        const findItem = arrayProducts.find( (element)=>{
            return element.id === +e.target.dataset.id;
        }); // нашли в массиве товаров наш, который нажали Добавить

        if (findItem) {
            arrayCart.push(findItem);
            anchorNavCart.innerText = arrayCart.length === 0 ? 'Cart': 'Cart - ' + arrayCart.length;
        }
    }
}

