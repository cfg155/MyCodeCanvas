// ini ngambil dari referensi folder Javascript/ES6, cuman buat belajar lebih,

// Destructure alias

// let x = {
//     fullname:'test',
//     lastname:'tust'
// }
// const {fullname: fn,lastname: ln} = x
// console.log(fn + ln)

// jadi tuh bisa kita pake alias untuk panggil attribute object, mungkin bisa dipakai kalau ada nama yang kepanjangan atau susah

// Destructure Array
let x = [1,2]
// let [x1,x2,x3] = x

// jadi tu object ataupun array juga bisa dipake cara kyk gini yang penting di jabarin aja, kalau buat variable yang gk ada element array di dalamnya bakalan cetak undefined 

// swap with destructuring array
let [a,b] = x

x = [b,a]
console.log(x)

