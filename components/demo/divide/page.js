import { lightCopy, deepCopy } from utils.js
var demoData = {
    a: 1,
    b: 'str',
    c: true
}
var lightCopyData = lightCopy(demoData)
console.log(lightCopyData)