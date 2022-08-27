import { getMenu, getParty, getWaiters } from './main.js';

// // Display waiter name
// const waiterCN = () => {
//   const waiterCristi = getWaiters();
//   let htmlWaiter = '';
//   for (const staff of waiterCristi) {
//     if (staff.employeeID === 1) {
//       htmlWaiter =
//         htmlWaiter +
//         `<h3>Employee Id: ${staff.employeeID} - ${staff.firstName} ${staff.lastName}</h3>`;
//     }
//     document.getElementById('staffId').innerHTML = htmlWaiter;
//   }
// };
// waiterCN();

// partyId = [];
// // // Loop through Party table
// let tableSetup = '';
// const partyCristi = getParty();
// for (const par of partyCristi) {
//   party = partyCristi.find((par) => par.partyId === partyId);
//   tableSetup =
//     tableSetup +
//     `<h4>Table ID: ${par.tableId}</h4><p>Party Size: ${par.partySize}</p>`;
// }
// document.getElementById('tableSpace').innerHTML = tableSetup;

// `<p>Entree: ${table.entree}</p><p>Drink: ${table.drink}</p> <p>Order Status: ${orderStatus[0]}</p>`;
const pushIntoHtml = () => {
    // get all the parties
    const partiesCN = getParty();
    // get all the menu items
    const menusCN = getMenu();
    // get all the waiters
    const waitersCN = getWaiters();

    // find waiter by employee id
    const waiterTaylor = waitersCN.find((waiter) => waiter.employeeID === 3);

    document.getElementById("taylorTitle").innerHTML = `<h2>${waiterTaylor.firstName} ${waiterTaylor.lastName}</h2>`;

    // party ids Cristi is working with
    const PARTY_IDS_CN = [2, 3, 4];

    // declare variables to hold html elements
    let partyInfoCN = '';
    let menuInfoCN = '';
    let waiterInfoCN = '';

    // creates empty array to hold party objects
    const myPartiesCN = [];

    for (const partyid of PARTY_IDS_CN) {
        let party;
        party = partiesCN.find((x) => x.partyId === partyid);
        myPartiesCN.push(party);
    }
    let myPartyTickets = [];

    for (const party of myPartiesCN) {
        // randomizes the index of food itmes
        const partyFoodItemId = Math.round(Math.random() * (7 - 0) + 0);
        // randomizes the index of drink items
        const partyDrinkItemId = Math.round(Math.random() * (11 - 8) + 8);

        // display info from party array
        partyInfoCN = `<h3><span>PartyID ${party.partyId}</span><span>TableID ${party.tableId}</span></h3><h3>Party Size ${party.partySize} </h3>`;

        // display info from menu array
        menuInfoCN = `<h4>Order: </h4><div class='box'><p>Item: ${menusCN[partyFoodItemId].menuItem}</p><p>Cost: ${menusCN[partyFoodItemId].cost}</p><p>Item: ${menusCN[partyDrinkItemId].menuItem}</p><p>Cost: ${menusCN[partyDrinkItemId].cost}</p><p>Party Restrictions: ${party.partyRestriction} </p></div>`;

        // display info from waiter table
        //waiterInfoCN = `<p>First Name ${waiterCristi.firstName}<///p><p>Last Name ${waiterCristi.lastName}</p>`;
        //condences the looped data into one variable and pushes it into the myPartyTickets Array

        // info from all 3 tables
        const thisTicket = `<p>${partyInfoCN}</p><p>${menuInfoCN}</p>`;
        myPartyTickets.push(thisTicket);
    }
    return myPartyTickets;
};
// run function
const pushIntoHtmlValue = pushIntoHtml();

// add to screen
document.getElementById('table1').innerHTML = pushIntoHtmlValue.join('<hr />');