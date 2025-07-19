var mybtn = document.querySelector("#subscribeBtn");

mybtn.addEventListener("click", function (event) {
    var mydiv = document.querySelector(".alertMsg");
    var email = document.querySelector(".emailInput").value;

    if (!email.includes("@") || !email.includes(".com")) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address!',
        });
    } else {
        // Optional: use SweetAlert2 for success too
        Swal.fire({
            icon: 'success',
            title: 'Thank you 💕!',
            text: 'Your email has been sent.',
            showConfirmButton: false,
            timer: 2000
        });

        mydiv.classList.remove("hide");
        mydiv.classList.add("show");

        setTimeout(() => {
            mydiv.classList.remove("show");
            mydiv.classList.add("hide");
        }, 3000);
    }
});


document.querySelectorAll('.order-now').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const name = this.dataset.name;
      const price = this.dataset.price;
      const img = this.dataset.img;

      document.getElementById('paymentImage').src = img;
      document.getElementById('paymentName').textContent = name;
      document.getElementById('paymentPrice').textContent = price;

      document.getElementById('paymentOverlay').style.display = 'flex';
    });
  });

  // Close payment box
  document.getElementById('closePayment').addEventListener('click', function () {
    document.getElementById('paymentOverlay').style.display = 'none';
  });

  // Payment form submit
  document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful',
      text: 'Thank you for your order!',
    });
    document.getElementById('paymentOverlay').style.display = 'none';
  });

  // Change main image
  function changeImage(img) {
    document.getElementById("mainProductImage").src = img.src;
  }



  function showPayment(plan, price) {
      document.getElementById("paymentPage").style.display = "flex";
      document.getElementById("planTitle").innerText = `Payment - ${plan} (${price} MAD)`;
    }

    window.onclick = function(e) {
      const paymentPage = document.getElementById("paymentPage");
      if (e.target === paymentPage) {
        paymentPage.style.display = "none";
      }
    };




    

 


