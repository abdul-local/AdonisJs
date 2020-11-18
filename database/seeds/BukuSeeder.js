'use strict'
const moment=require('moment')
/*
|--------------------------------------------------------------------------
| BukuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database=use('Database')
class BukuSeeder {
  async run () {


    // kita gunakan faker Factory 
   await Factory.get('bukus').createMany(10)



  //  const bukus=await Database.table('bukus')
  //  .insert([
  //    {
  //      'judul':'rich and foor',
  //      'tahun':2000,
  //      'descriptions':'ini merupakan tempa to save descriptions',
  //      'created_at':moment().format('YYYY-MM-DD HH-mm-ss'),
  //      'updated_at':moment().format('YYYY-MM-DD HH-mm-ss')
      
  //    }
  //  ])
  // 
 
  
}
}

module.exports = BukuSeeder
