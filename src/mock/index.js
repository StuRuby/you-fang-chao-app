const Mock = require('mockjs');
const util = require('./util');

module.exports = function(app) {
    app.get('/user/userinfo', function(rep, res) {
        var json = util.getJsonFile('./userInfo.json');
        res.json(Mock.mock(json));
    });
};
