import { Student } from "./answer"; // Name import, se fait avec un name export
import Test from "./answer"; // Default import, se fait avec un default export

const object = { 
    name: "joseph",
}
console.log(object.name);

const { name } = object;
console.log(name);

export default [
    {
        "name": "Tom",
        "age": 21
    },
    {
        "name": "Matin",
        "age": 22
    },
    {
        "name": "Thibault",
        "age": 25
    },
    {
        "name": "Alice",
        "age": 28
    },
    {
        "name": "Joseph",
        "age": 28
    },
    {
        "name": "Marine",
        "age": 28
    },
    {
        "name": "Mathieu",
        "age": 28
    },
    {
        "name": "Joseph",
        "age": 33
    },
    {
        "name": "Toto",
        "age": 41
    }
] as Student[];