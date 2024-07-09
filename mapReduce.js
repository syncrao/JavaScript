const x = [0,1,2,3, 4, 5]

const addOne = function(x) {
    let v = x + 1
    console.log(v)
}

x.map(addOne)

function greater(num) {
     return num > 2
}


const v = x.filter(greater)

console.log(v)

function add(x, y) {
    console.log(x,y)
    return x + y
}

const a = x.reduce(add)

console.log(a)