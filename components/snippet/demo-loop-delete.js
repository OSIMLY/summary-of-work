var allItems = [
    {id:0, name:'tom', code:'C0001', status:true},
    {id:1, name:'jimmy', code:'C0002', status:false},
    {id:2, name:'rose', code:'C0003', status:false},
    {id:3, name:'tom', code:'C0004', status:true},
    {id:4, name:'jimmy', code:'C0005', status:false},
    {id:5, name:'rose', code:'C0006', status:false}
]
var delIds = [1, 3, 5]

for (let i = 0,j = delIds.length - 1; i < j; i++) {
    allItems.splice(delIds[i], 1)
}

for (let i = delIds.length - 1; i > 0; i--) {
    allItems.splice(delIds[i], 1)
}

delItems.forEach((item) => {
    allItems.splice(allItems.indexOf(item), 1)
})