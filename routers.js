'use strict';

module.exports = function (app) {
  const jsonku = require('./controller');

  app.route('/')
    .get(jsonku.index);

  app.route('/pengguna')
    .get(jsonku.tampildatauser);

  app.route('/pengguna/:id')
    .get(jsonku.datauserid);

  app.route('/tambah/user')
    .post(jsonku.tambahdatauser);

  app.route('/update/user')
    .put(jsonku.updatedatauser);

  app.route('/delete/user')
    .delete(jsonku.hapusdatauser);  
}
