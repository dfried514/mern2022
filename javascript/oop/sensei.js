class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Name: ${this.name}`);
    }
    showStats() {
        console.log(
            `name: ${this.name}
            strength: ${this.strength} 
            speed: ${this.speed}
            health: ${this.health}`
        );
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Live, laugh, love");
    }
    showStats() {
        super.showStats();
        console.log(`wisdom: ${this.wisdom}`);
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();
