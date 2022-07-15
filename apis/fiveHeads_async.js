const fiveHeads_async = () => {
    const tossCoin = () => Math.random() > 0.5 ? "heads" : "tails";
    
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        
        while (headsCount < 5 && attempts <= 100) {
            attempts++;
            headsCount = tossCoin() === "heads" ? headsCount + 1 : 0;
        }
        if (headsCount === 5)
            resolve(`Number of attempts to flip heads five times consecutively: ${attempts}`);
        else 
            reject(`Coin was flipped ${attempts} times and heads were not flipped 5 times consecutively`);
    });
};

fiveHeads_async()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("That's the result??");
