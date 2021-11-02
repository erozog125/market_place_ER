const table_products = document.querySelector('#table-products');
const cart = [];

// ------------------------------------Forma 1 -----------------------------------------

// function add_to_cart() {
//   products.forEach(product =>{
//     console.log(product);   

//     const tr_product = document.createElement('tr');

//     const td_product = document.createElement('td');
//     const td_price = document.createElement('td');

//     const td_quantity = document.createElement('td');
//     const btn_subtract = document.createElement('button');
//     const btn_add = document.createElement('button');
//     const p_quantity = document.createElement('p');

//     const td_subtotal = document.createElement('td');
//     const td_clear = document.createElement('td');
//     const btn_clear = document.createElement('button');

//     // Colocar texto al elemento
//     td_product.innerHTML = product.name;
//     td_price.innerHTML = product.price;
//     btn_subtract.textContent = '-';
//     btn_add.textContent = '+';    
//     p_quantity.textContent = 0;
//     p_quantity.style.margin = '0 0.2rem';
//     td_subtotal.innerHTML = product.price * (parseInt(p_quantity.textContent));
//     btn_clear.innerHTML = `<button class="clear-cart"><img src="../Images/Trash.png" alt="Clear" class="img-trash"></button>`;

//     // Colocar clases al elemento
//     td_quantity.classList.add('td-quantity');
//     btn_subtract.classList.add('substract-cart');
//     btn_add.classList.add('add-cart');
    
//     td_quantity.appendChild(btn_subtract);
//     td_quantity.appendChild(p_quantity);
//     td_quantity.appendChild(btn_add);
//     td_clear.appendChild(btn_clear);

//     tr_product.appendChild(td_product);
//     tr_product.appendChild(td_price);
//     tr_product.appendChild(td_quantity);
//     tr_product.appendChild(td_subtotal);
//     tr_product.appendChild(td_clear);
//     table.appendChild(tr_product);    
//   }); 
// }    

// ------------------------------------Forma 2 -----------------------------------------

function addCart() {
  products.forEach(product => {
    table_products.innerHTML = table_products.innerHTML +
    ` <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>        
        <td class="td-quantity">
          <button class="substract-cart">-</button>
            <p id="p_quantity">${0}</p>
          <button class="add-cart">+</button>
        </td>
        <td>0</td>
        <td><button class="clear-cart"><img src="../Images/Trash.png" alt="Clear" class="img-trash"></button></td>
      </tr>
    `});
}

function addToCart(event) {  
  const current_id = event.target.id;
  console.log(current_id);
  products.forEach(element => {    
    if (current_id == element.id) {      
      console.log(element.id);
      cart.push(element);
    }    
  });  
}

// function renderCart() {
//   cart.forEach(card=>{
//     element
//   });
// }
