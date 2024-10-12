// Cart to hold selected items
let cart = [];
let totalCartPrice = 0; // This will store the cumulative cart total

// Add event listener to all radio buttons to update the displayed unit price
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateDisplayedTotal);
});

// Add event listener for the Add to Cart button
document.querySelector('.add-to-cart').addEventListener('click', addToCart);

// Function to update the displayed price for the selected units (without adding to cart yet)
function updateDisplayedTotal() {
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let displayedTotal = 0;

    if (selectedUnit === "1") {
        displayedTotal = 10.00;
    } else if (selectedUnit === "2") {
        displayedTotal = 18.00;
    } else if (selectedUnit === "3") {
        displayedTotal = 24.00;
    }

    document.getElementById('total-price').innerText = `$${displayedTotal.toFixed(2)} USD`;
}

// Function to handle Add to Cart functionality
function addToCart() {
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let selectedItem = {};
    let itemPrice = 0;

    if (selectedUnit === "1") {
        itemPrice = 10.00;
        selectedItem = {
            units: 1,
            price: itemPrice
        };
    } else if (selectedUnit === "2") {
        const size1 = document.getElementById('size1').value;
        const color1 = document.getElementById('color1').value;
        const size2 = document.getElementById('size2').value;
        const color2 = document.getElementById('color2').value;
        itemPrice = 18.00;

        selectedItem = {
            units: 2,
            price: itemPrice,
            sizes: [size1, size2],
            colors: [color1, color2]
        };
    } else if (selectedUnit === "3") {
        itemPrice = 24.00;
        selectedItem = {
            units: 3,
            price: itemPrice
        };
    }

    // Add the item to the cart array
    cart.push(selectedItem);

    // Update the total cart price
    totalCartPrice += itemPrice;

    // Update the displayed total price in the UI
    document.getElementById('cart-total-price').innerText = `Total Cart Price: $${totalCartPrice.toFixed(2)} USD`;

    // Provide feedback to the user
    alert(`Added ${selectedItem.units} unit(s) to the cart. Total for this item: $${itemPrice.toFixed(2)} USD`);

    // Optionally log the cart to see the items
    console.log(cart);
}
