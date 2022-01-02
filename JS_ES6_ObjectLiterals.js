// ini ngambil dari referensi folder Javascript/ES6, cuman buat belajar lebih,

// Object litarals tu mirip la sama destructure array bikin alias buat attribute atau value dari array sedangkan ini buat function

function x(data) {
    const {fullname,age} = data

    const myData = {
        fullname,
        age,
        state:'Ina'
    }

    console.log(myData)
}

x({fullname:"Louis",age:21})

