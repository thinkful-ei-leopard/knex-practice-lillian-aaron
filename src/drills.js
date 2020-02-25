'use strict';
require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

// function getItemsWithText(searchTerm){
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then (result => {
//       console.log(result);
//     });
// }

// getItemsWithText('tofu');

// function getAllPaginated(pageNumber) {
//   const resultsPerPage = 6;
//   const offset = resultsPerPage * (pageNumber -1);
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .limit(resultsPerPage)
//     .offset(offset)
//     .then(result => {
//       console.log(result);
//     });
// }

// getAllPaginated(1);

// function getAllAfterDate(daysAgo) {
//   knexInstance
//     .select('name', 'price', 'date_added')
//     .from('shopping_list')
//     .where(
//       'date_added',
//       '<',
//       // eslint-disable-next-line quotes
//       knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//     )
//     .then(results => {
//       console.log(results);
//     });
// }

// getAllAfterDate(12);

function getTotalCost() {
  knexInstance
    .select('category')
    .from('shopping_list')
    .sum({ totalPrice: ['price']})
    .groupBy('category')
    .then(results => {
      console.log(results);
    });
}

getTotalCost();