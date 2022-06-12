/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const filterUsers = (roles) => {
    return users.filter((user) => {
        return roles.includes(user.role);
    });
};

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

console.log(filterUsers(rolesGeral));

// [
//     { id: 20, name: 'Marta', role: 'admin' },
//     { id: 40, name: 'Jose', role: 'coordenador' },
// ];
