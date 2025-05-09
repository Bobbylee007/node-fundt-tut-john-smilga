// npm - global command, comes with node
// npm -- version or --v

// local dependency -use it in this or a particular project
// npm i <packageName> or npm install <packageName>

// global dependency - use it any where or any project
// npm - inatall -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach  (create package.json in the root, create properties etc)
// npm init (step by step, press enter ti skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


// const sum = 12 + 12;
// console.log(sum)