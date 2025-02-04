const products_container1 = document.querySelector(".products_display1");
const products_container2 = document.querySelector(".products_display2");
const products_container3 = document.querySelector(".products_display3");
const products_container4 = document.querySelector(".products_display4");
console.log(window.products);
products.forEach((item, index )=> {
    const productElement = document.createElement("div");
productElement.innerHTML = `
                    <div id="item${index}" class="item">x
                        <div class="asin">${item.asin}</div>
                        <div class="product_title">${item.product_title}</div>
                        <div class="product_price">${item.product_price}</div>
                        <div class="delivery_price">${item.delivery_price}</div>
                        <div class="delivery_time">${item.delivery_time}</div>
                    </div>
                `;
                if (products_container1.children.length <= 5) {
                    products_container1.appendChild(productElement);
                }
                else if (products_container2.children.length <= 5) {
                    products_container2.appendChild(productElement);
                } 
                else if (products_container3.children.length <= 5) {
                    products_container3.appendChild(productElement);
                }
                else{
                    products_container4.appendChild(productElement);
                }        
});
