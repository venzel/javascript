/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const gamersFiltereds = gamers.filter(({ name }) =>
    name.toLocaleLowerCase().endsWith('a')
);

const gamers = [
    { name: 'Alex', idade: 11 },
    { name: 'Digo', idade: 41 },
    { name: 'Jéssica', idade: 17 },
    { name: 'Marcos', idade: 15 },
    { name: 'Quirina', idade: 54 },
];

console.log(gamersFiltereds);

// [
//  { name: 'Jéssica', idade: 17 },
//  { name: 'Quirina', idade: 54 }
// ]
