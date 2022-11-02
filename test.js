class Mobil {
    constructor(door, tyre) {
        this.door = door
        this.tye = tyre
    }
    go() {
        return `Berangkat ${this.door}`
    }
}

const car = new Mobil(4, 5)

console.log(car.go())