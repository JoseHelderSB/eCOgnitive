"use strict";
class Usuario {
    constructor(Nome, CPF, email, password) {
        this.Nome = Nome;
        this.CPF = CPF;
        this.email = email;
        this.password = password;
    }
}
const user1 = new Usuario("José Helder", 12587, "helder@email.com", "senhaemail");
const user2 = new Usuario("Yamada", 9895, "yamada@email.com", "senhadeemail");
console.log(user1);
console.log(user2);
