"use strict";

class FuelPump {
    #fuelType;
    #pricePerLiter;
    #pumpFuelLevel;

    constructor(fuelType, pricePerLiter, pumpFuelLevel) {
        this.setFuelType(fuelType);
        this.setPricePerLiter(pricePerLiter);
        this.setPumpFuelLevel(pumpFuelLevel);
    }

    setFuelType(fuelType) {
        this.#fuelType = fuelType;
    }

    getFuelType() {
        return this.#fuelType;
    }

    setPricePerLiter(pricePerLiter) {
        this.#pricePerLiter =
            Number.isFinite(pricePerLiter) && pricePerLiter > 0
                ? pricePerLiter
                : 0;
    }

    getPricePerLiter() {
        return Number(this.#pricePerLiter.toFixed(2));
    }

    setPumpFuelLevel(pumpFuelLevel) {
        this.#pumpFuelLevel =
            Number.isFinite(pumpFuelLevel) && pumpFuelLevel >= 0
                ? pumpFuelLevel
                : 0;
    }

    getPumpFuelLevel() {
        return Number(this.#pumpFuelLevel.toFixed(2));
    }

    fillTankByCash(moneyAmount) {
        if (!Number.isFinite(moneyAmount) || moneyAmount < 0) {
            console.log("Invalid value.");
            return;
        }

        const fuelRequest = Math.abs(moneyAmount / this.#pricePerLiter);

        if (this.#pumpFuelLevel - fuelRequest >= 0) {
            this.#pumpFuelLevel -= fuelRequest;
            console.log(
                `The amount of fuel requested is ${fuelRequest.toFixed(
                    2
                )} liters.`
            );
        } else {
            console.log(
                `The fuel pump doesn't have enough fuel. It has only ${this.#pumpFuelLevel.toFixed(
                    2
                )} liters.`
            );
        }
    }

    fillTankByLiter(fuelAmount) {
        if (!Number.isFinite(fuelAmount) || fuelAmount < 0) {
            console.log("Invalid value.");
            return;
        }

        if (this.#pumpFuelLevel - fuelAmount <= 0) {
            console.log(
                `The fuel pump doesn't have enough fuel. It has only ${this.#pumpFuelLevel.toFixed(
                    2
                )} liters.`
            );
            return;
        }

        this.#pumpFuelLevel -= fuelAmount;
        console.log(
            `The ${fuelAmount} liters of fuel it costs R$${(
                this.#pricePerLiter * fuelAmount
            ).toFixed(2)}.`
        );
    }
}

export { FuelPump };
