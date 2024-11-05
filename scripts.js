// Sample products
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ];
  
  // Local storage setup
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Render products
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  // Add to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  }
  
  // Search functionality
  function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
  }
  
  // Autocomplete
  document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const suggestions = products
      .filter(p => p.name.toLowerCase().includes(query))
      .map(p => p.name);
    const autocomplete = document.getElementById('autocomplete');
    autocomplete.innerHTML = suggestions.map(s => `<div>${s}</div>`).join('');
  });
  
  // Initial render
  renderProducts();
  