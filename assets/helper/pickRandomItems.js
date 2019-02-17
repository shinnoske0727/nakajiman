export default (array, _times) => {
    let times = 0
    const resultArray = []
    while (times < _times) {
        const randomVal = Math.floor(Math.random() * array.length)
        if (resultArray.indexOf(randomVal) === -1) {
            resultArray.push(randomVal)
            times++
        }
    }
    return resultArray.map(result => array[result])
}
