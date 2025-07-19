function toggleMenu() {
  const navbar = document.getElementById("navbar");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  navbar.classList.toggle("active");

  const isActive = navbar.classList.contains("active");

  openIcon.style.display = isActive ? "none" : "inline";
  closeIcon.style.display = isActive ? "inline" : "none";
}


let qty = 1;

function getBasePrice() {
  const priceElement = document.getElementById('priceDisplay');
  return parseFloat(priceElement.getAttribute('data-price'));
}

function updatePrice() {
  const basePrice = getBasePrice();
  const total = (qty * basePrice).toFixed(2);
  document.getElementById('priceDisplay').innerText = total;
}

function increaseQty() {
  qty++;
  document.getElementById('qtyValue').innerText = qty;
  updatePrice();
}

function decreaseQty() {
  if (qty > 1) {
    qty--;
    document.getElementById('qtyValue').innerText = qty;
    updatePrice();
  }
}

function changeImage(img) {
  const mainImg = document.getElementById('mainProductImage');
  mainImg.src = img.src;
  mainImg.style.width = '450px'; 
  mainImg.style.height = '470px'; 
  
  document.querySelectorAll('.thumbnails img').forEach(el => el.classList.remove('active'));
  img.classList.add('active');
}

// Initialize price
updatePrice();

const addToCartButtons = document.querySelectorAll('.addtocart');
const cartCountSpan = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-container');

let cartItems = []; 

addToCartButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); 

    const productElement = this.closest('.details');

    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('.product-name2').innerText.trim();
    const productPrice = productElement.querySelector('.price2').innerText.trim();
    const productImgSrc = document.getElementById('mainProductImage').src;

    if (cartItems.includes(productId)) {
      alert('This product is already in the cart!');
      return;
    }


    cartItems.push(productId);


    cartCountSpan.textContent = cartItems.length;

 
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

    
    cartContainer.appendChild(cartItem);

  
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


// statistique counter


var image = document.querySelector('#explorebtnid')
var element = document.querySelector('.exploreBtn')

element.addEventListener("mouseover", function () {
  image.src = "img/check2.png"
});

element.addEventListener("mouseout", function () {
  image.src = "img/next.png"
});













