class Aluno {
    private nome: string;
    private idade: number;
    private matricula: string;

    constructor (nam: string, age: number, matri: string) {
        this.nome = nam;
        this.idade = age;
        this.matricula = matri;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(name: string) {
        this.nome = name;
    }

    public getIdade(): number {
        return this.idade;
    }
    public setIdade(age: number) {
        this.idade = age;
    }

    public getMatricula() {
        return this.matricula;
    }
}