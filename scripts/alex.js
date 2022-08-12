//this is to label the waiter name//
// const waiterAlex = [
//     { id: 1, name: 'Taylor' },
//     { id: 2, name: 'Alex' },
//     { id: 3, name: 'Robert' },
//     { id: 4, name: 'Cristi' },
//   ];
  
//   const alexString = `<h1>${waiterAlex[1].name}</h1>`;
// document.getElementById('waiter2').innerHTML = alexString;





const tablesAlex = [
    { tableId: 3, 
      partySize: 4, 
      entree: 'Chicken', 
      drink: 'water' },

    { tableId: 4, 
      partySize: 8, 
      entree: 'Pizza', 
      drink: 'beer' 
    },

    { tableId: 5, 
      partySize: 6, 
      entree: 'Tacos', 
      drink: 'coke' 
    },
  ];
  
  let tableSetup1 = '';

  for (const table of tablesAlex) {
    tableSetup1 = 
        tableSetup1 + 
        `<h4>Table: ${table.tableId}</h4> 
        <p>Party Size: ${table.partySize} Food: ${table.entree} Drinks: ${table.drink}</p>`;
  }
document.getElementById('waiterName').innerHTML = tableSetup1;  


//********************************************************************************************

// this is practice work

const foodMenuItems = [
  { menuID: 1,
    item: "Pizza",
    cost: 10.99
  },

  {menuID: 2,
   item: "Tacos",
   cost: 4.99
  },

  {menuID: 3,
   item: "Pasta",
   cost: 7.99
  },

  {menuID: 4,
    item: "Chicken Nugetts",
    cost: 5.99
  },

  {menuID: 5,
   item: "Burger",
   cost: 8.99
  },

  {menuID: 6,
   item: "Wings",
   cost: 19.99
  }
]

//****this displays only on the console and not the website
// console.log(foodMenuItems[0])



for(const food of foodMenuItems) {
  console.log(food.item)
}

let displayFood = "";

for (const food of foodMenuItems) {
  displayFood=displayFood + `<h4>${food.item}</h4>`
  document.getElementById('here').innerHTML = displayFood; 
}

for (const price of foodMenuItems) {
displayFood=displayFood + `${price.cost}`
document.getElementById(`here`).innerHTML = displayFood;
}