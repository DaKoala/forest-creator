const Twit = require('twit');

console.log('The bot is starting...');

const T = new Twit(require('./config'));

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function forestCreator() {
    const animals = ['🐌', '🦋', '🐛', '🐝', '🐞', '🐜', '🕷'];
    const plants = ['🌳', '🌴', '🌱', '🌻', '🌿', '🌺', '🍀'];
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const tmp = [];
        for (let j = 0; j < 7; j += 1) {
            const ranNum = Math.random();
            if (ranNum > 0.75) {
                tmp.push(randomPick(animals));
            } else if (ranNum > 0.5) {
                tmp.push(randomPick(plants));
            } else {
                tmp.push(' ');
            }
        }
        result.push(tmp.join(''));
    }
    return result.join('\n');
}

function tweets() {
    setInterval(() => {
        const forest = forestCreator();
        T.post('statuses/update', {
            status: forest,
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`We find a new forest:\n${forest}\n`);
            }
        });
    }, 60000);
}

tweets();
