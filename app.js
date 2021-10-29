const main_market = document.getElementById('main-market');

function createCard(id, name, price, img) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', id);
    const header_card = document.createElement('div');
    header_card.classList.add('header_card');
    const title_card = document.createElement('div');
    title_card.classList.add('title_card');
    const p_title = document.createElement('p');
    p_title.textContent = name;
    p_title.setAttribute('id', 'p-title');
    const img_card = document.createElement('img');
    img_card.setAttribute('src', img);
    img_card.setAttribute('alt', name);
    img_card.setAttribute('id', 'img-card');
    const footer_card = document.createElement('div');
    footer_card.classList.add('footer-card');
    const p_price = document.createElement('p');
    p_price.textContent = price;
    p_price.setAttribute('id', 'p-price');
    const button_card = document.createElement('button');
    button_card.textContent = 'Add to cart';
    button_card.setAttribute('id', 'btn-add');

 
    title_card.appendChild(p_title);
    footer_card.appendChild(p_price);
    footer_card.appendChild(button_card);

    card.appendChild(header_card);
    card.appendChild(title_card);
    card.appendChild(img_card);
    card.appendChild(footer_card);


    main_market.appendChild(card);    
    
}

function renderCards() {
    products.forEach(product => {
        createCard(product.id, product.name, product.price, product.img);
    });
}

renderCards();


