class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit)
            target.res -= this.power;
    }
}
class Effect extends Card {
    constructor(name, cost, text) {
        super(name, cost);
        this.parseText(text);
    }
    parseText(text) {
        const textAttributes = text.split(' ');
        if (textAttributes.length !== 5) return;
        this.action = textAttributes[0];
        this.stat = textAttributes[2] === 'resilience' ? 'res' : 'power';
        this.magnitude = this.action === 'increase' 
            ? parseInt(textAttributes[4]) 
            : -parseInt(textAttributes[4]); 
        this.text = text;
    }
    play(target) {
        if (target instanceof Unit)
            target[this.stat] += this.magnitude;
    }
}
const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const hardAlgorithm = new Effect('Hard Algorithm', 2, "increase target's resilience by 3");
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2");
const pairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2");

console.log('redBeltNinja', redBeltNinja);
console.log('hardAlgorithm', hardAlgorithm.text);
console.log('hardAlgorithm plays redBeltNinja:');
hardAlgorithm.play(redBeltNinja);

console.log('redBeltNinja', redBeltNinja);

console.log('unhandledPromiseRejection', unhandledPromiseRejection.text);
console.log('unhandledPromiseRejection plays redBeltNinja:');
unhandledPromiseRejection.play(redBeltNinja);

console.log('redBeltNinja', redBeltNinja);

console.log('pairProgramming', pairProgramming.text)
console.log('pairProgramming plays redBeltNinja:');
pairProgramming.play(redBeltNinja);

console.log('redBeltNinja', redBeltNinja);
console.log('blackBeltNinja', blackBeltNinja);
console.log('redBeltNinja attacks blackBeltNinja:');
redBeltNinja.attack(blackBeltNinja);
console.log('redBeltNinja', redBeltNinja);
console.log('blackBeltNinja', blackBeltNinja);
