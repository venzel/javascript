/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const filterFieldsObject = (objctToFilter = {}, arrayFields = []) => {
    const contains = (target, pattern) => {
        let value = 0;

        pattern.forEach((word) => {
            value = value + target.includes(word);
        });

        return value === 1;
    };

    const filterFields = (obj) =>
        Object.keys(obj)
            .filter((key) => contains(key, arrayFields))
            .reduce((current, key) => Object.assign(current, { [key]: obj[key] }), {});

    return objctToFilter.map((e) => filterFields(e));
};

const object = [
    { name: 'Tiago', admin: 'Vericard', age: 59 },
    { name: 'Betania', admin: 'Mainard', age: 57 },
    { name: 'Vanessa', admin: 'Venzel', age: 38 },
];

const fields = ['name', 'age'];

const objectFiltered = filterFieldsObject(object, fields);

console.log(objectFiltered);

// [
//    { name: 'Tiago', age: 59 },
//    { name: 'Betania', age: 57 },
//    { name: 'Vanessa', age: 38 }
// ]
