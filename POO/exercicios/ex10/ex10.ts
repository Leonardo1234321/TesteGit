class Carro {
    marca:string;
    modelo:string;
    ano:number;

    constructor (mar: string, model: string, a:number = 2024) {
        this.marca=mar;
        this.modelo=model;
        this.ano=a;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1); // Saída: Carro { marca: 'Toyota', modelo: 'Corolla', ano: 2022 }

const carro2 = new Carro("Honda", "Civic");
console.log(carro2); // Saída: Carro { marca: 'Honda', modelo: 'Civic', ano: 2024 }

const carro3 = new Carro("Ford", "Focus");
console.log(carro3); // Saída: Carro { marca: 'Ford', modelo: 'Focus', ano: 2024 }

const carro4 = new Carro("Chevrolet", "Onix", 2021);
console.log(carro4); // Saída: Carro { marca: 'Chevrolet', modelo: 'Onix', ano: 2021 }

