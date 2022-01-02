class Power{
    constructor(power){
        this.power = power
    }

    get getPower(){return this.power}

    set setPower(nPower){return this.power = nPower}
}

class User extends Power{
    constructor(name, age,power){
        super(power) // super dipake buat ambil attribute yang ada dari si parent yang di extend

        this.name = name,
        this.age = age,
        this.power = power
    }

    get getName(){return this.name}

    set setName(_name) {    // cara assign ini ternyata pakai "=" bukan pake () kyk java
        return this.name = _name
    }

    show(number){
        if(number%2==0) return `Great Power Comes Great Responsibility and his power and his power is ${this.power}`
    }

    static myClass(val){
        return `My Class is ${val}`
    }   // ini lu panggil si class nya bukan panggil nama objek
}

const me = new User('Louis Leonardo', 21,'Fire')

console.log(me)
console.log(me.getName)

console.log(me.show(2))

me.setName = 'HAHAH'
console.log(me.getName)
console.log(User.myClass('2B'))

const Student = {
    name:'Bob',
    age:18,

    get getName(){
        return this.name;
    },

    set setName(name){
        return this.name = name 
    }

    
}
console.log(Student.getName)
Student.setName = 'Jane'
console.log(Student)

// perbedaan dari 2 diatas adalah kalau class artinya ada objek lbih dari 1 dengan attribute yang sama sedangkan yang bawah itu cuman objek biasa atau ya cuman bisa 1 karena dia gk ada konstruktor sehingga hrus lu assign segera