//Types em Objetos

function resumo(usuario: {name: string, age?: number}) {
    if(usuario.age == undefined) {
        return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.age} anos`;
    } else {
        return `Olá ${usuario.name}, tudo bem?`
    }
}

let u = {
    name: 'Erik',
    age: 21,
};

resumo(u);