let bubblesort = (...arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }

    return arr
}
const start = new Date().getMilliseconds()
// sort ascending
console.log(bubblesort(5,1,6,3,2,9,8,4,2))
const end = new Date().getMilliseconds()

console.log(`Time : ${end-start}ms`)
