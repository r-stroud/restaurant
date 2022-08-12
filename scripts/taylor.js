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

const partyTE = [
    {
        partyOne: {
            partySize: 4,
            partyRestrictionId: 1,
            numberOfsplitChecks: 2,
        },
        partyTwo: {
            partySize: 8,
            partyRestrictionId: 2,
            numberOfsplitChecks: 3,
        },
        partyThree: {
            partySize: 6,
            partyRestrictionId: 3,
            numberOfsplitChecks: 1,
        },
        partyFour: {
            partySize: 2,
            partyRestrictionId: 1,
            numberOfsplitChecks: 2,
        },
        partyFive: {
            partySize: 4,
            partyRestrictionId: 1,
            numberOfsplitChecks: 1,
        },

    }

];

const partyRestrictionTE = [
    { Id: 1, restriction: 'none' },
    { Id: 2, restriction: 'gluten-free' },
    { Id: 3, restriction: 'peanut-free' },

]

const menuTE = [];

const waiterTE = [
    { id: 1, name: 'Taylor' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Robert' },
    { id: 4, name: 'Cristi' },
];


document.getElementById('taylorText').innerHTML = taylor();


function taylor() {
  return waiter.toString();
}

taylor('I am');
