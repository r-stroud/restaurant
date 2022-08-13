const tablesAlex = [
    { tableId: 3, 
      partySize: 4, 
      entree: 'Chicken, Pizza, Tacos', 
      drink: 'water, 2 sodas, 1 wine', 
      howMuch: '$25.43'
    },
      
    { tableId: 4, 
      partySize: 8, 
      entree: '2 Pizzas, 2 Tacos, Pasta, 3 Burritos', 
      drink: '4 beers, 1 water, 1 wine, 2 coffees', 
      howMuch: '$47.99'
    },

    { tableId: 5, 
      partySize: 6, 
      entree: '3 Tacos, 3 Pizzas', 
      drink: '6 cokes', 
      howMuch: '$30.18'
    },
  ];
  
  let tableSetup1 = '';

  for (const table of tablesAlex) {
    tableSetup1 = 
        tableSetup1 + 
        `<h2>Table: ${table.tableId}</h2> 
        <p>Party Size: ${table.partySize}</p>
        <p>Food: ${table.entree}</p>
        <p>Drinks: ${table.drink}</p>`
        <h4>Total Price: ${table.howMuch}</h4>`;
  }
document.getElementById('waiterName').innerHTML = tableSetup1;  


//********************************************************************************************

// this is practice work

// const foodMenuItems = [
//   { person: 1,
//     item: "Pizza",
//     cost: 10.99
//   },

//   {person: 2,
//    item: "Tacos",
//    cost: 4.99
//   },

//   {person: 3,
//    item: "Pasta",
//    cost: 7.99
//   },

//   {person: 4,
//     item: "Chicken Nugetts",
//     cost: 5.99
//   },

//   {person: 5,
//    item: "Burger",
//    cost: 8.99
//   },

//   {person: 6,
//    item: "Wings",
//    cost: 19.99
//   }
// ]

// //****this displays only on the console and not the website
// // console.log(foodMenuItems[0])


// for(const food of foodMenuItems) {
//   console.log(food.item)
// }

// let displayOrder = "";

// for (const food of foodMenuItems) {
//   displayOrder=displayOrder + `<h2>${food.item}</h4><h4>${food.cost}</h4>`
// }


  
//   document.getElementById('here').innerHTML = displayOrder; 


// // // this is as referrence for price loop

// document.getElementById(`here`).innerHTML = displayFood;