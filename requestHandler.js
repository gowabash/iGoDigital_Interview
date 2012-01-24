/*
is_even = (x)->
  if (x % 2 == 0) then true else false

fibonacci = (limit)->
  terms = []
  i = 1
  while i <= limit
    switch terms.length
      when 0 then terms.push(1)
      when 1 then terms.push(2)
      else terms.push(terms[terms.length - 1] + terms[terms.length - 2])
    i++
  return terms

solve = (limit)->
  sum = 0
  terms = fibonacci(limit)
  sum += term for term in terms when is_even(term)
  return sum
*/
var f,ie,s;ie=function(x){if(x%2===0){return true}else{return false}};f=function(l){var i,ts;ts=[];i=1;while(i<=l){switch(ts.length){case 0:ts.push(1);break;case 1:ts.push(2);break;default:ts.push(ts[ts.length-1]+ts[ts.length-2])}i++}return ts};s=function(l){var m,t,ts,_i,_len;m=0;ts=f(l);for(_i=0,_len=ts.length;_i<_len;_i++){t=ts[_i];if(ie(t))m+=t}return m};

function fib_sum(response, params) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("<html><head><title>iGoDigital Interview</title></head><body>");
    response.write("<h1>Fibonacci Test</h1>");
    if params.length !=0 {
        for (var i in params) {
            response.write("<h2>Results:</h2>");
            response.write("The limit is: <b>" + params[i] + "</b><br />");
            response.write("The answer is: <b>" + s(params[i]) + "</b><br />");
        }
    }
    response.write("</body></html>");
    response.end();
}
exports.fib_sum = fib_sum;