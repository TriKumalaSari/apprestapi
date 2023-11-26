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
        console.log(error);
    }else {
        response.ok(rows, res)
    }
   });
};

//Menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req, res){
   let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswwa = ?', [id],
    function(error, rows, fileds){
        if(eror){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};