/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const search = (name) => {
    return users.filter((user) => {
        return user.name.toLowerCase().trim().search(name.toLowerCase().trim()) !== -1;
    });
};

const users = [
    {
        id: 10,
        name: 'Tiago',
    },
    {
        id: 20,
        name: 'Marta',
    },
    {
        id: 30,
        name: 'Leticia',
    },
    {
        id: 40,
        name: 'Jose',
    },
];

console.log(search('ti'));

// [
//     { id: 10, name: 'Tiago' },
//     { id: 30, name: 'Leticia' }
// ]
