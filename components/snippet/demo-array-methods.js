var selection = [
    {id:1, name:'tom', code:'C0001', status:true},
    {id:2, name:'jimmy', code:'C0002', status:false},
    {id:3, name:'rose', code:'C0003', status:false}
]

var row = selection[1]
// is in array
var isSelected = function (row) {
    return (selection || []).indexOf(row) > -1;
}
console.log(isSelected(row))
// short in ES7
console.log(selection.includes(row))

// use filter
selection.filter((row) => row.status === true)