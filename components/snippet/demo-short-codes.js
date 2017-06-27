// set init value
var citys = ['beijing', 'shanghai', 'guangzhou']
var sortCitys = citys.sort()
console.log(sortCitys)

var countrys
// var sortCountrys = countrys.sort()
// console.log('without init', sortCountrys)
var sortCountrysInit = (countrys || []).sort()
console.log('with init', sortCountrysInit)

// use ?&:
var status = true
var label

if (status) {
    label = '有效'
} else {
    label = '无效'
}

label = status ? '有效' : '无效'

// use plus
console.log(+'123')
console.log(+'abc')

var isNumber = v => !isNaN(+v)
isNumber('123')
isNumber('abc')

console.log(+true)
console.log(+false)
console.log(+null)
// convert to timeStamp
var dateString = '2017/05/09 20:30'
var timeStamp = +new Date(dateString)
console.log(timeStamp)

// value equle false
0 && -0 && null && '' && false && undefined && NaN ? true : false