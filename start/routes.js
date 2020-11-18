'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/','BukuController.index');

// Route.on('/').render('welcome')

// Route.get('/',()=>{
//     return 'hellow word dengan method get';
// })
// Route.post('/post/:id',(req,res)=>{
//     return `hellow word dengan method post ${req.params.id}`;
// })
// Route.put('/',()=>{
//     return 'hellow word dengan method put';
// })
// Route.delete('/',()=>{
//     return 'delte dengan method delet';
// })
// Route.patch('/',()=>{
//     return 'hellow word dengan method patch';
// })
// Route.get('/','HomeController.index');
// Route.post('/','HomeController.create');
// Route.get('/adonis','BelajaradoniController.index');
// Route.post('/adonis/post','BelajaradoniController.create');
// Route.put('/adonis/update','BelajaradoniController.update');
// Route.delete('/adonis/delete','BelajaradoniController.delete');