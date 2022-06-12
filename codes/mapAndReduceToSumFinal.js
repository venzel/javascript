/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const gamers = [
    { name: 'A', metrics: 8.0 },
    { name: 'B', metrics: 8.0 },
    { name: 'C', metrics: 8.0 },
    { name: 'D', metrics: 8.0 },
];

const result = gamers
    .map((g) => g.metrics)
    .reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);

console.log(result);

// 32
