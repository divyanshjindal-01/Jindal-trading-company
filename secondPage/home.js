const itemDisplay = document.querySelector(".itemDisplay");

const template = (imageUrl ,names, price) => `
        <div class="item">
            <div class="item_image">
                <img src="${imageUrl}" alt="${names}'s Image" style="width: 200px; height: auto;">
            </div>
            <div class="item_name">${names}</div>
            <div class="item_price">${price}</div>
            <button class="addToCart" id="${names}">add to cart</button>
        </div>
`;

const items =[
    {imageUrl:"../images/diddyOil.jpeg" ,names: "Diddy Oil" ,price: "$63"},
    {imageUrl:"../images/images.jpeg" ,names: "salt" ,price: "$28"},
    {imageUrl:"../images/maagi.jpeg" ,names: "maagi" ,price: "$15"},
    {imageUrl:"../images/milk.jpeg" ,names: "milk" ,price: "$34"},
    {imageUrl:"../images/tea.jpeg" ,names: "tea" ,price: "$120"},
    {imageUrl:"../images/bread.jpg" ,names: "bread" ,price: "$10"}
];

if(itemDisplay){
items.forEach(item => {
    const result = template(item.imageUrl ,item.names, item.price);
    itemDisplay.innerHTML +=result;

});
}else{
    console.error("Container element with class 'itemDisplay' not found.");
}