const tableTE = [
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
];


const tayParties = [ {
    partyID: 1,
    partySize: 4,
    tableID: 3,
    order: [
        {
            menuID: 1,
            drinkID: 3,
            partyrestrictionID: 1,
        }, 
    ],
    partyID: 2,
    partySize: 5,
    tableID: 1,
    order: [
        {
            menuID: 2,
            drinkID: 2,
            partyrestrictionID: 2,
        },
    ], 
    partyID: 3,
    partySize: 6,
    tableID: 2,
    order: [
        {
            menuID: 3,
            drinkID: 1,
            partyrestrictionID: 3,
        },
    ]
}

]

const menuTE = [
    {
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
]

const drinkMenuTE = [
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
]

const partyRestrictionTE = [
    { Id: 1, restriction: 'none' },
    { Id: 2, restriction: 'gluten-free' },
    { Id: 3, restriction: 'peanut-free' },
];


let taylorTable = '';
/*let taylorTableTwo = '';
let taylorTableThree = '';*/

for (const tabletay of tayParties) {
    for (const arrayAcc of tabletay.order) {
    taylorTable = taylorTable + `<h3> Menu Item: ${arrayAcc.menuID}</h3><h3> Party Restrictions: ${arrayAcc.partyrestrictionID}</h3>`

    }
    
}


document.getElementById('table1').innerHTML = taylorTable;
/*document.getElementById('table2').innerHTML = taylorTableTwo;
document.getElementById('table3').innerHTML = taylorTableThree;*/

//table, party size, food item, drink item