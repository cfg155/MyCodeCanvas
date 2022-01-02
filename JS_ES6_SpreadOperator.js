// jadi ini namanya spread array, gunanya buat nambahin array yang udah ada ke array baru cuman pakai ... aja

let x = [1,2,3,4]
let y = [0,...x,5]

console.log(y) // [ 0, 1, 2, 3, 4, 5 ]

// kalau dicoba kyk gini hasilnya 
a = [9,9,9,9,9]
b = [1,2,a]

console.log(b) // out: [ 1, 2, [ 9, 9, 9, 9, 9 ] ]
