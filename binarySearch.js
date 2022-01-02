let binarySearch = (arr,start,end,target) => {
    if(start > end) return 'Not Found' // kalau gk ada diketemuin target

    // pertama cari dulu mid nya 
    let mid = Math.floor((start + end) / 2)

    // kalau ketemu kondisi
    if(arr[mid] == target) return mid

    // kalau mid < target
    if(arr[mid] < target) return binarySearch(arr,mid+1,end,target)

    // kalau mid > target
    return binarySearch(arr,start,mid-1,target)
}

let arr = [1,2,3,4,5,6]
console.log(binarySearch(arr,0,arr.length-1,5))
