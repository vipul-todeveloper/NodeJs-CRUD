'use strict';

var user = require('../controllers/userCtrl');

module.exports = function(app) {
    app.route('/user')
        .get(user.list)
        .post(user.create)
        .put(user.update);
    app.route('/user/:userId')
        .get(user.findOne)
        .delete(user.delete);
};