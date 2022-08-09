const partyRS = [
    {
        partyID: 1,
        partySize: 4,
        tableID: 3,
        order: [
            {
                menuID: 1,
                drinkID: 3,
                partyrestrictionID: 1,
            },
            {
                menuID: 4,
                drinkID: 1,
                partyrestrictionID: 3,
            },
            {
                menuID: 6,
                drinkID: 5,
                partyrestrictionID: 1,
            },
            {
                menuID: 5,
                drinkID: 5,
                partyrestrictionID: 1,
            }
        ]
    },
    {
        partyID: 2,
        partySize: 2,
        tableID: 1,
        order: [
            {
                menuID: 1,
                drinkID: 3,
                partyrestrictionID: 1,
            },
            {
                menuID: 4,
                drinkID: 1,
                partyrestrictionID: 3,
            },
            {
                menuID: 6,
                drinkID: 5,
                partyrestrictionID: 1,
            },
            {
                menuID: 5,
                drinkID: 5,
                partyrestrictionID: 1,
            }
        ]
    }
]


// document.getElementById('taylorText').innerHTML = taylor();

const menuRS = [
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

drinkMenuRS = [
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

const partyRestrictionRS = [
    { Id: 1, restriction: 'none' },
    { Id: 2, restriction: 'gluten-free' },
    { Id: 3, restriction: 'peanut-free' },
];

let test = ""

let numRS = 1

for (const parties of partyRS) {
    test = test + `<h4>Party ID: ${parties.partyID}</h4>
    <h4>Party Size: ${parties.partySize}</h4>
    <h4>Table Number: ${parties.tableID}</h4>`
    for (const orders of parties.order) {
        test = test + `<h4>Order ${numRS++}: ${orders.menuID}, ${orders.drinkID}</h4>`
    }

}



document.getElementById("test1").innerHTML = test

for (menu of menuRS) {
    for (const parties of PartyRS) {
    }
}

if (menu.menuID)