class Usuario {
    constructor(public Nome: string, public CPF: number, public email: string, public password: string){

    }
}

const user1 = new Usuario("José Helder", 12587, "helder@email.com", "senhaemail");
const user2 = new Usuario("Yamada", 9895, "yamada@email.com", "senhadeemail");

console.log(user1);
console.log(user2);
