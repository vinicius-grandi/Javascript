import http from 'http';
import { createReadStream } from 'fs';
import net from 'net';

// serving file
// http.createServer((req, res) => {
//   createReadStream('./big.file')
//     .pipe(res)
// }).listen(3000, () => console.log('listening on port 3000') );

// reverse shell lol
// node -e "process.stdin.pipe(require('net').connect(1338))"
// net.createServer(
//   (socket) => socket.pipe(process.stdout)
// ).listen(1338);
