// set init value
var countrys
var citys = ['beijing', 'shanghai', 'guangzhou']
var sortCitys = citys.sort()
var sortCountrys = countrys.sort()

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
+new Date(dateString)

// value equle false
0 && -0 && null && '' && false && undefined && NaN ? true : false

