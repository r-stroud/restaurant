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

const htmlString = `<h1>Waiter: ${waiterCN[3].name}</h1>`;
console.log(htmlString);
console.log(waiter[3].name);

document.getElementById('waiter').innerHTML = htmlString;

let tableSetup = '';
for (const table of tablesCN) {
  tableSetup =
    tableSetup +
    `<h4>table Id: ${table.tableId}</p><p>Party Size: ${table.partySize}</p><p>Entree: ${table.entree}</p><p>Drink: ${table.drink}</p>`;
}
document.getElementById('tableSpace').innerHTML = tableSetup;
