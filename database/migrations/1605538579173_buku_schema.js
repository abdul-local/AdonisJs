'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BukuSchema extends Schema {
  up () {
    this.create('bukus', (table) => {
      table.increments()
      table.string('judul',60).notNullable(),
      table.integer('tahun',4).notNullable(),
      table.text('descriptions').nullable(),
      table.timestamps()
    })
  }

  down () {
    this.drop('bukus')
  }
}

module.exports = BukuSchema
