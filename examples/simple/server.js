var dnode = require('dnode');

var server = dnode(function (remote, conn) {
    this.zing = function (n, cb) { cb(n * 100) };
});
server.listen(7070);
