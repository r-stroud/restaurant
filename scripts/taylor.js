/*const tableTE = [
    { tableId: 1, numberOfSeats: 4, Booth: true },

    { tableId: 2, numberOfSeats: 8, Booth: false },

    { tableId: 3, numberOfSeats: 4, Booth: true },

    { tableId: 4, numberOfSeats: 4, Booth: true },

    { tableId: 5, numberOfSeats: 8, Booth: false },

    { tableId: 6, numberOfSeats: 8, Booth: false },

    { tableId: 7, numberOfSeats: 8, Booth: false },

    { tableId: 8, numberOfSeats: 4, Booth: true },

    { tableId: 9, numberOfSeats: 4, Booth: true },

    { tableId: 10, numberOfSeats: 4, Booth: true },

    { tableId: 11, numberOfSeats: 4, Booth: true },

    { tableId: 12, numberOfSeats: 4, Booth: true },
];*/

/*const menuTE = [
    {
<<<<<<< HEAD
        menuID: 1,
        item: "Everything Pizza",
        cost: 15.99
    },
    {
        menuID: 2,
        item: "Everything Burger",
        cost: 6.99
    },
    {
        menuID: 3,
        item: "Everything Quesadilla",
        cost: 4.99
    },
    {
        menuID: 4,
        item: "Everything Sandwich",
        cost: 5.99
    },
    {
        menuID: 5,
        item: "Everything Spaghetti",
        cost: 8.99
    },
    {
        menuID: 6,
        item: "A Little Bit of Everything",
        cost: 19.99
    }
]*/

/*const drinkMenuTE = [
    {
        drinkID: 1,
        item: "Water",
        cost: 0.00
    },
    {
        drinkID: 2,
        item: "Coke",
        cost: 1.99
    },
    {
        drinkID: 3,
        item: "Lemonade",
        cost: 1.99
    },
    {
        drinkID: 4,
        item: "Tea",
        cost: 1.99
    },
    {
        drinkID: 5,
        item: "Beer",
        cost: 3.99
    },
]*/

/*const partyRestrictionTE = [
    { Id: 1, restriction: 'none' },
    { Id: 2, restriction: 'gluten-free' },
    { Id: 3, restriction: 'peanut-free' },
];*/

//do not accept

// const menuTE = [];

// const waiterTE = [
//     { id: 1, name: 'Taylor' },
//     { id: 2, name: 'Alex' },
//     { id: 3, name: 'Robert' },
//     { id: 4, name: 'Cristi' },
// ];

// const tayParties = [
//     {
//         partyID: 1,
//         partySize: 4,
//         tableID: 3,
//         order: [
//             {
//                 OrderNumber: 5,
//                 FoodItem: "Spaghetti",
//                 DrinkItem: 'Dr. Pepper',
//                 partyrestriction: "Gluten",
//                 Price: 19.00,
//             },
//         ],
//     },
//     {
//         partyID: 2,
//         partySize: 5,
//         tableID: 1,
//         order: [
//             {
//                 OrderNumber: 9,
//                 FoodItem: "Everything Burger",
//                 DrinkItem: "Sweet Tea",
//                 partyrestriction: "Lactose",
//                 Price: 18.00,
//             },
//         ]
//     },
//     {
//         partyID: 3,
//         partySize: 6,
//         tableID: 2,
//         order: [
//             {
//                 OrderNumber: 12,
//                 FoodItem: "Everything Pizza",
//                 DrinkItem: "Lemonade",
//                 partyrestriction: "none",
//                 Price: 23.00,
//             },
//         ]
//     }

// ]

import {getMenu, menu, waiters} from './main.js';
import {getParty} from './main.js';
import {getWaiters} from './main.js';

console.log(getMenu());
console.log(getParty());
console.log(getWaiters());

// import function complete

const pushIntoHtml = () => {
    
    //getting the data!!!!!!!!!!!!!!!!!!!!!!

    // get all the parties
    const parties = getParty();
    // get all the menu items
    const menus = getMenu();
    // get all the waiters
    const waiters = getWaiters();



    // get the specificy waiter we are looking for by the waiter employee id
    const waiterTaylor = waiters.find((waiter) => waiter.employeeID === 3);
    // declare the list of the parties that we are working with
    const PARTY_IDS = [2, 3, 4];

    // create a variable to hold the html elements with the party info
    let partyInfo = "";
    // create a variable to hold the html elements with the menu item info
    let menuInfo = "";
    // create a variable to hold the html elements with the waiter info
    let waiterInfo = "";
    // creates an empty array to hold our targeted party objects
    const myParties = [];
    // starts our for loop and gives the for loop a list of party id
    for (const partyId of PARTY_IDS) {
        // defining the variable party to hold the party that we are looking for   
        let party;
        //setting the value of parties equal to a party where the party ID is equal to a party id in our list
        party = parties.find((xparty) => xparty.partyId === partyId);
        myParties.push(party);
    }
    // setting an empty array to push the 
    let myPartyTickets = [];
    
    for (const party of myParties) {
        
        // randomizes the id for food itmes
        const partyFoodItemId = Math.round(Math.random() * (7 - 0) + 0);
        // randomizes the id for drink items
        const partyDrinkItemId = Math.round(Math.random() * (11 - 8)+  8);
        // modifies the empty partyinfo variable to include string interpolation and the party variable that finds select parties from the get party function
        partyInfo = `<h2>PartyID ${party.partyId}</h2><h2> TableID ${party.tableId}</h2><h2>Party Size ${party.partySize} </h2><h2>Party Restrictions ${party.partyRestriction} </h2>`;
        // modifies the menuinfo variable to pull in the object from the getmenus and used the partyfood itemID to 
        menuInfo = `<h2>Menu Items</h2><div>Item: ${menus[partyFoodItemId].menuItem}</div><div>Cost: ${menus[partyFoodItemId].cost}</div><div>Item: ${menus[partyDrinkItemId].menuItem}</div><div>Cost: ${menus[partyDrinkItemId].cost}</div>`;
        // modifies the waiter info variable with the waitertaylor find funciton to push our targeted data into the string interpolation 
        waiterInfo = `<h2>First Name ${waiterTaylor.firstName}</h2><h2>Last Name ${waiterTaylor.lastName}</h2>`;
        //condences the looped data into one variable and pushes it into the myPartyTickets Array
        
        
        const thisTicket = `<div>${partyInfo}</div><div>${menuInfo}</div><div>${waiterInfo}</div>`;
        myPartyTickets.push(thisTicket);
    }
    //returns the array
    return myPartyTickets;
}
// sets the value equal to the value of the returned funcion
const pushIntoHtmlValue = pushIntoHtml();
// pushes everything into the html
document.getElementById('table1').innerHTML = pushIntoHtmlValue.join('<hr />');