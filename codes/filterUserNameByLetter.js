const gamers = [
    { name: 'Alex', idade: 11 },
    { name: 'Digo', idade: 41 },
    { name: 'Jéssica', idade: 17 },
    { name: 'Marcos', idade: 15 },
    { name: 'Quirina', idade: 54 },
];

const gamersx = gamers.filter(({ name }) => name.toLocaleLowerCase().endsWith('a'));

console.log(gamersx);

// [
//  { name: 'Jéssica', idade: 17 },
//  { name: 'Quirina', idade: 54 }
// ]
