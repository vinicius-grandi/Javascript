import { pipeline, Readable, Writable, Transform } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

// const readableStream = new Readable({
//   read() {
//     this.push('Hello Dude1');
//     this.push('Hello Dude2');
//     this.push('Hello Dude3');
//     this.push(null);
//   },
// });

// const writableStram = new Writable({
//   write(chunk, encoding, cb) {
//     console.log('msg', chunk.toString());
//     cb();
//   },
// });

// await pipelineAsync(
//   readableStream,
//   // process.stdout,
//   writableStram
// );

// console.log('first proccess: 0')

const readableStream = new Readable({
  read() {
    for (let i = 0; i < 1e3; i++) {
      const data = JSON.stringify(`Jaime: ${i}`)
      this.push(data);
    }
    this.push(null);
  }
});

const writableToUpperCase = new Transform({
  transform(chunk, encoding, cb) {
    const result = String(chunk).toUpperCase();
    cb(null, result);
  }
});

await pipelineAsync(
  readableStream,
  writableToUpperCase,
  process.stdout,
  // // writableStram
);
