//Union Types (múltiplos types)

function ageShow(age: string | number) {
    if(typeof age == 'string') {
        console.log(age.toUpperCase());
    } else {
        console.log(age);
    }
}

ageShow(90);
ageShow("90");