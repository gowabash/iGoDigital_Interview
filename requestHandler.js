function fib_sum(response, params) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("All your base are belong to us<br>");
    
    for (var i in params) {
        response.write("The " + i + " is " + params[i] + "<br>");
    }
    for (i in params) 
    {
        if (params[i] > 0)
        {
            // declare variables for fib sequence and display, 0 + 1 ensures first term is 1
            var fibOne = 0;
            var fibTwo = 1;
            var fibThree = 0;
            
            var evenSum = 0;
            
            // loop sequence numbers
            for (var y = 0; y < params[i]; y ++)
            {
                fibThree = fibOne + fibTwo;
                
                // test if term in sequence is even, if so, add it to running total
                if (fibThree % 2 === 0)
                {
                    evenSum += fibThree;   
                }
                
                // set sequence variables to new values for next time through loop
                fibOne = fibTwo;
                fibTwo = fibThree;
            }
            
            response.write("The sum of the even terms in the sequence is " + evenSum);
        }
        else
        {
            response.write("Please make sure that the limit value is a whole number greater than zero.");
        }
    }
    response.end();
}

exports.fib_sum = fib_sum;
