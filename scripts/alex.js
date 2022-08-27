import { getMenu, getParty, getWaiters } from './main.js';

console.log(getMenu());
console.log(getParty());
console.log(getWaiters());


const pushIntoHtml = () => {

const parties = getParty();

const menus = getMenu();

const waiters = getWaiters();

const waiterAlex = waiters.find((waiter) => waiter.employeeID === 2); 

//  *********  this is to verify it works *************
// const waiterExample = waiters.find((alex) => alex.employeeID === 2);
// console.log(waiterAlex)

const PARTY_IDS = [5, 6, 7];

let partyInfo = "";

let menuInfo = "";

let waiterInfo = "";

const myParties = [];

for (const partyId of PARTY_IDS) {
    let party;
    party = parties.find((xparty) => xparty.partyId === partyId);
    myParties.push(party);
}

let myPartyTickets = [];
    
for (const newParty of myParties) {
        

    const partyFoodItemId = Math.round(Math.random() * (7 - 0) + 0);

    const partyDrinkItemId = Math.round(Math.random() * (11 - 8)+  8);

    partyInfo = `<h2>PartyID ${newParty.partyId}</h2><h2> TableID ${newParty.tableId}</h2><h2>Party Size ${newParty.partySize} </h2><h2>Party Restrictions ${newParty.partyRestriction} </h2>`;

    menuInfo = `<h2>Menu Items</h2><div>Item: ${menus[partyFoodItemId].menuItem}</div><div>Cost: ${menus[partyFoodItemId].cost}</div><div>Item: ${menus[partyDrinkItemId].menuItem}</div><div>Cost: ${menus[partyDrinkItemId].cost}</div>`;

    waiterInfo = `<h2>First Name ${waiterAlex.firstName}</h2><h2>Last Name ${waiterAlex.lastName}</h2>`;
       
    const thisTicket = `<div>${partyInfo}</div><div>${menuInfo}</div><div>${waiterInfo}</div>`;
    myPartyTickets.push(thisTicket);
}

    return myPartyTickets;

}

const pushIntoHtmlValue = pushIntoHtml ();

document.getElementById('waiter2').innerHTML = pushIntoHtmlValue;
