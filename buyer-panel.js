function navigate(viewId) {
    document.querySelectorAll('.view-section').forEach(v => v.style.display = 'none');
    document.getElementById('view-' + viewId).style.display = 'block';

    // Update active sidebar link (since sidebar is duplicated, update all)
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll(`.sidebar a[onclick="navigate('${viewId}')"]`).forEach(a => a.classList.add('active'));

    if (viewId === 'logout') {
        triggerLogoutAnimation();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function triggerLogoutAnimation() {
    document.getElementById("logout-loading").style.display = "block";
    document.getElementById("logout-done").style.display = "none";
    setTimeout(() => {
        document.getElementById("logout-loading").style.display = "none";
        document.getElementById("logout-done").style.display = "block";
    }, 1200);
}

// Mock cart data
let cart = [];

function addToCart(product) {
    cart.push({ product: product, price: 0, quantity: 1 });
    alert(`${product} added to cart!`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.product}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
            `;
            cartItems.appendChild(row);
            total += item.price * item.quantity;
        });
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    }
}

function updateQuantity(index, qty) {
    cart[index].quantity = parseInt(qty);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function removeFromWishlist(button) {
    button.parentElement.remove();
}

// Initialize
navigate('login');