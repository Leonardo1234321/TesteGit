class Animal {
    emitirSom(): void{
        console.log('Som do Animal');
    };
};

class Gato extends Animal {
    emitirSom(): void {
        console.log('Miau');
    }
};

class Cachorro extends Animal {
    emitirSom(): void {
        console.log('Latido au au')
    }
};