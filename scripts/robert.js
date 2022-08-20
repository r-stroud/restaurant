// const waitersRS = [
//     {
//         employeeID: 1,
//         firstName: "Cristi",
//         lastName: "Neames"
//     },

//     {
//         employeeID: 2,
//         firstName: "Alex",
//         lastName: "Cueto"
//     },
//     {
//         employeeID: 3,
//         firstName: "Taylor",
//         lastName: "Evans"
//     },
//     {
//         employeeID: 4,
//         firstName: "Robert",
//         lastName: "Stroud"
//     },
// ]

for (staff of waitersRS) {
  if (staff.employeeID === 4) {
    document.getElementById(
      'staffRob'
    ).innerHTML = `<h2><span>Employee ID:</span>${staff.employeeID}</h2><div><h3>${staff.firstName}</h3><h3>${staff.lastName}</h3></div>`;
  }
}

// const partyRS = [
//     {
//         partyID: 1,
//         partySize: 4,
//         tableID: 7,
//         order: [
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 1,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 1,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 1,
//             }
//         ]
//     },
//     {
//         partyID: 2,
//         partySize: 2,
//         tableID: 10,
//         order: [
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 1,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             }
//         ]
//     },
//     {
//         partyID: 3,
//         partySize: 6,
//         tableID: 9,
//         order: [
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 1,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             },
//             {
//                 menuID: Math.floor(Math.random() * 6) + 1,
//                 drinkID: Math.floor(Math.random() * 5) + 1,
//                 partyrestrictionID: 3,
//             }
//         ]
//     }
// ]

// const menuRS = [
//     {
//         menuID: 1,
//         item: "Everything Pizza",
//         cost: 15.99
//     },
//     {
//         menuID: 2,
//         item: "Everything Burger",
//         cost: 6.99
//     },
//     {
//         menuID: 3,
//         item: "Everything Quesadilla",
//         cost: 4.99
//     },
//     {
//         menuID: 4,
//         item: "Everything Sandwich",
//         cost: 5.99
//     },
//     {
//         menuID: 5,
//         item: "Everything Spaghetti",
//         cost: 8.99
//     },
//     {
//         menuID: 6,
//         item: "A Little Bit of Everything",
//         cost: 19.99
//     }
// ]

// const drinkMenuRS = [
//     {
//         drinkID: 1,
//         item: "Water",
//         cost: 0.00
//     },
//     {
//         drinkID: 2,
//         item: "Coke",
//         cost: 1.99
//     },
//     {
//         drinkID: 3,
//         item: "Lemonade",
//         cost: 1.99
//     },
//     {
//         drinkID: 4,
//         item: "Tea",
//         cost: 1.99
//     },
//     {
//         drinkID: 5,
//         item: "Beer",
//         cost: 3.99
//     },
// ]

// const partyRestrictionRS = [
//     { Id: 1, restriction: 'none' },
//     { Id: 2, restriction: 'gluten-free' },
//     { Id: 3, restriction: 'peanut-free' },
// ];

let test = '';

let numRS = 1;

function matchMenuID(num) {
  for (const menus of menuRS) {
    if (menus.menuID === num) return menus.item;
  }
}

function matchDrinkID(num) {
  for (const menus of drinkMenuRS) {
    if (menus.drinkID === num) return menus.item;
  }
}

function menuCost(num) {
  for (const menusCost of menuRS) {
    if (menusCost.menuID === num) return menusCost.cost;
  }
}

function drinkCost(num) {
  for (const drinksCost of drinkMenuRS) {
    if (drinksCost.drinkID === num) return drinksCost.cost;
  }
}

let costMenu = 0;

let costDrinkMenu = 0;

for (const parties of partyRS) {
  test =
    test +
    `<h2><span>Party ID: </span>${parties.partyID}</h2>
    <div>
    <h3><span>Party Size: </span>${parties.partySize}</h3>
    <h3><span>Table Number: </span>${parties.tableID}</h3>
    </div>`;
  for (const orders of parties.order) {
    // test = test + `<h4><span>Order ${numRS++}:</span> ${matchMenuID(orders.menuID)} & ${matchDrinkID(orders.drinkID)}</h4>`
    test =
      test +
      `<h4><span>Order ${numRS++}:</span></h4> <ul><li>${matchMenuID(
        orders.menuID
      )}</li><li>${matchDrinkID(orders.drinkID)}</li></ul>`;

    costMenu = costMenu + menuCost(orders.menuID);
    costDrinkMenu = costDrinkMenu + drinkCost(orders.drinkID);
  }
  test =
    test +
    `<h5><span>Total Cost: </span>$${parseFloat(
      costMenu + costDrinkMenu
    ).toFixed(2)}</h5>`;
  costMenu = 0;
  costDrinkMenu = 0;
}

document.getElementById('orderRob').innerHTML = test;
