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

//Generating forumula derived from the recursion is the least computationally expensive.

//For now this has a hard limit of 1474 because of javascripts integer limit of 1x10^(308).  Thinking of ways to get around this.
//Without this limit you could get arbitrarily large finite fibonacci numbers with relative speed.

function fib_sum(response, params) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    for (var i in params) {
        var N=params[i];
        var phi=(1+Math.sqrt(5))/2;
        var fib=(Math.pow(phi,N)-(Math.cos(N*Math.PI)*Math.pow(phi,-N)))/Math.sqrt(5);
        var fibn=Math.round(fib);
        response.write("The "+N+"th Fibonnaci number is "+fibn.toString()+".<br />");
    }
    response.end();
}
exports.fib_sum = fib_sum;