const products_container1 = document.querySelector(".products_display1");
const products_container2 = document.querySelector(".products_display2");
const products_container3 = document.querySelector(".products_display3");
const products_container4 = document.querySelector(".products_display4");


async function asa() {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/product-details?asin=B07ZPKBL9V&country=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0756dabcdfmsh6ed6e61ef736c82p1e45bbjsn9beef3bbf41b',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
         console.log(result);

        if (result.data && result.data.products) {
            const products = result.data.products;
            products.forEach((product, index) => {
                const productElement = document.createElement("div");
                productElement.innerHTML = `
                    <div id="item${index}" class="item">
                        <div class="asin">${product.asin}</div>
                        <div class="product_title">${product.product_title}</div>
                        <div class="product_price">${product.product_price}</div>
                        <div class="product_url">${product.product_url}</div>
                        <div class="product_brand">${product.product_brand}</div>
                        <div class="delivery_price">${product.delivery_price}</div>
                        <div class="delivery_time">${product.delivery_time}</div>
                        <div class="is_best_seller">${product.is_best_seller}</div>
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
        } else {
            console.error("No products found in the response.");
        }

    } catch (error) {
        console.error(error);
    }
}

asa();