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

const userTransform = (listUsers) => {
    // const copyUsers = users.map(user => Object.assign({}, user));

    const copyUsers = listUsers.map((user) => ({ ...user }));

    copyUsers.map((user) => {
        user.name = user.name.toUpperCase();
    });

    return copyUsers;
};

console.log(userTransform(users));

// [
//     { id: 10, name: 'TIAGO' },
//     { id: 20, name: 'MARTA' },
//     { id: 30, name: 'LETICIA' },
//     { id: 40, name: 'JOSE' }
// ]

console.log(users);

// [
//     { id: 10, name: 'Tiago' },
//     { id: 20, name: 'Marta' },
//     { id: 30, name: 'Leticia' },
//     { id: 40, name: 'Jose' }
// ]
