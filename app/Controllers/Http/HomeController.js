'use strict'

class HomeController {
    index({request,response}){
        const data=request.get();
        console.log(data);
        return true;
    }
    // index({view}){
    //     return view.render('index')
    // }
    create({request,response}){
        // const data=request.post();
        // penggunaan method only hanya membaca data sesui yang di inginakn
        // const data=request.only(['name','jurusan']);

        // pengunaan method except
        // const data=request.except(['name','jurusan']);
        
        // menggunakan method input
        const data=request.input('nama','tidak ada yang di cari')
        console.log(data);
        return 'berhasil post data'
    }
}

module.exports = HomeController
