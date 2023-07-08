import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello duniazz');
  res.end();
}).listen(process.env.PORT);
