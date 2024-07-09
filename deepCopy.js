const obj = {
    a: 'apple',
    b: [],
    c: {},
    d: function() {
        console.log("hello")
    },
    e: true,
    f: 66
}

const copyObj = obj

obj['a'] = 'orange'

console.log(obj['a'], obj['a'])


function deepCopy(obj) {

    const keys = Object.keys(obj)
    const newObj = {}

    for(i = 0; i < keys.length; i++ ) {
        const key = keys[i]
        newObj[key] = obj[key]
    }

    return newObj;
}

newObj = deepCopy(obj)

obj['a'] = 'banana'

console.log(obj['a'], newObj['a'])