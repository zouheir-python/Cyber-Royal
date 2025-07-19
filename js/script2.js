const addToCartButtons = document.querySelectorAll('.addtocart');
const cartCountSpan = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-container');

let cartItems = []; // store product IDs

addToCartButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent link navigation

    const productElement = this.closest('.product');
    const productId = productElement.getAttribute('data-id');

    // Get product name: from .product-name or .relatedname
    const nameElement = productElement.querySelector('.product-name') || productElement.querySelector('.relatedname');
    const productName = nameElement ? nameElement.innerText.trim() : 'Unknown Product';

    // Get product price from .price2 or .price55
    const priceElement = productElement.querySelector('.price2') || productElement.querySelector('.price55');
    const productPrice = priceElement ? priceElement.textContent.trim() : '0 MAD';

    // Get first image in product
    const productImg = productElement.querySelector('img');
    const productImgSrc = productImg ? productImg.src : '';

    // Check if product already in cart using ID
    if (cartItems.includes(productId)) {
      alert('This product is already in the cart!');
      return;
    }

    // Add to cart
    cartItems.push(productId);

    // Update cart count
    cartCountSpan.textContent = cartItems.length;

    // Create and add cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', productId);
    cartItem.style.display = "flex";
    cartItem.style.alignItems = "center";
    cartItem.style.justifyContent = "space-between";
    cartItem.style.gap = "10px";
    cartItem.style.width = "420px";
    cartItem.style.borderBottom = "1px solid black";
    cartItem.style.padding = "10px";

    cartItem.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <a style="padding:0;" href="../pricing_plan.html"><img src="${productImgSrc}" width="100px" alt="" style="margin-right:20px;"></a>
        <div>
          <div style="font-weight: bold;">${productName}</div>
          <div style="color:rgb(0, 0, 0); margin-top:10px;font-weight:bold;">${productPrice}</div>
        </div>
      </div>
      <button class="remove-btn" style="margin-right: 10px; padding: 10px; background-color: red; color: white; border: none; cursor: pointer; border-radius:20px;">Remove</button>
    `;

    // Append to cart container
    cartContainer.appendChild(cartItem);

    // Handle remove button
    cartItem.querySelector('.remove-btn').addEventListener('click', function () {
      cartContainer.removeChild(cartItem);
      cartItems = cartItems.filter(id => id !== productId);
      cartCountSpan.textContent = cartItems.length;
    });
  });
});


const cartBtn = document.querySelector('.addcartbtn');

cartBtn.addEventListener('click', function () {
  if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
    cartContainer.style.display = 'block';
  } else {
    cartContainer.style.display = 'none';
  }
});





















  






  
