import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// res.writeHead(404, { 'Content-Type': 'text/html' })
// res.write('<h1>Not found</h1>');

const server = http.createServer( async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not found');
      }
      
      const data = await fs.readFile(filePath);
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(data);
      res.end();

    } else {
      throw new Error('Method not allowed');
    }
  } catch (error) {
    console.log(error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.write('Server Error');
  }


  


  console.log(req.url);
  console.log(req.method);
  // console.log(req.headers);


  res.end();
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});