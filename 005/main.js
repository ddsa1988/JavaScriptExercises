"use strict";

/*
Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto dessa classe 
deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os 
seguintes métodos para esta classe: 
a. media: calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 5) 
b. final: calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)
*/

function Student(
    fullName,
    id,
    examGrade,
    workGrade,
    examGradeWeight,
    workGradeWeight
) {
    this.fullName = fullName;
    this.id = id;
    this.examGrade = examGrade;
    this.workGrade = workGrade;

    this.averageGrade = function () {
        this.averageGrade = 0;

        this.examGrade.forEach(function (value) {
            this.averageGrade += value * (examGradeWeight / 10);
        }, this);

        this.workGrade.forEach(function (value) {
            this.averageGrade += value * (workGradeWeight / 10);
        }, this);

        return this.averageGrade;
    };
}

const diego = new Student("Diego", 25, [8.5, 3.7], [10], 2.5, 5);
console.log(diego);
console.log(diego.averageGrade());

console.log("\n");

class Aluno {
    #fullName;
    #id;
    #examGrade;
    #workGrade;
    #examGradeWeight;
    #workGradeWeight;

    constructor(
        fullName,
        id,
        examGrade,
        workGrade,
        examGradeWeight,
        workGradeWeight
    ) {
        this.#setFullName(fullName);
        this.#setId(id);
        this.#setExamGrade(examGrade);
        this.#setWorkGrade(workGrade);
        this.#examGradeWeight = examGradeWeight;
        this.#workGradeWeight = workGradeWeight;
    }

    #setFullName(fullName) {
        this.#fullName = fullName;
    }
    #getFullName() {
        return this.#fullName;
    }

    #setId(id) {
        this.#id = id;
    }
    #getId() {
        return this.#id;
    }

    #setExamGrade(examGrade) {
        this.#examGrade = examGrade;
    }
    #getExamGrade() {
        return this.#examGrade;
    }

    #setWorkGrade(workGrade) {
        this.#workGrade = workGrade;
    }
    #getWorkGrade() {
        return this.#workGrade;
    }

    getAverageGrade() {
        let averageGrade = 0;

        this.#examGrade.forEach(function (value) {
            averageGrade += value * (this.#examGradeWeight / 10);
        }, this);

        this.#workGrade.forEach(function (value) {
            averageGrade += value * (this.#workGradeWeight / 10);
        }, this);

        return averageGrade;
    }
}

const amanda = new Aluno("Amanda", 25, [8.5, 3.7], [10], 2.5, 5);
console.log(amanda.getAverageGrade());
