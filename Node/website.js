const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("<h1>This is ayush</h1> <p> how u doin?</p>");
  }
  else if(req.url=="/about"){
    res.end("<h1>About ayush</h1> <p> how u doin </p>");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
