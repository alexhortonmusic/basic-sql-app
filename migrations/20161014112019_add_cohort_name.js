'use strict';

const knex = require('knex')

module.exports.up = (knex, Promise) => {
  return knex.schema.table('Students', (table) => {
  	table.integer('Cohort')
  })
};

module.exports.down = (knex, Promise) => {
  return knex.table('Students', (table) => {
  	table.dropColumn('Cohort')
  })
}
