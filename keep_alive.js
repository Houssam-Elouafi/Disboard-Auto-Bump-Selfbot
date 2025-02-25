var http = require('http');

const PORT = process.env.PORT; // DO NOT use a fallback value

if (!PORT) {
  console.error("PORT environment variable is not set!");
  process.exit(1);
}

http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
