const rolesGeral = ['admin', 'coordenador', 'supervisor'];

const users = [
    {
        id: 10,
        name: 'Tiago',
        role: 'analista',
    },
    {
        id: 20,
        name: 'Marta',
        role: 'admin',
    },
    {
        id: 30,
        name: 'Leticia',
        role: 'analista',
    },
    {
        id: 40,
        name: 'Jose',
        role: 'coordenador',
    },
];

const filterUsers = (roles) => {
    return users.filter((user) => {
        return roles.includes(user.role);
    });
};

console.log(filterUsers(rolesGeral));

// [
//     { id: 20, name: 'Marta', role: 'admin' },
//     { id: 40, name: 'Jose', role: 'coordenador' },
// ];
