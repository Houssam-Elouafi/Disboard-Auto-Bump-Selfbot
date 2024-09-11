var http = require('http');

const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT} and interface 0.0.0.0`);
});
