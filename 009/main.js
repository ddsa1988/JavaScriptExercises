"use strict";

/*
Escreva uma classe em que cada objeto representa um Voo que acontece em determinada data e em determinado horário. 
Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação das vagas. A classe deve ter os seguintes métodos:
a. Construtor: configura os dados do vôo (recebidos como parâmetro): número do vôo, data (para armazenar a data 
    utilize um objeto da classe Data, criada na questão anterior);
b. ProximoLivre: retorna o número da próxima cadeira livre
c. Verifica: verifica se o número da cadeira recebido como parâmetro está ocupada
d. Ocupa: ocupa determinada cadeira do vôo, cujo número é recebido como parâmetro, e retorna verdadeiro se a cadeira 
ainda não estiver ocupada (operação foi bem sucedida) e falso caso contrário
e. Vagas: retorna o número de cadeiras vagas disponíveis (não ocupadas) no vôo
f. GetVoo: retorna o número do vôo
*/

class Flight {
    #flightNumber;
    #flightDate;

    constructor(flightNumber, flightDate) {
        this.#setFlightNumber(flightNumber);
        this.#setFlightDate(flightDate);
    }

    #setFlightNumber(flightNumber) {
        this.#flightNumber = flightNumber;
    }
    getFlightNumber() {
        return this.#flightNumber;
    }

    #setFlightDate(flightDate) {
        this.#flightDate = flightDate;
    }
    getFlightDate() {
        return this.#flightDate;
    }
}

const myFlight = new Flight(123, new Date(1988, 0, 22, 15, 45, 55));
console.log(myFlight.getFlightNumber());
console.log(myFlight.getFlightDate());
