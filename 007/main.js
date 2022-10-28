"use strict";

/*
A fim de representar funcionários em uma empresa, crie uma classe chamada Funcionario que inclui
as três informações a seguir como atributos:

a. um primeiro nome,
b. um sobrenome
c. um salário mensal

Sua classe deve ter um construtor que inicializa os três atributos. Forneça os métodos getters e setters
para cada atributo. Se o salário mensal não for positivo, configure-o como 0.0. Escreva um aplicativo de 
teste que demonstra as capacidades da classe. Crie duas instâncias da classe e exiba o salário anual de cada instância. 
Então dê a cada empregado um aumento de 10% e exiba novamente o salário anual de cada empregado.
*/

class Employee {
    #firstName;
    #lastName;
    #monthSalary;

    constructor(firstName, lastName, monthSalary) {
        this.#setFirstName(firstName);
        this.#setLastName(lastName);
        this.#setMonthSalary(monthSalary);
    }

    #setFirstName(firstName) {
        this.#firstName = firstName;
    }
    #getFirstName() {
        return this.#firstName;
    }

    #setLastName(lastName) {
        this.#lastName = lastName;
    }
    #getLastName() {
        return this.#lastName;
    }

    #setMonthSalary(monthSalary) {
        this.#monthSalary = monthSalary > 0 ? monthSalary : 0;
    }
    #getMonthSalary() {
        return this.#monthSalary;
    }

    getYearlySalary() {
        return `Monthly salary is $${this.#getMonthSalary().toFixed(
            2
        )} and the yearly salary is $${(this.#getMonthSalary() * 12).toFixed(
            2
        )}`;
    }
}

const diego = new Employee("Diego", "Alexandre", 3000);
console.log(diego);
console.log(diego.getYearlySalary());
console.log("\n");

function Employees(firstName, lastName, monthSalary) {
    this.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    this.getFirstName = function () {
        return this.firstName;
    };

    this.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    this.getLastName = function () {
        return this.lastName;
    };

    this.setMonthSalary = function (monthSalary) {
        this.monthSalary = monthSalary;
    };
    this.getMonthSalary = function () {
        return this.monthSalary;
    };

    this.getYearlySalary = function () {
        return `Monthly salary is $${this.getMonthSalary().toFixed(
            2
        )} and the yearly salary is $${(this.getMonthSalary() * 12).toFixed(
            2
        )}`;
    };

    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setMonthSalary(monthSalary);
}

const amanda = new Employees("Amanda", "Perna", 1000);
console.log(amanda);
console.log(amanda.getYearlySalary());
