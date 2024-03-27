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
