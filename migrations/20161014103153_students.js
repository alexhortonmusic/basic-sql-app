'use strict'

const knex = require('knex')

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('Students', (table) => {
      table.increments();
      table.string('FirstName')
      table.string('LastName')
  })
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Students')
};
