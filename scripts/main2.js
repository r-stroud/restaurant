export const menu = [
    {
        menuId: 1,
        menuItem: 'barbeque chicken pizza',
        cost: 20.0,

    },
    {
        menuId: 2,
        menuItem: 'everything pizza',
        cost: 18.0,
    },
    {
        menuId: 3,
        menuItem: 'blue cheese burger',
        cost: 10.99,
    },
    {
        menuId: 4,
        menuItem: 'bacon cheeseburger',
        cost: 11.99,
    },
    {
        menuId: 5,
        menuItem: 'carne asada taco',
        cost: 3.0,
    },
    {
        menuId: 6,
        menuItem: 'chicken quesadilla',
        cost: 4.25,
    },
    {
        menuId: 7,
        menuItem: 'caesar salad',
        cost: 11.25,
    },
    {
        menuId: 8,
        menuItem: 'cobb salad',
        cost: 12.99,
    },
    {
        menuId: 9,
        menuItem: 'water',
        cost: 1.99,
    },
    {
        menuId: 10,
        menuItem: 'coke product',
        cost: 2.99,
    },
    {
        menuId: 11,
        menuItem: 'coffee',
        cost: 3.99,
    },
    {
        menuId: 12,
        menuItem: 'beer',
        cost: 4.99,
    },
];

export const party = [
    { partyId: 1, tableId: 1, partySize: 2, partyRestriction: 'none', employeeID: 4 },

    // Taylor start
    { partyId: 2, tableId: 2, partySize: 4, partyRestriction: 'gluten' },
    { partyId: 3, tableId: 3, partySize: 5, partyRestriction: 'lactose' },
    { partyId: 4, tableId: 4, partySize: 4, partyRestriction: 'none' },
    // Taylor end

    // Alex start
    { partyId: 5, tableId: 5, partySize: 6, partyRestriction: 'none' },
    { partyId: 6, tableId: 6, partySize: 8, partyRestriction: 'none' },
    { partyId: 7, tableId: 7, partySize: 2, partyRestriction: 'none' },
    // Alex end

    { partyId: 8, tableId: 8, partySize: 6, partyRestriction: 'none', employeeID: 4 },
    { partyId: 9, tableId: 9, partySize: 2, partyRestriction: 'none', employeeID: 4 },


    // Cristi start
    { partyId: 10, tableId: 10, partySize: 4, partyRestriction: 'none' },
    { partyId: 11, tableId: 11, partySize: 2, partyRestriction: 'none' },
    { partyId: 12, tableId: 12, partySize: 4, partyRestriction: 'none' },
    // Cristi end
];

const partSix = party.find(hat => hat.partyId === 2)


const partRestriction = [
    {
        restrictionId: 1,
        restriction: "none"
    },
    {
        restrictionId: 2,
        restriction: "gluten"
    },
    {
        restrictionId: 3,
        restriction: "lactose"
    },
]

const randomDrinkOrder = (min = 9, max = 13) => {
    let difference = max - min
    let rand = Math.random()
    rand = Math.floor(rand * difference)
    rand = rand + min
    return rand
}


const orders = [
    {
        orderId: 1,
        tableId: 1,
        employeeID: 4,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 1,
        tableId: 1,
        employeeID: 4,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 2,
        employeeID: 4,
        tableId: 8,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },

    {
        orderId: 1,
        tableId: 9,
        employeeID: 4,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    },
    {
        orderId: 1,
        tableId: 9,
        employeeID: 4,
        menuId: [Math.floor(Math.random() * 8) + 1, randomDrinkOrder()]

    }

]


export const waiters = [
    {
        employeeID: 1,
        firstName: 'Cristi',
        lastName: 'Neames',
    },

    {
        employeeID: 2,
        firstName: 'Alex',
        lastName: 'Cueto',
    },
    {
        employeeID: 3,
        firstName: 'Taylor',
        lastName: 'Evans',
    },
    {
        employeeID: 4,
        firstName: 'Robert',
        lastName: 'Stroud',
    },
];

export const getMenu = () => {
    const copyOfMenu = menu.map((item) => ({ ...item }));
    return copyOfMenu;
};

export const getParty = () => {
    const copyOfParty = party.map((item) => ({ ...item }));
    return copyOfParty;
};

export const getWaiters = () => {
    const copyOfWaiters = waiters.map((item) => ({ ...item }));
    return copyOfWaiters;
};

export const getOrders = () => {
    const copyOfOrders = orders.map((item) => ({ ...item }));
    return copyOfOrders
}