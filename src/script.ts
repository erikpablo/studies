//Type e Interface: Como usar e diferenças

type User = {
    name: string, 
    age: number
}

function data(usuario: User) {
    return `Olá ${usuario.name}, você tem ${usuario.age} anos`;
}

data({
    name: "Erik",
    age: 21,
})