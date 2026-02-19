const sizePrices = {
    small: 8,
    medium: 10,
    large: 12
};
const toppingPrice = 2;
const deliveryPrice = 5;

function totalPrice(basePrice, toppingPrice, selectedToppings, deliveryTotal) {
    const toppingsTotal = toppingPrice * selectedToppings;
    return basePrice + toppingsTotal + deliveryTotal;
}

const pizzaForm = document.getElementById('pizza-order-form');
const displayTotal = document.getElementById('total');

pizzaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Base Price
    const selectedSize = document.getElementById('size').value;
    const basePrice = sizePrices[selectedSize];

    // Topping Price
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const numOfToppings = toppings.length;

    // Delivery Price
    const deliverySelected = document.getElementById('delivery').checked; // boolean value
    const deliveryTotal = deliverySelected ? deliveryPrice : 0;

    let total = totalPrice(basePrice, toppingPrice, numOfToppings, deliveryTotal);
    let displayText = `Total Price: $${total}`;
    displayTotal.textContent = displayText;
});
