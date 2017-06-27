export const lightCopy = function(obj) {
    return Object.assign({}, obj)
}
export const deepCopy = function(obj) {
    return JSON.parse(JSON.stringify(obj))
}