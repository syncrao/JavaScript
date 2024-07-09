const arr = [
    "hello",
    96,
    function () {
        console.log(this[0])
    }
]

for (i = 0; i < arr.length; i++) {

    if (typeof(arr[i]) === 'function') {
        arr[i]()
    } else {
        console.log(arr[i])
    }

}