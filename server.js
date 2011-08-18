var http = require("http");
var url = require("url");

function start(route, handler) {
    function onRequest(request, response) {
        var req_url = url.parse(request.url, true);
        var pathname = req_url.pathname;
        var params = req_url.query;
        route(pathname, handler, response, params);
    }
    http.createServer(onRequest).listen(process.env.C9_PORT);
}
exports.start = start;