/*const tableTE = [
    { tableId: 1, numberOfSeats: 4, Booth: true },

    { tableId: 2, numberOfSeats: 8, Booth: false },

    { tableId: 3, numberOfSeats: 4, Booth: true },

    { tableId: 4, numberOfSeats: 4, Booth: true },

    { tableId: 5, numberOfSeats: 8, Booth: false },

    { tableId: 6, numberOfSeats: 8, Booth: false },

    { tableId: 7, numberOfSeats: 8, Booth: false },

    { tableId: 8, numberOfSeats: 4, Booth: true },

    { tableId: 9, numberOfSeats: 4, Booth: true },

    { tableId: 10, numberOfSeats: 4, Booth: true },

    { tableId: 11, numberOfSeats: 4, Booth: true },

    { tableId: 12, numberOfSeats: 4, Booth: true },
];*/



/*const menuTE = [
    {
<<<<<<< HEAD
        menuID: 1,
        item: "Everything Pizza",
        cost: 15.99
    },
    {
        menuID: 2,
        item: "Everything Burger",
        cost: 6.99
    },
    {
        menuID: 3,
        item: "Everything Quesadilla",
        cost: 4.99
    },
    {
        menuID: 4,
        item: "Everything Sandwich",
        cost: 5.99
    },
    {
        menuID: 5,
        item: "Everything Spaghetti",
        cost: 8.99
    },
    {
        menuID: 6,
        item: "A Little Bit of Everything",
        cost: 19.99
    }
]*/


/*const drinkMenuTE = [
    {
        drinkID: 1,
        item: "Water",
        cost: 0.00
    },
    {
        drinkID: 2,
        item: "Coke",
        cost: 1.99
    },
    {
        drinkID: 3,
        item: "Lemonade",
        cost: 1.99
    },
    {
        drinkID: 4,
        item: "Tea",
        cost: 1.99
    },
    {
        drinkID: 5,
        item: "Beer",
        cost: 3.99
    },
]*/

/*const partyRestrictionTE = [
    { Id: 1, restriction: 'none' },
    { Id: 2, restriction: 'gluten-free' },
    { Id: 3, restriction: 'peanut-free' },
];*/
 
//do not accept


const menuTE = [];

const waiterTE = [
    { id: 1, name: 'Taylor' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Robert' },
    { id: 4, name: 'Cristi' },
];


const tayParties = [ 
    {
    partyID: 1,
    partySize: 4,
    tableID: 3,
    order: [
        {
            OrderNumber: 5,
            FoodItem: "Spaghetti",
            DrinkItem: 'Dr. Pepper',
            partyrestriction: "Gluten",
            Price: 19.00,
        }, 
    ],
}, 
{
    partyID: 2,
    partySize: 5,
    tableID: 1,
    order: [
        {   
            OrderNumber: 9,
            FoodItem: "Everything Burger",
            DrinkItem: "Sweet Tea",
            partyrestriction: "Lactose",
            Price: 18.00,
        },
    ]
}, 
{
    partyID: 3,
    partySize: 6,
    tableID: 2,
    order: [
        {   
            OrderNumber: 12,
            FoodItem: "Everything Pizza",
            DrinkItem: "Lemonade",
            partyrestriction: "none",
            Price: 23.00,
        },
    ]
}

]

let tableNum = 0;
let taylor = '';


for (const tabletay of tayParties) {
    taylor = taylor + `<h1> Table Number ${tabletay.tableID}</h1>`
    for (const arrayAcc of tabletay.order) {
    taylor = taylor + `<h2> Food Item: ${arrayAcc.OrderNumber}</h2><h2> Food Item: ${arrayAcc.FoodItem}</h2><h2> Food Item: ${arrayAcc.DrinkItem}</h2><h2> Party Restrictions: ${arrayAcc.partyrestriction}</h2><h2> Price $${arrayAcc.Price}</h2>`
    }   
}

document.getElementById('table1').innerHTML = taylor;
