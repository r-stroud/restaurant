import { getMenu, getParty, getWaiters, getOrders } from './main.js';

console.log(getMenu())
console.log(getParty())
console.log(getWaiters())
console.log(getOrders())

for (const staff of getWaiters()) {
    if (staff.employeeID === 4) {
        document.getElementById(
            'staffRob'
        ).innerHTML = `<h2><span>Employee ID:</span>${staff.employeeID}</h2><div><h3>${staff.firstName}</h3><h3>${staff.lastName}</h3></div>`;
    }
}

let test = '';


// let orderNum = 1

let numRS = 1;

function matchMenuID(num) {
    for (const menus of getMenu()) {
        if (menus.menuId === num) return menus.menuItem;
    }
}

function menuCost(num) {
    for (const menusCost of getMenu()) {
        if (menusCost.menuId === num) return menusCost.cost;
    }
}




// test =
//     test +
//     `<h5><span>Total Cost: </span>$${parseFloat(
//         costMenu

//     ).toFixed(2)}</h5>`;
// costMenu = 0;



let costMenu = 0;

for (const parties of getParty()) {
    if (parties.employeeID === 4) {
        let tableNum = parties.tableId
        test =
            test +
            `<h2><span>Party ID: </span>${parties.partyId}</h2>
    <div>
    <h3><span>Party Size: </span>${parties.partySize}</h3>
    <h3><span>Table Number: </span>${parties.tableId}</h3>
    </div>`
        for (const order of getOrders()) {
            if (order.tableId === parties.tableId) {

                test = test + `<h4><span>Order ${numRS++}:</span></h4>`
                for (const orderItem of order.menuId) {
                    test = test + `<ul><li>${matchMenuID(orderItem)}</li></ul>`
                }
            }
        }

    };

}

document.getElementById('orderRob').innerHTML = test;

// test2 = "<ul>"
// for (const orders of orderRob) {
//     test2 =
//         test2 +
//         `<h4><span>Order ${orders.orderNumber}:</span></h4>`
//     for (const actualOrder of orders.order) {
//         test2 = test2 + `<li>${actualOrder}</li>`
//     }



//     costMenu = costMenu + menuCost(orders.menuId);



