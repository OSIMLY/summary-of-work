var a = { prop: 'val' }
var b = a
a.prop = 'nothing'
console.log(b.prop)

var example = {
    a: null,
    b: 123,
    c: "string",
    d: [1, 2, 3],
    e: {
        id: 1,
        name: "OK",
        method: function () {
            console.log('hello')
        }
    }
}

let data = {
    name: 'Frank',
    age: 22,
    url: 'http://www.baidu.com',
    scores: {
        math: 66,
        program: 88,
        test: [1, 2, 3]
    },
    skills: ['vue.js', 'element', 'ES6'],
    say() {
        console.log(`My name is ${this.name}`)
    }
}

function extendCopy(p) {
    var c = {}
    for (var i in p) {
        c[i] = p[i]
    }
    c.uber = p
    return c
}

// a = extendCopy(example)
// console.log(a)

function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]); // 递归调用
        } else {
            c[i] = p[i];
        }
    }
    return c;
}
var a
a = deepCopy(example, a)
console.log(a)

// utils.js
export const lightCopy(p) {...}
export const deepCopy(p, c) {...}
// page.js
import { lightCopy, deepCopy } from utils.js
a = { ...}
b = lightCopy(a)

// 浅拷贝
var copy = Object.assign({}, obj)

// 深拷贝
var copy = JSON.parse(JSON.stringify(obj))

var isSelected = function (row) {
    return (selection || []).indexOf(row) > -1;
}

isSelected = selection.includes(row)

var isObject = function (obj) {
    return obj !== null && typeof obj === 'object'
}

var isArray = function (arr) {
    return arr instanceof Array
}


var users = allUsers.filter(user => user.loged === true)

var a = {}
a === {}

if (Object.keys(search).length !== 0) {
    args = Object.assign({}, args, search)
}

for (let i = 0, let j = delIds.length - 1; i < j; i++) {
    allItems.splice(delIds[i], 0)
}

for (let i = delIds.length - 1; i > 0; i--) {
    allItems.splice(delIds[i], 0)
}

delItems.forEach((item) => {
    allItems.splice(allItems.indexOf(item), 0)
})

var arr
try {
    arr.forEach(a => console.log(a))
} catch (error) {
    console.log('a', error)
    throw new Error('error.')
}

[].concat(states.fixedColumns).concat(_columns.filter((column) => !column.fixed)).concat(states.rightFixedColumns)

console.time()
console.timeEnd()
console.table()

Math.abs()  // 返回参数的绝对值  
Math.ceil()  // 向上取整，接受一个参数，返回大于该参数的最小整数。 
Math.floor()  // 向下取整  
Math.max(n, n1, ...)  // 可接受多个参数，返回最大值  
Math.min(n, n1,..)  // 可接受多个参数，返回最小值  
Math.round()  // 四舍五入  
Math.random()  //返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。

Array.isArray(a)

Math.max(...temp1.map(i => i.id))

a.length  // 长度
Array.isArray()

Array.isArray(a)   // 用来判断一个值是否为数组
Array实例的方法

a.valueof()   // 返回数组本身
a.toString()  // 返回数组的字符串形式
a.push(value, vlaue....)   
// 用于在数组的末端添加一个或多个元素，
// 并返回添加新元素后的数组长度。
pop()   // 用于删除数组的最后一个元素，并返回该元素
join()
// 以参数作为分隔符，将所有数组成员组成一个字符串返回。
// 如果不提供参数，默认用逗号分隔。
concat()
// 用于多个数组的合并。它将新数组的成员，
// 添加到原数组的尾部，然后返回一个新数组，原数组不变。
shift()  // 用于删除数组的第一个元素，并返回该元素。
unshift(value)
// 用于在数组的第一个位置添加元素，
// 并返回添加新元素后的数组长度。
reverse()   // 用于颠倒数组中元素的顺序，返回改变后的数组
slice(start_index, upto_index)
// 用于提取原数组的一部分，返回一个新数组，原数组不变。
// 第一个参数为起始位置（从0开始），第二个参数为终止位置
// （但该位置的元素本身不包括在内）。
// 如果省略第二个参数，则一直返回到原数组的最后一个成员。
// 负数表示倒数第几个。
splice(index, count_to_remove, addElement1, addElement2, ...);
// 用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，
// 返回值是被删除的元素。第一个参数是删除的起始位置，
// 第二个参数是被删除的元素个数。如果后面还有更多的参数，
// 则表示这些就是要被插入数组的新元素。
sort()
// 对数组成员进行排序，默认是按照字典顺序排序。
// 排序后，原数组将被改变。如果想让sort方法按照自定义方式排序，
// 可以传入一个函数作为参数，表示按照自定义方法进行排序。
// 该函数本身又接受两个参数，表示进行比较的两个元素。
// 如果返回值大于0，表示第一个元素排在第二个元素后面；
// 其他情况下，都是第一个元素排在第二个元素前面。
map()
// 对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。
map(elem, index, arr)
// map方法接受一个函数作为参数。
// 该函数调用时，map方法会将其传入三个参数，
// 分别是当前成员、当前位置和数组本身。
forEach()
// 遍历数组的所有成员，执行某种操作,参数是一个函数。
// 它接受三个参数，分别是当前位置的值、当前位置的编号和整个数组。
filter()
// 参数是一个函数，所有数组成员依次执行该函数，
// 返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
indexOf(s)
// 返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。
// 可以接受第二个参数，表示搜索的开始位置

No.1

if (!("a" in window)) {
    var a = 1;
}
console.log(a);

while (true) { }
setTimeout(function () {
    console.log("first")
}, 0)
console.log("second")

$vm0

$('el-menu').__vue__

    < div class="finance" >
        <t8t-search></t8t-search>
        <t8t-tree></t8t-tree>
        <t8t-table></t8t-table>
</div >