const data = [
    {
        person: {
            name:'Louis',
            age:22
        }
    }
]

data.map( singleData => {
    console.log(singleData?.person?.age)
})

data[0].test = 'haha'

console.log(data)