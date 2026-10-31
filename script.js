/*
  E-COMMERCE THRIFT STORE — BEGINNER PRODUCT GUIDE
  ------------------------------------------------
  This is the only section you need to edit when managing products.
  1. Change a product name inside the name field.
  2. Change the selling price inside price.
  3. Change the old/original price inside oldPrice.
  4. Replace the image URL inside image. You can use a local path like "images/hoodie.jpg".
  5. Change the category to one of the category names below.
  6. Add a new product by copying one object, giving it a new id, and adding it to this array.
  7. Remove a product by deleting its complete object from this array.
*/
const products = [
  { id: 1, name: "Classic Men's Hoodie", category: "Men's Fashion", price: 1500, oldPrice: 2000, rating: 4.8, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85" },
  { id: 2, name: "Men's Casual T-Shirt", category: "Men's Fashion", price: 850, oldPrice: 1200, rating: 4.6, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85" },
  { id: 3, name: "Slim Fit Jeans", category: "Men's Fashion", price: 2200, oldPrice: 3000, rating: 4.7, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85" },
  { id: 4, name: "Ladies' Summer Dress", category: "Women's Fashion", price: 1800, oldPrice: 2600, rating: 4.9, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85" },
  { id: 5, name: "Women's Handbag", category: "Bags", price: 2500, oldPrice: 3600, rating: 4.8, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85" },
  { id: 6, name: "Ladies' Casual Top", category: "Women's Fashion", price: 1200, oldPrice: 1700, rating: 4.5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=85" },
  { id: 7, name: "Nike Air Force Sneakers", category: "Shoes", price: 4500, oldPrice: 6200, rating: 4.9, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85" },
  { id: 8, name: "Adidas Running Shoes", category: "Shoes", price: 3800, oldPrice: 5200, rating: 4.7, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85" },
  { id: 9, name: "Women's Flat Shoes", category: "Shoes", price: 1600, oldPrice: 2300, rating: 4.4, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85" },
  { id: 10, name: "Fashion Wristwatch", category: "Accessories", price: 1500, oldPrice: 2200, rating: 4.6, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85" },
  { id: 11, name: "Designer Sunglasses", category: "Accessories", price: 900, oldPrice: 1400, rating: 4.5, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85" },
  { id: 12, name: "Leather Wallet", category: "Accessories", price: 1200, oldPrice: 1800, rating: 4.8, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85" },
  { id: 13, name: "Vintage Denim Jacket", category: "Men's Fashion", price: 2800, oldPrice: 3900, rating: 4.8, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85" },
  { id: 14, name: "Woven Weekend Bag", category: "Bags", price: 2100, oldPrice: 3100, rating: 4.6, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85" },
  { id: 15, name: "Kids' Weekend Sneakers", category: "Children's Fashion", price: 1400, oldPrice: 2100, rating: 4.7, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=85" },
  { id: 16, name: "Silk Neck Scarf", category: "Accessories", price: 700, oldPrice: 1000, rating: 4.4, image: "https://images.unsplash.com/photo-1601924928376-7b7b7b6b5e8e?auto=format&fit=crop&w=700&q=85" }
];

const categories = [
  { name: "Men's Fashion", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85" },
  { name: "Women's Fashion", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=700&q=85" },
  { name: "Children's Fashion", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85" }
];

const state = { query: "", category: "all", cart: JSON.parse(localStorage.getItem("thrift-cart") || "[]") };
const $ = (selector) => document.querySelector(selector);
const formatMoney = (value) => `KSh ${value.toLocaleString("en-KE")}`;
const discount = (product) => Math.round((1 - product.price / product.oldPrice) * 100);
const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="760" viewBox="0 0 700 760"><rect width="700" height="760" fill="#eaf0f7"/><circle cx="350" cy="270" r="120" fill="#d9e4f2"/><path d="M180 690c30-160 115-225 170-225s140 65 170 225" fill="#b8cce5"/><text x="350" y="730" font-family="Arial" text-anchor="middle" font-size="22" fill="#082d67">Thrift Store</text></svg>`)}`;
const safeImage = (image) => image;

function productCard(product) {
  return `<article class="product-card"><div class="product-image-wrap"><img src="${safeImage(product.image)}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'"><span class="discount-badge">-${discount(product)}%</span></div><div class="product-info"><span class="product-category">${product.category}</span><h3 class="product-name">${product.name}</h3><div class="rating" aria-label="${product.rating} out of 5 stars">★★★★★ <span>(${product.rating})</span></div><div class="price-row"><strong class="price">${formatMoney(product.price)}</strong><span class="old-price">${formatMoney(product.oldPrice)}</span></div><button class="add-cart" data-add="${product.id}" type="button">Add to Cart</button></div></article>`;
}

function filteredProducts() {
  return products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const searchText = `${product.name} ${product.category}`.toLowerCase();
    return matchesCategory && searchText.includes(state.query.toLowerCase());
  });
}

function renderProducts() {
  const matches = filteredProducts();
  const topDeals = matches.slice(0, 6);
  const featured = matches.slice(6, 12).length ? matches.slice(6, 12) : matches.slice(0, 6);
  $("#topDealsGrid").innerHTML = topDeals.length ? topDeals.map(productCard).join("") : `<p class="empty-cart">No products matched your search.</p>`;
  $("#featuredGrid").innerHTML = featured.length ? featured.map(productCard).join("") : `<p class="empty-cart">Try another category.</p>`;
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map((category) => `<button class="category-card" type="button" data-category="${category.name}"><img src="${category.image}" alt="${category.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'"><span>${category.name}</span></button>`).join("");
}

function renderCart() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  $("#cartBadge").textContent = count;
  $("#cartItems").innerHTML = state.cart.length ? state.cart.map((item) => `<div class="cart-line"><img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${fallbackImage}'"><div><strong>${item.name}</strong><span>${item.quantity} × ${formatMoney(item.price)}</span></div><button class="remove-line" data-remove="${item.id}" type="button">Remove</button></div>`).join("") : `<p class="empty-cart">Your bag is empty.<br />Find something you love and add it here.</p>`;
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  $("#cartTotal").textContent = formatMoney(total);
  localStorage.setItem("thrift-cart", JSON.stringify(state.cart));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function addToCart(id) {
  const product = products.find((item) => item.id === Number(id));
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else state.cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
  renderCart();
  showToast(`${product.name} added to your cart.`);
}

function setCategory(category) {
  state.category = category || "all";
  renderProducts();
  document.querySelectorAll(".category-card").forEach((card) => card.classList.toggle("is-selected", card.dataset.category === state.category));
  if (category && category !== "all") document.querySelector("#deals").scrollIntoView({ behavior: "smooth" });
}

$("#searchInput").addEventListener("input", (event) => { state.query = event.target.value.trim(); renderProducts(); });
$("#searchButton").addEventListener("click", () => { state.query = $("#searchInput").value.trim(); renderProducts(); $("#deals").scrollIntoView({ behavior: "smooth" }); });
$("#menuToggle").addEventListener("click", () => { const panel = $("#mobilePanel"); const open = panel.classList.toggle("is-open"); panel.setAttribute("aria-hidden", String(!open)); $("#menuToggle").setAttribute("aria-expanded", String(open)); });
$("#accountTrigger").addEventListener("click", () => { const menu = $("#accountMenu"); const open = menu.classList.toggle("is-open"); $("#accountTrigger").setAttribute("aria-expanded", String(open)); });
$("#cartButton").addEventListener("click", () => { $("#cartDrawer").classList.add("is-open"); $("#drawerBackdrop").classList.add("is-open"); $("#cartDrawer").setAttribute("aria-hidden", "false"); });
function closeCart() { $("#cartDrawer").classList.remove("is-open"); $("#drawerBackdrop").classList.remove("is-open"); $("#cartDrawer").setAttribute("aria-hidden", "true"); }
$("#closeCart").addEventListener("click", closeCart);
$("#drawerBackdrop").addEventListener("click", closeCart);
$("#checkoutButton").addEventListener("click", () => showToast("Checkout will be available in the next phase."));
document.addEventListener("click", (event) => { const addButton = event.target.closest("[data-add]"); if (addButton) addToCart(addButton.dataset.add); const removeButton = event.target.closest("[data-remove]"); if (removeButton) { state.cart = state.cart.filter((item) => item.id !== Number(removeButton.dataset.remove)); renderCart(); } const categoryButton = event.target.closest("[data-category]"); if (categoryButton) setCategory(categoryButton.dataset.category); const viewAll = event.target.closest("[data-filter]"); if (viewAll) setCategory("all"); });

renderCategories();
renderProducts();
renderCart();
/* =================================
   HERO IMAGE SLIDER FUNCTIONALITY
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");

    const dotsContainer = document.getElementById("sliderDots");

    const nextButton = document.getElementById("nextSlide");

    const prevButton = document.getElementById("prevSlide");

    if (!slides.length || !dotsContainer || !nextButton || !prevButton) {
        return;
    }

    let currentSlide = 0;
    let slideInterval;

    // CREATE NAVIGATION DOTS

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("slider-dot");

        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

        dot.addEventListener("click", function () {

            currentSlide = index;

            showSlide(currentSlide);

            restartSlider();

        });

        dotsContainer.appendChild(dot);

    });

    // DISPLAY SELECTED IMAGE

    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.toggle("active", i === index);

        });

        const dots = dotsContainer.querySelectorAll(".slider-dot");

        dots.forEach((dot, i) => {

            dot.classList.toggle("active", i === index);

        });

    }

    // NEXT IMAGE

    function nextSlide() {

        currentSlide = (currentSlide + 1) % slides.length;

        showSlide(currentSlide);

    }

    // PREVIOUS IMAGE

    function previousSlide() {

        currentSlide = (currentSlide - 1 + slides.length) % slides.length;

        showSlide(currentSlide);

    }

    // AUTOMATIC SLIDING

    function startSlider() {

        slideInterval = setInterval(nextSlide, 5000);

    }

    // RESET TIMER

    function restartSlider() {

        clearInterval(slideInterval);

        startSlider();

    }

    // BUTTON EVENTS

    nextButton.addEventListener("click", function () {

        nextSlide();

        restartSlider();

    });

    prevButton.addEventListener("click", function () {

        previousSlide();

        restartSlider();

    });

    // START SLIDER

    showSlide(0);

    startSlider();

});