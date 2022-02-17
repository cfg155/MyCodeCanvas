const x = [1,2,3,4,5]

x.forEach(x=>{
    console.log(x)

    if(x == 2){
        return
    }
})

// return won't work in foreach