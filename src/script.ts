//Types em Objetos

function resumo(usuario: {name: string, age: number}) {
    return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.age} anos`;
}

let u = {
    name: 'Erik',
    age: 21,
};

resumo(u);