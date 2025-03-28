//Contextual Typing em funções anônimas

let names = ['erik', 'Max', 'alex', 90]


names.forEach((name) => {
    if(typeof name === 'string') {
        console.log(name.toUpperCase())
    } else {
        console.log(name)
    }
})