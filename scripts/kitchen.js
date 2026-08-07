const ordersTable = document.querySelector(".orders-table")
let orders = JSON.parse(localStorage.getItem("orders")) || [];
displayOrders();
function displayOrders(){
    ordersTable.innerHTML = "";
    orders.forEach(function(order){
        const row = document.createElement("tr");
        let items = "";
        order.items.forEach(function(orderItem){
            items = items + `${orderItem.name} x${orderItem.quantity}<br>`;
            
        })
        row.innerHTML = `
        <td>${order.customerName}</td>
        <td>${order.phone}</td>
        <td>${order.address}</td>
        <td>${items}</td>
        <td>${order.total}</td>
        <td>${order.payment}</td>
        <td>
        
        <p class="status">${order.status}</p>
        <button class="prepare-btn">preparing</button>
        <button class="ready-btn">Ready</button>
        <button class="cancel-btn">cancel</button>
        
        
        </td>
        `
        ordersTable.appendChild(row);
        const prepareBtn = row.querySelector(".prepare-btn")
        const readyBtn = row.querySelector(".ready-btn")
        const cancelBtn = row.querySelector(".cancel-btn")
        prepareBtn.addEventListener("click",function(){
            order.status = "preparing"
            localStorage.setItem("orders",JSON.stringify(orders));
            displayOrders();
        })
        readyBtn.addEventListener("click",function(){
            order.status = "Ready"
            localStorage.setItem("orders",JSON.stringify(orders));
            displayOrders();
        })
        cancelBtn.addEventListener("click",function(){
            order.status = "cancelled"
            localStorage.setItem("orders",JSON.stringify(orders));
            displayOrders();
        })

    })
}