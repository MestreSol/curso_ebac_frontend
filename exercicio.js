function Aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}

const alunos = [
    new Aluno('João', 7),
    new Aluno('Maria', 8),
    new Aluno('José', 6),
    new Aluno('Ana', 9),
    new Aluno('Carlos', 5),
    new Aluno('Mariana', 10),
    new Aluno('Paulo', 4),
    new Aluno('Marta', 3),
    new Aluno('Pedro', 2),
    new Aluno('Cristina', 1)

];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);

console.log(aprovados);


