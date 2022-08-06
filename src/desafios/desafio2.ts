// Desafio 2

interface PessoaDesafio2 {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1 = {} as PessoaDesafio2;
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = "Atriz"

let pessoa2 = {} as PessoaDesafio2
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: PessoaDesafio2 = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: PessoaDesafio2 = {
    nome : "Pessoa",
    idade : 19,
    profissao : "Padeiro"
}