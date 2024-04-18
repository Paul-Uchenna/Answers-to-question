// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item
  getTotalPrice() {
    return product.price * quantity;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor(items) {
    this.items = [];
  }

  // Method to get the total number of items inside the cart
  getTotalItems() {
    let totalItems = 0;
    for (const item of this.items) {
      totalItems += item.quantity;
    }
    return totalItems;
  }
  // Method to add items to the cart
  addItem(item) {
    this.items.push(item);
  }
  // Method to remove items from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  displayItems() {
    this.items.forEach((item) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
  }
}

// Test the objects
// Create some products
const product1 = new Product(1, "Shadow Knit Leather Sneaker", 124.5);
const product2 = new Product(2, "Shadow OG Sneakers Mens", 98.99);
const product3 = new Product(3, "Cloudo Black/Eclipse Men", 896.76);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 4);
const item3 = new ShoppingCartItem(product3, 3);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

// Display the cart
console.log("Cart Items:");
cart.displayItems();

// Remove an item from the cart
cart.removeItem(1);

// Display the updated cart
console.log("Updated Cart Items:");
cart.displayItems();

let arTicles = document.querySelectorAll(".article");

const decrementBtns = document.querySelectorAll(".decrement");
const incrementBtns = document.querySelectorAll(".increment");
const quantities = document.querySelectorAll(".count");

const prices = document.querySelectorAll(".price");
const subtotal = document.getElementById("subtotal");
const TVA = document.getElementById("tax");
const total = document.getElementById("total");
const order = document.getElementById("order");

const deleteItems = document.querySelectorAll(".delete");
const likeItems = document.querySelectorAll(".like");

// Management of decrement and increment buttons

function incrementQuantity(button) {
  const article = button.closest(".article");
  const count = article.querySelector(".count");
  const quantity = parseInt(count.textContent);
  count.textContent = quantity + 1;
  updateSubtotal();
}

function decrementQuantity(button) {
  const article = button.closest(".article");
  const count = article.querySelector(".count");
  const quantity = parseInt(count.textContent);
  if (quantity > 1) {
    count.textContent = quantity - 1;
    updateSubtotal();
  }
}

// Add event listeners to increment buttons
incrementBtns.forEach((button) => {
  button.addEventListener("click", () => {
    incrementQuantity(button);
  });
});

// Add event listeners to decrement buttons
decrementBtns.forEach((button) => {
  button.addEventListener("click", () => {
    decrementQuantity(button);
  });
});

// Order & Summary

function updateSubtotal() {
  let subtotalValue = 0;

  // Browse each article
  for (let i = 0; i < arTicles.length; i++) {
    const article = arTicles[i];
    const quantity = parseInt(article.querySelector(".count").textContent);
    const price = parseFloat(article.querySelector(".price").textContent);
    subtotalValue += quantity * price;
  }
  subtotal.textContent = `${subtotalValue.toFixed(2)}`;
  updateTotal(subtotalValue);
}

const taxRate = parseFloat(TVA.textContent) / 100;

function updateTotal(subtotalValue) {
  let totalValue = subtotalValue + subtotalValue * taxRate;
  total.textContent = `${totalValue.toFixed(2)}`;
}

// Command button click event

order.addEventListener("click", () => {
  alert("Your purchase has been validated ! Thank you for your trust !");
});

// Management of like buttons

likeItems.forEach((likeButton) => {
  let liked = false;

  likeButton.addEventListener("click", () => {
    liked = !liked;
    if (liked) {
      likeButton.style.color = "#D97706";
    } else {
      likeButton.style.color = "#000000";
    }
  });
});

// Deleting an item from the cart

deleteItems.forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    let articleToRemove = deleteButton.closest(".article");

    articleToRemove.remove();

    // Update article list after deletion
    arTicles = document.querySelectorAll(".article");
    console.log(arTicles);
    updateSubtotal();
  });
});

// Initialization of subtotal and total
updateSubtotal();
