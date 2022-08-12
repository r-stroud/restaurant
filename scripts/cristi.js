const tablesCN = [
  { tableId: 1, partySize: 4, entree: 'Chicken', drink: 'water' },
  { tableId: 2, partySize: 8, entree: 'Pizza', drink: 'beer' },
  { tableId: 3, partySize: 6, entree: 'Tacos', drink: 'coke' },
];

const waiterCN = [
  { id: 1, name: 'Taylor' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Robert' },
  { id: 4, name: 'Cristi' },
];

const orderStatus = ['Order Complete', 'Order in Progress'];

// Display waiter name
const htmlString = `<h1>${waiterCN[3].name}</h1>`;
document.getElementById('waiter').innerHTML = htmlString;

// Loop through table
let tableSetup = '';

//do not accept

document.getElementById('tableSpace').innerHTML = tableSetup;
