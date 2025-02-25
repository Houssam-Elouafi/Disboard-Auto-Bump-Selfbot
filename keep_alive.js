var http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
