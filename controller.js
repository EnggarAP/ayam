'use strict';

var response = require('./res');
const connection = require('./koneksi');
const e = require('express');

exports.index = function (req, res) {
  res.send("<h1>REST API Sipekat</h1>");
};

//menampilkan data user
exports.tampildatauser = async function (req, res) {
  try {
    const [rows] = await connection.query('SELECT * FROM user');
    res.json(rows);
  } catch (error) {
    console.error('Query error:', error);
    res.status(500).send('Internal Server Error');
  }
};

//data user berdasarkan id
exports.datauserid = function (req, res) {
  var id = req.body.id;
  connection.query('SELECT * FROM user WHERE id_user = ?', [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    });
};

//tambah data user
exports.tambahdatauser = function (req, res) {
  var id_user = req.body.id_user;
  var nama = req.body.nama;
  var email = req.body.email;
  var nomor_hp = req.body.nomor_hp;
  var tanggalLahir = req.body.tanggalLahir;
  var password = req.body.password;

  connection.query('INSERT INTO user (id_user, nama, email, nomor_hp, tanggalLahir, password) VALUES (?, ?, ?, ?, ?, ?)',
    [id_user, nama, email, nomor_hp, tanggalLahir, password],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Ditambahkan", res);
      }
    });
};

//update data user
exports.updatedatauser = function (req, res) {
  var id_user = req.body.id_user;
  var nama = req.body.nama;
  var email = req.body.email;
  var nomor_hp = req.body.nomor_hp;
  var tanggalLahir = req.body.tanggalLahir;
  var password = req.body.password;

  connection.query('UPDATE user SET id_user = ?, nama = ?, email = ?, nomor_hp = ?, tanggalLahir = ?, password = ? WHERE id_user = ?',
    [id_user, nama, email, nomor_hp, tanggalLahir, password, id_user],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Diupdate", res);
      }
    });
}

//hapus data user
exports.hapusdatauser = function (req, res) {
  var id = req.body.id_user;
  connection.query('DELETE FROM user WHERE id_user = ?', [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Dihapus", res);
      }
    });
}