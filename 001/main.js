"use strict";

/*
Crie uma classe para representar uma Pessoa com os atributos privados de nome, data de nascimento e
altura. Crie os métodos públicos necessários para getters e setters e também um método para imprimir
todos dados de uma pessoa. Crie um método para calcular a idade da pessoa.
*/

class Person {
    #fullName;
    #birthyear;
    #height;

    constructor(fullName, birthyear, height) {
        this.#setFullName(fullName);
        this.#setBirthyear(birthyear);
        this.#setHeight(height);
    }

    #setFullName(fullName) {
        this.#fullName = fullName;
    }

    #setBirthyear(birthyear) {
        this.#birthyear = birthyear;
    }

    #setHeight(height) {
        this.#height = height;
    }

    getFullName() {
        return this.#fullName;
    }

    getBirthyear() {
        return this.#birthyear;
    }

    getHeight() {
        return this.#height;
    }

    getData() {
        console.log(
            `${this.#fullName} were born in ${
                this.#birthyear
            } and his height is ${this.#height} meters.`
        );
    }

    getAge() {
        const now = new Date();

        if (this.#birthyear > now.getFullYear()) {
            console.log("The birthyear is greater than the actual year!!!");
            return;
        }

        console.log(
            `${this.#fullName} is ${
                now.getFullYear() - this.#birthyear
            } years old.`
        );
    }
}

const diego = new Person("Diego", 1988, 1.8);
diego.getData();
diego.getAge();

console.log();

const amanda = new Person("Amanda", 1993, 1.72);
amanda.getData();
amanda.getAge();
