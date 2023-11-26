'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Rest Api Ku Berjalan!",res) 
};

//Menampilkan semua data mahasiswa
exports.tampilsemuadatamahasiswa = function(req,res){
   connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
    if(eror){
        connection.log(error);
    }else {
        response.ok(rows, res)
    }
   });
};