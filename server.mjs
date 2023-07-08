import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello duniaa');
  res.end();
}).listen(process.env.PORT);
