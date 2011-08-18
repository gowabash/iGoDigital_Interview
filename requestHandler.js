function example(response, params) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("All your base are belong to us<br>");
    for (var i in params) {
        response.write(i + " is " + params[i] + "<br>");
    }
    response.end();
}
exports.example = example;