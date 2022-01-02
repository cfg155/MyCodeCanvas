let mergesort = (arr = []) => {
    if(arr.length < 2) return 
    
    let mid = Math.floor(arr.length / 2)

    let leftArr = []
    let rightArr = []

    // masukin array kiri
    for(let i=0;i<mid;i++) leftArr.push(arr[i])

    // masukin array kanan
    for(let i=mid;i<arr.length;i++) rightArr.push(arr[i])

    mergesort(leftArr)
    mergesort(rightArr)

    merge(arr,leftArr,rightArr)
}

let merge = (arr = [], leftArr = [],rightArr = []) => {
    let leftsize = leftArr.length
    let rightsize = rightArr.length

    let i = 0, j=0, k=0

    while(i < leftsize && j < rightsize ){
        if(leftArr[i] < rightArr[j]){
            arr[k] = leftArr[i]
            i++
        }else{
            arr[k] = rightArr[j]
            j++
        }
        k++
    }

    // cek kalau i dan j udah keambil semua
    while(i < leftsize){
        arr[k] = leftArr[i]
        i++
        k++
    }

    while(j < rightsize){
        arr[k] = rightArr[j]
        j++
        k++
    }
}

let arr = [2,6,8,74,1,3,6,9,4,5,6,9,8,2,1,0]
let n = arr.length

mergesort(arr)

console.log(arr)