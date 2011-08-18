function example(response, params) {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("All your base are belong to us");
        response.end();
}

exports.example = example;
