/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const isUpperCase = (stg) => /^[A-Z]*$/.test(stg);

const parseString = (stg) => {
    const count = stg.length;

    let k = stg.length,
        i = 0;

    const pos = [],
        terms = [];

    while (k--) {
        if (isUpperCase(stg.charAt(i)) && i) {
            pos.push(i);
        }

        i++;
    }

    let initial = 0;

    if (pos.length) {
        pos.forEach((pValue) => {
            terms.push(stg.toLowerCase().slice(initial, pValue));

            initial = pValue;
        });

        terms.push(stg.toLowerCase().slice(initial, count));
    }

    return pos.length ? terms.join('_') : stg.toLowerCase();
};

const parseDTO = (data) => {
    const aux = {};

    Object.keys(data).forEach((key) => {
        aux[parseString(key)] = data[key];
    });

    return aux;
};

const original = {
    Age: 20,
    firstName: 'Tiago',
    lastName: 'Rizzo',
    iconFileActor: 'camarao.png',
};

const parsed = parseDTO(original);

console.log(parsed);

// {
//     age: 20,
//     first_name: 'Tiago',
//     last_name: 'Rizzo',
//     icon_file_actor: 'camarao.png'
// }
