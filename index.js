//var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

var Personas = [
    {
        nombre: 'Michael',
        edad: 37,
    },
    {
        nombre: 'John',
        edad: 30, 
    },
    {
        nombre: 'David',
        edad: 27,
    }
];

console.log(Personas[1].edad);
console.log(Personas[0].nombre);
function NombreYaño(){
    for(let i = 0; i<Personas.length; i++){
        console.log(Personas[i].nombre + ' - ' + Personas[i].edad);
    }
}
NombreYaño(Personas);
function MayoresEdad(){
    for(let i = 0; i<Personas.length; i++){
        if(Personas[i].edad > 18){
            console.log(Personas[i].nombre);
        }
    } 
}
MayoresEdad();




































//Class:
console.log('Lo siguiente esta hecho con clases')
class Usuarios{
    constructor(name, age){
        this.name = name,
        this.age = age;
    }
    nombreyEdad(){
        return this.name + ' ' + this.age; 
    }
}

let Michael = new Usuarios('Michael', 37);
let John = new Usuarios('John', 30);
let David = new Usuarios('David', 27);

console.log(John.age);
console.log(Michael.name);



console.log(Michael, John, David.nombreyEdad());
