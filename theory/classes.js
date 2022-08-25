// ООП - объектно-ориентированное программирование
// Принципы ООП: 
// Инкапсуляция, наследование, полиморфизм, композиция

// get и set
// get - получить что-то
// set - установить что-то

class Person {
    #eat = true;  // private переменная, с помощью #
    #drive = false;

    constructor(name) {
        this.name = name;
    }

    say() {
        console.log('Hi, my name is: ', this.name)
    }

    get canEat() {
        return this.#eat;
    }

    set setEat(value) {
        if (typeof value === 'boolean') {
            this.#eat = value;
        } else {
            console.log('Type of you value is: ', typeof value)
        }
    }
}

const Alex = new Person('Alex');
console.log(Alex.name);
Alex.say();
console.log(Alex.canEat);
Alex.setEat = false;


class Employee extends Person {
    constructor(name, country, city) {
        super(name);
        this.country = country;
        this.city = city;
    }

    info() {
        console.log(`INFO: `, this.country, this.city)
    }

    say() {
        console.log('Hi, i am Employee!') 
        // имя метода одинаковое с Person, Логика другая
        // это полиморфизм 
    }
}

const Elena = new Employee('Elena', 'Belarus', 'Brest')
// Экземпляр класса (Elena) - это по факту обьект

// Elena.info()
// console.log(Elena.canEat)
// console.log(Alex.canEat)
// console.log(Alex)
// Elena.say();


class Proger extends Employee {
    constructor(name, country, city, profession) {
        super(name, country, city)
        this.profession = profession;
    }
}

const Oleg = new Proger('Oleg', 'Russia', 'Brynsk', 'Frontend');

console.log(Oleg);
