import { getMenu, getParty, getWaiters } from './main.js';

console.log(getMenu());
console.log(getParty());
console.log(getWaiters());


const pushIntoHtml = () => {

const parties = getParty();

const menus = getMenu();

const waiters = getWaiters();

const waiterAlex = waiters.find((waiter) => waiter.employeeID === 2); 

document.getElementById(
    "alexWaiter"
  ).innerHTML = `<h2>${waiterAlex.firstName} ${waiterAlex.lastName}</h2>`;



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

    partyInfo = `<h3><span>PartyID ${newParty.partyId}</span><span> TableID ${newParty.tableId}</span></h3><h3>Party Size ${newParty.partySize} </h3>`;

    menuInfo = `<h4>Menu Items</h4><div class ='box'><p>Item: ${menus[partyFoodItemId].menuItem}</p><p>Cost: ${menus[partyFoodItemId].cost}</p><p>Item: ${menus[partyDrinkItemId].menuItem}</p><p>Cost: ${menus[partyDrinkItemId].cost}</p><p>Party Restrictions: ${newParty.partyRestriction} </p></div>`;

    waiterInfo = `<h2>First Name ${waiterAlex.firstName}</h2><h2>Last Name ${waiterAlex.lastName}</h2>`;
       
    const thisTicket = `<div>${partyInfo}</div><div>${menuInfo}</div>`;
    myPartyTickets.push(thisTicket);
}

    return myPartyTickets;

}

const pushIntoHtmlValue = pushIntoHtml ();

document.getElementById('waiter2').innerHTML = pushIntoHtmlValue.join('<hr />');
