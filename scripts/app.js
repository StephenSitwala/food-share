//humburger 
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navlinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul li a");
const closeIcone = document.querySelector(".close-icon");
hamburgerIcon.addEventListener('click',function(){
    navlinks.classList.toggle("active");
    hamburgerIcon.style.display = "none"
    closeIcone.style.display = "block"
});
closeIcone.addEventListener('click',function(){
    navlinks.classList.remove("active")
    hamburgerIcon.style.display = "block"
    closeIcone.style.display = "none"
    
})
links.forEach(function(link){
    link.addEventListener('click',function(){
        navlinks.classList.remove("active")
        hamburgerIcon.style.display = "block"
    closeIcone.style.display = "none"
    })
})




//================
//menu cards
//===============
const manuContainer = document.querySelector(".manu-container");
const menu = JSON.parse(localStorage.getItem("menu")) ||[
    //=============
    //fast-food
    //===============
    {
        name: "cheese Burger",
        price: 78,
        image:"photos/home.png",
        category:"fast-food"
        
    },
    {
        name: "Beef Burger with flies",
        price: 80,
        image:"photos/fast4.jpg",
        category:"fast-food"
    
    },
    {
        name: "backet of chicken & flies with 1ltr of coke",
        price: 130,
         image:"photos/fast5.jpg",
        category:"fast-food"
    },
    {
        name: "Big beef burger with flies",
        price: 98,
         image:"../photos/fast2.jpg",
        category:"fast-food"
    },
    {
        name: "Big two ",
        price: 75,
        image:"../photos/IMG_20260628_212535_279images (19).jpeg",
        category:"fast-food"
    },
    {
        name: "backet of chicken",
        price: 100,
        image:"../photos/fast 7.jpg",
        category:"fast-food"
    },
    //=============
    //local food
    //============
     {
        name: "pizza",
        price: 45 ,
        image:"../photos/IMG_20260629_141843_428images (20).jpeg",
        category:"local"
    },
    {
        name: "pizza",
        price: 50,
        image:"../photos/IMG_20260629_141843_582images (24).jpeg",
        category:"local"
    },
    {
        name: "pizza",
        price: 40,
         image:"../photos/IMG_20260629_141843_723images (23).jpeg",
        category:"local"
    },
    {
        name: "pizza",
        price: 35,
         image:"../photos/IMG_20260629_141843_485images (21).jpeg",
        category:"local"
    },
    {
        name: "pizza",
        price: 100,
        image:"../photos/images (25).jpeg",
        category:"local"
    },
    {
        name: "pizza",
        price: 30,
        image:"../photos/IMG_20260629_141843_509images (22).jpeg",
        category:"local"
    },
    
    //============
    //pizza & plasta
    //=============
     {
        name: "pizza",
        price: 78,
        image:"../photos/pizza.jpg",
        category:"pizza & plasta"
    },
    {
        name: "pizza",
        price: 78,
        image:"../photos/pizza1.jpg",
        category:"pizza & plasta"
    },
    {
        name: "pizza",
        price: 78,
         image:"../photos/pizza1.jpg",
        category:"pizza & plasta"
    },
    {
        name: "pizza",
        price: 78,
         image:"../photos/pizza1.jpg",
        category:"pizza & plasta"
    },
    {
        name: "pizza",
        price: 78,
        image:"../photos/pizza1.jpg",
        category:"pizza & plasta"
    },
    {
        name: "pizza",
        price: 78,
        image:"../photos/pizza1.jpg",
        category:"pizza & plasta"
    },
    //===============
    //grilled & bbq
    //=============
     {
        name: "Grilled beef",
        price: 56,
        image:"photos/images (26).jpeg",
        category:"grilled & bbq"
    },
    {
        name: "platter grilled beef",
        price: 55,
        image:"photos/images (30).jpeg",
        category:"grilled & bbq"
    },
    {
        name: "griiled beff with vagatables",
        price: 60,
         image:"photos/images (27).jpeg",
        category:"grilled & bbq"
    },
    {
        name: "grilled beef with colored paper",
        price: 70,
         image:"photos/images (29).jpeg",
        category:"grilled & bbq"
    },
    {
        name: "grilled beef",
        price: 50,
        image:"photos/grilled 7.jpg",
        category:"grilled & bbq"
    },
    {
        name: "grillef beef with tomato & green paper",
        price: 30,
        image:"photos/grilled 4.jpg",
        category:"grilled & bbq"
    },
    //=============
    //salads & healthy meals
    //=============
     {
        name: "pizza",
        price: 78,
        image:"photos/home.png",
        category:"salads & health meals"
    },
    {
        name: "pizza",
        price: 78,
        image:"photos/home.png",
        category:"salads & health meals"
    },
    {
        name: "pizza",
        price: 78,
         image:"photos/home.png",
        category:"salads & health meals"
    },
    {
        name: "pizza",
        price: 78,
         image:"photos/home.png",
        category:"salads & health meals"
    },
    {
        name: "pizza",
        price: 78,
        image:"photos/home.png",
        category:"salads & health meals"
    },
    {
        name: "pizza",
        price: 78,
        image:"../photos/home.png",
        category:"salads & health meals"
    },
    //==========
    //drinks
    //==========
    {
        name: "coca cola can",
        price: 30,
        image:"photos/images (23).jpeg",
        category:"drinks and beverages"
    },
    {
        name: "Sprite,Coca cola and Fanta each at",
        price: 15,
        image:"photos/images (22).jpeg",
        category:"drinks and beverages"
    },
    {
        name: "Pepsi max",
        price: 18,
         image:"photos/images (21).jpeg",
        category:"drinks and beverages"
    },
    {
        name: "Fanta",
        price: 20,
         image:"photos/Drinks 5.jpeg",
        category:"drinks and beverages"
    },
    {
        name: "Merinda can",
        price: 19,
        image:"photos/drinks2.jpeg",
        category:"drinks and beverages"
    },
    {
        name: "Bottled coca cola ",
        price: 15,
        image:"photos/vahidkanani-coca-cola-5779718_1920.jpg",
        category:"drinks and beverages"
    },

    



];


const cart = JSON.parse(localStorage.getItem("cart")) || [];
//cart count
const cartCount = document.querySelector(".cart-count");
//=============
//displaymenu cards
//===============

function displayMenu(menuItem){
    manuContainer.innerHTML =""
    menuItem.forEach(function(item){
       const card = document.createElement("div");
       card.classList.add("manu-card")
        card.innerHTML =
        `<img src ="${item.image}" alt ="${item.name}">
        <div class="manu-text">
        <div class="food-info">
        <h1>${item.name}</h1>
        <h2>k${item.price}</h2>
         <button class="order-now-btn"> order now</button>
        </div>
        </div>
        `
        const orderNowBtn = card.querySelector(".order-now-btn")//cart code
        orderNowBtn.addEventListener('click',function(){
            addToCart(item)
        })
        manuContainer.appendChild(card)
    })

}
displayMenu(menu.filter(function(item){ //calling the displaymenu function
    return item.category === "fast-food"

}))

//cart code
function addToCart(item){
    const existingItem = cart.find(function(cartItem){
        return cartItem.name === item.name;
    })
    if(existingItem){
            existingItem.quantity++;
        }
        else{
            cart.push({
                ...item,quantity:1
            })

        }
    
    localStorage.setItem("cart",JSON.stringify(cart))
    updateCartCount();
}
function updateCartCount(){
        cartCount.textContent = cart.length;
        cartCount.style.color = "white"
        cartCount.style.fontFamily = "Times New Roman"
    }

    
//FILTER BUTTON
const filterBtn = document.querySelectorAll(".menu-nav button");
filterBtn.forEach(function(button){
    button.addEventListener('click',function(){
      const selectedBtn = button.dataset.category;
        const selectedMenu = menu.filter(function(item){
            return item.category === selectedBtn
        })
        displayMenu(selectedMenu)
    })
})
updateCartCount();
