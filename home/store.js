const product_container = document.querySelectorAll(".product-container");
const category_image = document.querySelectorAll(".category_image");
const container_1 = product_container[0];
const container_2 = product_container[1];
const container_3 = product_container[2];
const Input = document.querySelector("input");
const searchbar = document.querySelector("#searchbar");
const banner = document.querySelector(".banner");
const searchResult = document.querySelector(".searchResult");
const displayOnly = document.querySelectorAll(".displayOnly");
const newArrivals = document.querySelector('.newArrivals');


// display advertisment or main advertishment

let n = 0;
setInterval(() => {
  banner.innerHTML =
    `<a  target="_blank" href="${mainAdvertisment[n].url}">
  <img src="${mainAdvertisment[n].product_image}" alt="Ad ${mainAdvertisment[n].name}">
        </a>`;

  // console.log(mainAdvertisment[n].name);
  n = (n + 1) % mainAdvertisment.length;
}, 2000);


// showing search results


searchbar.addEventListener("keyup", () => {
  let query = searchbar.value.toLowerCase();
  searchResult.innerHTML = "";

  if (query.trim() == "") {
    searchResult.setAttribute("hidden", true);
    return;
  }

  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  )

  if (filteredProducts.length > 0) {
    searchResult.removeAttribute("hidden");
    filteredProducts.forEach(product => {
      searchResult.innerHTML += `
      <img src="${product.product_image}" alt="${product.name}" width="50"><br>
      <h1>${product.name}</h1>
      <h2>${product.price}</h2>`;
    });
  } else {
    searchResult.innerHTML = "<p>No products found</p>";
  }
});

window.products.forEach((item) => {
  // console.log(item);
  let item1 = item;
  const product = document.createElement("div");
  product.innerHTML =
    `<div class="product-card">
        <img src="${item1.product_image}" alt="${item1.name}">
        <div class="product-title">${item1.name}</div>
        <div class="product-name">${item1.brand_name}</div>
        <div class="price"><span class="old-price">7crore</span> ${item1.price}</div>
        <div class="product-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <a href="#"><button class="btn">Add To Cart</button></a> 
        <!-- Add item to Wishlist -->
        <span class="wishlist-icon">
         <i class="fa-solid fa-heart"></i></span>
    </div>`
  if (container_1.children.length <= 10) {
    container_1.appendChild(product);
  }
  else if (container_2.children.length <= 10) {
    container_2.appendChild(product);
  }
  else if (container_3.children.length <= 10) {
    container_3.appendChild(product);
  }
});

function show_category(category) {
  container_1.innerHTML = "";
  container_2.innerHTML = "";
  container_3.innerHTML = "";
  console.log(category);
  products.forEach((item) => {
    let item1 = item;
    if (item1.category === category) {


      const product = document.createElement("div");
      product.innerHTML =
        `<div class="product-card">
          <img src="${item1.product_image}" alt="${item1.name}">
          <div class="product-title">${item1.name}</div>
          <div class="product-name">${item1.brand_name}</div>
          <div class="price"><span class="old-price">7crore</span> ${item1.price}</div>
          <div class="product-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <a href="#"><button class="btn">Add To Cart</button></a> 
          <span class="wishlist-icon">
            <i class="fa-solid fa-heart"></i>
          </span>
        </div>`;
        
      container_1.appendChild(product);
    }
  });
}
