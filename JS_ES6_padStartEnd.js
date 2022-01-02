// jadi ini buat nambahin string kedalam string kan ada 2 parameter yg pertama kita harus masukin length dari string itu kalau ternyata string lebih gede dari yang length kita tentuin berarti gk baaklan bisa masuk string yang mau kita masukin kalau masih ada berarti tergantung tambah di start atau end
let x = "abc"
let y = x.padStart(5,'z') //out : zzabc
let z = x.padEnd(5,'z') //out : zzabc
console.log(y)
console.log(z)
