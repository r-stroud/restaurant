import { getMenu, getParty, getWaiters } from './main.js';

console.log(getMenu())
console.log(getParty())
console.log(getWaiters())



const pushIntoHtml = () => {

    // get all the parties
    const parties = getParty();

    // get all the menu items
    const menus = getMenu();

    // get all the waiters
    const waiters = getWaiters();

    // get the specificy waiter we are looking for by the waiter employee id
    const waiterRobert = waiters.find((waiter) => waiter.employeeID === 4);


    // waiter = object in the array

    // declare the list of the parties that we are working with
    const PARTY_IDS = [1, 8, 9];

    // create a variable to hold the html elements with the party info
    let partyInfo = "";
    // create a variable to hold the html elements with the menu item info
    let menuInfo = "";
    // create a variable to hold the html elements with the waiter info
    let waiterInfo = "";
    // creates an empty array to hold our targeted party objects
    const myParties = [];

    for (const partyId of PARTY_IDS) {
        // defining the variable party to hold the party that we are looking for   
        let party;
        //setting the value of parties equal to a party where the party ID is equal to a party id in our list
        party = parties.find((xparty) => xparty.partyId === partyId);
        myParties.push(party);
    }


    let myPartyTickets = [];

    for (const newParty of myParties) {

        // randomizes the id for food itmes
        const partyFoodItemId = Math.round(Math.random() * (7 - 0) + 0);
        // random num 0-1 *(7-0)+0
        // rounded
        // .round = 0.2 = 0
        // .random = random number between 0 - 1

        // GOOGLE!!!!

        // randomizes the id for drink items
        const partyDrinkItemId = Math.round(Math.random() * (11 - 8) + 8);

        partyInfo = `<h2>PartyID ${newParty.partyId}</h2><h2> TableID ${newParty.tableId}</h2><h2>Party Size ${newParty.partySize} </h2><h2>Party Restrictions ${newParty.partyRestriction} </h2>`;

        menuInfo = `<h2>Menu Items</h2><div>Item: ${menus[partyFoodItemId].menuItem}</div><div>Cost: ${menus[partyFoodItemId].cost}</div><div>Item: ${menus[partyDrinkItemId].menuItem}</div><div>Cost: ${menus[partyDrinkItemId].cost}</div>`;
        // modifies the waiter info variable with the waitertaylor find funciton to push our targeted data into the string interpolation 

        waiterInfo = `<h2>First Name ${waiterRobert.firstName}</h2><h2>Last Name ${waiterRobert.lastName}</h2>`;
        //condences the looped data into one variable and pushes it into the myPartyTickets Array

        const thisTicket = `<div>${partyInfo}</div><div>${menuInfo}</div><div>${waiterInfo}</div>`;
        myPartyTickets.push(thisTicket);


    }
    return myPartyTickets;

}

const pushIntoHtmlValue = pushIntoHtml();

document.getElementById('completeOrder').innerHTML = pushIntoHtmlValue;