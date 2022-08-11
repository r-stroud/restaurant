const tablesCN = [
  { tableId: 1, partySize: 4, entree: 'Chicken', drink: 'water' },
  { tableId: 2, partySize: 8, entree: 'Pizza', drink: 'beer' },
  { tableId: 3, partySize: 6, entree: 'Tacos', drink: 'coke' },
];

const menuCN = [];

const waiterCN = [
  { id: 1, name: 'Taylor' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Robert' },
  { id: 4, name: 'Cristi' },
];

const orderStatus = ['Order Complete', 'Order in Progress'];

const htmlString = `<h1>${waiterCN[3].name}</h1>`;

document.getElementById('waiter').innerHTML = htmlString;

let tableSetup = '';

for (const table of tablesCN) {
  tableSetup =
    tableSetup +

    `<h4>table Id: ${table.tableId}</h4><p>Party Size: ${table.partySize}</p><p>Entree: ${table.entree}</p><p>Drink: ${table.drink}</p>`;


document.getElementById('tableSpace').innerHTML = tableSetup;

// for (const status of orderStatus) {
//   if (orderStatus[0]) {
//     document.getElementById('orderStatus').innerHTML = `${orderStatus[0]}`;
//   } else {
//     document.getElementById(
//       'orderStatus'
//     ).innerHTML = `<p>${orderStatus[1]}</p>`;
//   }
// }
