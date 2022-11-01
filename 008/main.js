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

const data = new Date();
// const data = "2022-11-01";
// console.log(data);

function DateIsValid(newDate) {
    const date =
        newDate instanceof Date && !Number.isNaN(newDate)
            ? newDate
            : new Date("0001-01-01");

    return date;
}

// console.log(DateIsValid(data));

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
}

const newDate = new Data(new Date());
console.log(newDate.getDate());
