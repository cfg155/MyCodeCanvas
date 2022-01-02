// for each array

// let x = [1,2,3,4,5,6,7,8,9]

// for(let i in x) process.stdout.write(i+ " ")

// for each object
// let y = {a:1,b:1,c:1,}

// for(let i in y) console.log(`Key:${i} value:${y[i]}`)

// for each array object

// let z = [{a:1,b:2},{c:3,d:4}]

// function printObj(obj){
//     for(let i in obj)
//         process.stdout.write(`${i} : ${obj[i]} `)
    
//     console.log()
// }

// for(let i=0;i<z.length;i++){
//     printObj(z[i])
// }

// for of
// // jadi ini dipake kalau lu punya array trs lu masukin attribute object disitu
// let x = [1,2,3,4,5]
// x.la = "hmmm"

// // console.log(x) // out : [ 1, 2, 3, 4, 5, la: 'hmm' ]

// // for(let y in x) process.stdout.write(`${y} `) // ini bakalan hasilin key sedangkan
// console.log()

// for(let z of x) process.stdout.write(`${z} `) // ini menghasilkan value