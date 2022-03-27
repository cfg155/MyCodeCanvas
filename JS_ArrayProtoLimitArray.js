const x = [1,2,3,4,5,6,7,8,9,10]

// limit to 5 print
const y = x.filter((num,idx,arr) => {
    if(idx > 5) return

    return num
})

console.log(y)