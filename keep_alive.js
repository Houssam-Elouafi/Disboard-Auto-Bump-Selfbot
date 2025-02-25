var http = require('http');

const PORT = process.env.PORT || 4000; // Use 4000 as a fallback

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
