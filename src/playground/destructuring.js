
// Object Destructuring
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName); // Penguin, Self-Published


/* Array destructuring */

// const address = ['3027 Ulysses St NE', 'Minneapolis', 'MN', '55418'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , priceMed] = item;

console.log(`A medium ${itemName} costs ${priceMed}`);