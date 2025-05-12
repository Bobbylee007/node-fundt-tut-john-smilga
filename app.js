const { readFile, writeFile } = require("fs").promises

// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


//using buit-in func promisify()
const start = async() =>{
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/result-mind-grenade.txt', 
      `THIS IS AWESOME : ${first} ${second}`,
        {flag: 'a'}
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
    
  }
  
}
start()


// INITAILAZING PROMISE (wrapper functionb)

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }

// CHAINING INITAIL PROMISE ==
// (Consums promises)

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))



//using Async funct after promise is resolve or rejected ==(function that returns promises)

// const start = async() =>{
//   try {
//     const first = await getText('./content/first.txt')
//     const second = await getText('./content/second.txt')
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
    
//   }
  
// }
// start()

