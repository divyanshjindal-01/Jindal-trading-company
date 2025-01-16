let itemName =  document.querySelectorAll("#itemName");
let searchBar = document.getElementById("searchBox");
const item = document.querySelectorAll(".itemName");

searchBar.addEventListener('input',()=>{
    const searchValue = searchBar.value.toLowerCase();

    item.forEach(item =>{
        if(item.textContent.toLowerCase().includes(searchValue)){
            item.classList.add('highlight');
        }else{
            item.classList.remove('highlight');
        }
    });
});