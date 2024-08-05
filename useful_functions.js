function remove(array, index) {
            return array.slice(0, index).concat(array.slice(index+1))
}
module.exports = remove;

