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
    alert(`Thank you ${customerName}!
    your order has been placed successfully.
        
        `)
        localStorage.removeItem("cart");
        window.localStorage.href ="index.html";

})