var http = require('http');

const PORT = process.env.PORT || 4000; // Use Render's assigned port or fallback to 4000

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(PORT, '0.0.0.0', () => {  // Explicitly bind to 0.0.0.0
  console.log(`Server is listening on port ${PORT} and interface 0.0.0.0`);
});
