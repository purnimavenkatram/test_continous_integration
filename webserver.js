var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE \"html\">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>This is a test web app</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Baby step towards Kickstart continous integration!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});
 
server.listen(80);
console.log("Server is listening");
