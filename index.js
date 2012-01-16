var server = require("./server");
var router = require("./router");

var handler = require("./requestHandler");
handler["/"] = handler.fib_sum;
handler["/fib_sum"] = handler.fib_sum;

server.start(router.route, handler);
