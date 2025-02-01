const itemDisplayInCircle = document.querySelector(".circle_catogery");

const template = (imageUrl ) => `
        <div class="item">
            <div class="item_image">
                <img src="${imageUrl}">
            </div>
        </div>
`;

const items =[
    {imageUrl:"../images/diddyOil.jpeg" },
    {imageUrl:"../images/images.jpeg" },
    {imageUrl:"../images/maagi.jpeg" },
    {imageUrl:"../images/milk.jpeg" },
    {imageUrl:"../images/tea.jpeg" },
    {imageUrl:"../images/bread.jpg" }
];

if(itemDisplayInCircle){
items.forEach(item => {
    const result = template(item.imageUrl);
    itemDisplayInCircle.innerHTML +=result;

});
}else{
    console.error("Container element with class 'itemDisplayInCircle' not found.");
}