"use strict";

/*
Escreva uma classe Data cuja instância (objeto) represente uma data. Esta classe deverá dispor dos seguintes métodos:
a. Construtor: define a data que determinado objeto (através de parâmetro), este método verifica se a data está correta,
 caso não esteja a data é configurada como 01/01/0001
b. Compara: recebe como parâmetro um outro objeto da Classe data, compare com a data corrente e retorne:
i. 0 se as datas forem iguais;
ii. 1 se a data corrente for maior que a do parâmetro;
iii. -1 se a data do parâmetro for maior que a corrente.
c. GetDia: retorna o dia da data
d. GetMes: retorna o mês da data
e. GetMesExtenso: retorna o mês da data corrente por extenso
f. GetAno: retorna o ano da data
g. IsBissexto: retorna verdadeiro se o ano da data corrente for bissexto e falso caso contrário
h. Clone: o objeto clona a si próprio, para isto, ele cria um novo objeto da classe Data com os mesmos valores de 
atributos e retorna sua referência pelo método
*/

class Data {
    #date;

    constructor(date) {
        this.#setDate(date);
    }

    #setDate(date) {
        this.#date =
            date instanceof Date && !Number.isNaN(date)
                ? date
                : new Date("0001-01-01");
    }
    getDate() {
        return this.#date;
    }

    getDay() {
        return this.#date.getDate();
    }

    getMonth() {
        return this.#date.getMonth() + 1;
    }

    getFullYear() {
        return this.#date.getFullYear();
    }

    getStringMonth(month) {
        const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
            default: "Invalid Month!",
        };

        Object.freeze(months);

        return months[month] || months["default"];
    }
    isLeapYear(year) {
        if (!Number.isInteger(year) || year <= 0) {
            return "Invalid Year!";
        }
        return (!(year % 4) && year % 100) ||
            (!(year % 4) && !(year % 100) && !(year % 400))
            ? true
            : false;
    }
}

const newDate = new Data(new Date());

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getStringMonth(5));
console.log(newDate.isLeapYear(2012));
