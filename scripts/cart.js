const cartContainer = document.querySelector(".cart-container");
const subtotalPrice = document.querySelector(".subtotal-price")
const grandTotal = document.querySelector(".grand-total")
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count")
function updateCartCount(){
    if(cartCount){
        cartCount.textContent = cart.lenght;
    }
}
function displayCart(cartItem){
    cartContainer.innerHTML =""
    cartItem.forEach(function(item){
       const card = document.createElement("div");
       card.classList.add("cart-card")
       const itemTotal = item.price * item.quantity;
        card.innerHTML =
        `<img src ="${item.image}" alt ="${item.name}">
        <div class="cart-text">
        <div class="cart-info">
        <h3>${item.name}</h3>
        <div class ="quantity-controls">
        <button class="minus-btn">-</button>
        <span>${item.quantity}</span>
        <button class="plus-btn">+</button>
        </div>
        <h4>k${itemTotal}</h4>
        </div>
        </div>
        `
        const plusBtn = card.querySelector(".plus-btn")
        const minusBtn = card.querySelector(".minus-btn")
        plusBtn.addEventListener('click',function(){
            item.quantity++;
            localStorage.setItem("cart",JSON.stringify(cart))
            displayCart(cart);
            updateTotal();
            updateCartCount();
        })
        minusBtn.addEventListener('click',function(){
            if(item.quantity >1){
                item.quantity--;
            }
            else{
                const index = cart.findIndex(function(cartItem){
                    return cartItem.name ===  item.name;
                })
                cart.splice(index,1)
            }
             localStorage.setItem("cart",JSON.stringify(cart))
                 displayCart(cart);
                 updateTotal();
                 updateCartCount();

           
            
        })
        cartContainer.appendChild(card)
        
    });
    

}
function updateTotal(){
    let subtotal = 0;
    cart.forEach(function(item){
        subtotal = subtotal + item.price * item.quantity;


    })
    const delvery = 20;
    const total = subtotal + delvery;
    subtotalPrice.textContent = subtotal;
    grandTotal.textContent = total;
    totalPrice.textContent = total;
}

displayCart(cart);
updateTotal();



