"use strict";

/*
Crie uma classe para implementar uma ContaCorrente. A classe deve possuir os seguintes atributos: 
número da conta, nome do correntista e saldo. Os métodos são os seguintes: alterarNome, depósito 
e saque; No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.
*/

class Account {
    #accountNumber;
    #fullName;
    #balance;
    constructor(fullName, accountNumber, balance = 0) {
        this.setName(fullName);
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    setName(fullName) {
        this.#fullName = fullName;
    }

    setDeposit(deposit) {
        this.#balance += deposit;
    }

    setWithdraw(withdraw) {
        this.#balance -= withdraw;
    }

    getName() {
        return this.#fullName;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getBalance() {
        return this.#balance;
    }
}

const person = new Account("Diego", 123);
person.setName("Amanda");
console.log(person.getName());

person.setDeposit(5000);
person.setWithdraw(250.65);
console.log(person.getBalance());
