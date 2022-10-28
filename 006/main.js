"use strict";

/*
Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos de informática para 
representar uma fatura de um item vendido na loja. Uma fatura deve incluir as seguintes informações como atributos:

a. o número do item faturado,
b. a descrição do item,
c. a quantidade comprada do item e
d. o preço unitário do item.

Sua classe deve ter um construtor que inicialize os quatro atributos. Se a quantidade não for positiva, ela deve 
ser configurada como 0. Se o preço por item não for positivo ele deve ser configurado como 0.0. Forneça os métodos 
getters e setters para cada variável de instância. Além disso, forneça um método chamado getInvoiceAmount que calcula 
o valor da fatura (isso é, multiplica a quantidade pelo preço por item) e depois retorna o valor como um double. 
*/

class Invoice {
    #itemNumber;
    #itemDescription;
    #quantity;
    #price;

    constructor(itemNumber, itemDescription, quantity, price) {
        this.#setItemNumber(itemNumber);
        this.#setItemDescription(itemDescription);
        this.#setQuantity(quantity);
        this.#setPrice(price);
    }

    #setItemNumber(itemNumber) {
        this.#itemNumber = itemNumber;
    }
    #getItemNumber() {
        return this.#itemNumber;
    }

    #setItemDescription(itemDescription) {
        this.#itemDescription = itemDescription;
    }
    #getItemDescription() {
        return this.#itemDescription;
    }

    #setQuantity(quantity) {
        this.#quantity = quantity > 0 ? quantity : 0;
    }
    #getQuantity() {
        return this.#quantity;
    }

    #setPrice(price) {
        this.#price = price > 0 ? price : 0;
    }
    #getprice() {
        return this.#price;
    }

    getInvoiceAmount() {
        return `The item number ${this.#itemNumber} with the description of ${
            this.#itemDescription
        } costs $${(this.#getQuantity() * this.#getprice()).toFixed(2)}`;
    }
}

const mycar = new Invoice(123, "BMW", 1, 250);
console.log(mycar);
console.log(mycar.getInvoiceAmount());
