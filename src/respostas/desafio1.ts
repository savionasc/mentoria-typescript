// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}

//
class Funcionario {
    constructor(codigo: number, nome: string){
        this.codigo = codigo 
        this.nome = nome
    }
    codigo: number;
    nome: string;
}

//É 10, é o João, é 10, é o João. "João 10!"
const funcionarioClasse: Funcionario = new Funcionario(10, 'João');