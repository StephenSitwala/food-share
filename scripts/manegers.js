

const menuForm = document.querySelector(".menu-form");

const foodName = document.querySelector("#food-text");
const foodPrice = document.querySelector("#food-price");
const foodCategory = document.querySelector("#food-category");
const foodImage = document.querySelector("#food-image")
const menuList = document.querySelector(".menu-list")
//let menu = JSON.parse(localStorage.getItem("menu")) ||[];//
displayMenu();
menuForm.addEventListener("submit",function(event){
    event.preventDefault();
    const newMenu = {
        name:foodName.value,
        price:Number(foodPrice.value),
        category:foodCategory.value,
        image:foodImage.value
    }
    menu.push(newMenu)
    localStorage.setItem("menu",JSON.stringify(menu));

    

    displayMenu()
    menuForm.reset();

})
function displayMenu(){
    menuList.innerHTML="";
    menu.forEach(function(item){
        const card = document.createElement("div")
        card.classList.add("menu-card")
        card.innerHTML=`
        <img src="${item.image}"><alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <h4>${item.price}</h4>
        `
        menuList.appendChild(card);

    })
}
