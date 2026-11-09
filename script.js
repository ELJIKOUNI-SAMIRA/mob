
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// SHOPPING CART
let cart = [];

const cartMessage = document.getElementById("cartMessage");
const cartIcon = document.querySelector(".nav-icons .fa-bag-shopping");

document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);

        cart.push({
            name: productName,
            price: productPrice
        });

        cartMessage.textContent =
            `${productName} added! Your cart has ${cart.length} item(s).`;

        cartMessage.classList.add("show");

        setTimeout(() => {
            cartMessage.classList.remove("show");
        }, 2500);

        cartIcon.title = `Cart: ${cart.length} item(s)`;
    });
});

// CLICK ON CART ICON
cartIcon.parentElement.addEventListener("click", (event) => {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const items = cart.map(item =>
        `${item.name} - ${item.price} DH`
    ).join("\n");

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    alert(
        "YOUR SHOPPING CART\n\n" +
        items +
        "\n\nTotal: " + total + " DH"
    );
});
