const checkoutForm = document.querySelector("#checkout-form")
const fullName = document.querySelector("#full-name")
const phone = document.querySelector("#phone")
const payment = document.querySelector("#payment")
const address = document.querySelector("#address")
checkoutForm.addEventListener('submit',function(e){
    e.preventDefault();
    const customerName = fullName.value;
    const customerphone = phone.value;
    const customerAddress = address.value;
    const paymentMethod = payment.value;
    
        const cart = JSON.parse(localStorage.getItem("cart")) ||[];
        let total = 0;
        cart.forEach(function(item){
            total = total + item.price * item.quantity;
        })
        const order = {
            customerName:customerName,
            phone: customerphone,
            address: customerAddress,
            items: cart,
            total: total,
            payment: paymentMethod,
            status: "pending"
        };
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order)
        localStorage.setItem("orders",JSON.stringify(orders))
        alert(`Thank you ${customerName}!
    your order has been placed successfully.
        
        `)
        localStorage.removeItem("cart");
        window.location.href ="index.html";

})