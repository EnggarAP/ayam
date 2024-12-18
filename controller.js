'use strict';

const response = require('./res');
const connection = require('./koneksi');
const e = require('express');

exports.index = function (req, res) {
  res.send("<h1>REST API Sipekat</h1>");
};

//menampilkan data user
exports.tampildatauser = function (req, res) {
  connection.query('SELECT * FROM user', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//data user berdasarkan id
exports.datauserid = function (req, res) {
  const id = req.body.id;
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
  const id_user = req.body.id_user;
  const nama = req.body.nama;
  const email = req.body.email;
  const nomor_hp = req.body.nomor_hp;
  const tanggalLahir = req.body.tanggalLahir;
  const password = req.body.password;

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
  const id_user = req.body.id_user;
  const nama = req.body.nama;
  const email = req.body.email;
  const nomor_hp = req.body.nomor_hp;
  const tanggalLahir = req.body.tanggalLahir;
  const password = req.body.password;

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
  const id = req.body.id_user;
  connection.query('DELETE FROM user WHERE id_user = ?', [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Dihapus", res);
      }
    });
}
