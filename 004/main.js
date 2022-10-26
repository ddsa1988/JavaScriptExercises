"use strict";

/*
Crie uma classe denominada Elevador para armazenar as informações de um elevador dentro de um prédio. 
A classe deve armazenar o andar atual (térreo = 0), total de andares no prédio (desconsiderando o térreo), 
capacidade do elevador e quantas pessoas estão presentes nele. A classe deve também disponibilizar os seguintes métodos:
a. Inicializa: que deve receber como parâmetros a capacidade do elevador e o total de andares no prédio 
(os elevadores sempre começam no térreo e vazio);
b. Entra: para acrescentar uma pessoa no elevador (só deve acrescentar se ainda houver espaço);
c. Sai: para remover uma pessoa do elevador (só deve remover se houver alguém dentro dele);
d. Sobe: para subir um andar (não deve subir se já estiver no último andar);
e. Desce: para descer um andar (não deve descer se já estiver no térreo);
*/

class Lifter {
    #maxFloors;
    #actualFloor;
    #maxCapacity;
    #peopleInside;

    constructor(
        maxFloors = 30,
        actualFloor = 0,
        maxCapacity = 12,
        peopleInside = 0
    ) {
        this.init(maxFloors, maxCapacity);
        this.#setActualFloor(actualFloor);
        this.#setPeopleInside(peopleInside);
    }

    #setMaxFloors(maxFloors) {
        this.#maxFloors = maxFloors;
    }
    #getMaxFloors() {
        return this.#maxFloors;
    }

    #setActualFloor(actualFloor) {
        this.#actualFloor = actualFloor;
    }
    #getActualFloor() {
        return this.#actualFloor;
    }

    #setMaxCapacity(maxCapacity) {
        this.#maxCapacity = maxCapacity;
    }
    #getMaxCapacity() {
        return this.#maxCapacity;
    }

    #setPeopleInside(peopleInside) {
        this.#peopleInside = peopleInside;
    }
    #getPeopleInside() {
        return this.#peopleInside;
    }

    init(maxFloors, maxCapacity) {
        this.#setMaxFloors(maxFloors);
        this.#setMaxCapacity(maxCapacity);
    }

    setPeopleIn(numberOfPeople) {
        this.#peopleInside =
            this.#peopleInside + numberOfPeople <= this.#maxCapacity
                ? (this.#peopleInside += numberOfPeople)
                : this.#peopleInside;
    }

    setPeopleOut(numberOfPeople) {
        this.#peopleInside =
            this.#peopleInside - numberOfPeople > 0
                ? (this.#peopleInside -= numberOfPeople)
                : 0;
    }

    setFloor(resquestedFloor) {
        this.#actualFloor =
            resquestedFloor >= 0 && resquestedFloor <= this.#maxFloors
                ? resquestedFloor
                : this.#actualFloor;
    }
}

const myLifter = new Lifter();
console.log(myLifter);
myLifter.setFloor(27);
console.log(myLifter);
