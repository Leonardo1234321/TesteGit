class InstrumentoMusical {
    tocar (): void {};
};

class violao extends InstrumentoMusical {
    tocar(): void {
        console.log('Tocando violão...')
    }
};

class piano extends InstrumentoMusical {
    tocar(): void {
        console.log('tocando piano...')
    }
};

const instrumentos: InstrumentoMusical[] = [
    new violao(),
    new piano(),
    new violao(),
    new piano()
];

instrumentos.forEach((instrumento: InstrumentoMusical) => {
    instrumento.tocar();
})