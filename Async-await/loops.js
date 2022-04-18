const axios = require('axios');
// function sleep(ms) {
//   return new Promise((accept) => {
//     setTimeout(() => {
//       accept();
//     }, ms);
//   });
// }

// async function counter() {
//   let count = 5;
//   while (count > 0) {
//     console.log(count);
//     count -= 1;
//     await sleep(1000);
//   }
//   console.log('liftoff');
// }

// counter().then(() => {
//   //
// });

// async function getPosts() {
//   const posts = await axios.get('http://localhost:3000/posts');
//   console.log(posts.data);
// }

// getPosts();

const arr = ['salt', 'pepper', 'sage', 'rosemary'];

const newArr = [];

arr.forEach((elem) => {
  let k = `add ${elem}`;
  newArr.push(k);
});

console.log(newArr);
