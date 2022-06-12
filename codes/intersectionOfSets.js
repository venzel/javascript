/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const field_a = '2 7 4';
const field_b = '5 3';
const field_c = '4 1';

const a = [...field_a.split(' ')];
const b = [...field_b.split(' ')];
const c = [...field_c.split(' ')];

// Intercection
const int_ab = [...a].filter((e) => b.includes(e));
const int_ac = [...a].filter((e) => c.includes(e));
const int_bc = [...b].filter((e) => c.includes(e));

const array = [...int_ab, ...int_ac, ...int_bc];

console.log(array);

if (array.length) {
    console.log('Repete!');
} else {
    console.log('Nao repete!');
}

// [ '4' ]
// Repete!
