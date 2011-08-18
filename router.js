function route(pathname, handle, response, params) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, params);
    }
    else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("Big Bad Error");
        response.end();
    }
}
exports.route = route;