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

// get all the parties
const partiesCN = getParty();
// get all the menu items
const menusCN = getMenu();
// get all the waiters
const waitersCN = getWaiters();

const waiterCristi = waitersCN.find((waiter) => waiter.employeeID === 1);

// party ids I'm working with
const PARTY_IDS_CN = [10, 11, 12];

// declare variables to hold html elements
let partyInfoCN = '';
let menuInfoCN = '';
let waiterInfoCN = '';

// creates empty array to hold party objects
const myPartiesCN = [];

for (const partyid of PARTY_IDS_CN) {
  let party;
  party = partiesCN.find((x) => x.partyid === partyid);
  myPartiesCN.push(party);
}
