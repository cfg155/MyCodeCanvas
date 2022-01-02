// ini cuman buat deklarasi kalau parameternya itu array

function x(num = []){
    let total = 0
    num.forEach(el => total += el)

    console.log(total)
}

x()