import { getMenu, getParty, getWaiters } from './main.js';

// // Display waiter name
const waiterCN = () => {
  const waiterCristi = getWaiters();
  let htmlWaiter = '';
  for (const staff of waiterCristi) {
    if (staff.employeeID === 1) {
      htmlWaiter =
        htmlWaiter +
        `<h3>Employee Id: ${staff.employeeID} - ${staff.firstName} ${staff.lastName}</h3>`;
    }
    document.getElementById('staffId').innerHTML = htmlWaiter;
  }
};

waiterCN();

// // Loop through Party table
let tableSetup = '';
const partyCristi = getParty();
for (const par of partyCristi) {
  tableSetup =
    tableSetup +
    `<h4>Table ID: ${par.tableId}</h4><p>Party Size: ${par.partySize}</p>`;
}
document.getElementById('tableSpace').innerHTML = tableSetup;

`<p>Entree: ${table.entree}</p><p>Drink: ${table.drink}</p> <p>Order Status: ${orderStatus[0]}</p>`;
