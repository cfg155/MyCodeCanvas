function binarysort(arr,start,end,target){
    if(start > end) return 'Not Found'
    
    let mid = Math.floor((start + end) / 2)

    // meet condition
    if(arr[mid] == target) return mid

    if(arr[mid] < target) return binarysort(arr,mid+1,end,target)

    return binarysort(arr,start,mid-1,target)

}

let arr = [1,2,3,4,5,6,7,8,9,10]
let n = arr.length
let target = 10


console.log(binarysort(arr,0,n-1,target))