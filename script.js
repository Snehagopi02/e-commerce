const products = [
  { id: 1, name: 'T-shirt', price: 15.00 },
  { id: 2, name: 'Jeans', price: 35.00 },
  { id: 3, name: 'Shoes', price: 50.00 },
  { id: 4, name: 'Hat', price: 10.00 }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');

  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartEl = document.getElementById('cart');
  cartEl.style.display = cartEl.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Checkout complete. Thank you for your purchase!');
  cart = [];
  updateCart();
}

window.onload = displayProducts;
