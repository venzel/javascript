/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const filterPropertiesInArrayObjects = (objctToFilter = {}, arrayProperties = []) => {
    const contains = (target, pattern) => {
        let value = 0;

        pattern.forEach((word) => {
            value = value + target.includes(word);
        });

        return value === 1;
    };

    const filterProperties = (obj) =>
        Object.keys(obj)
            .filter((key) => contains(key, arrayProperties))
            .reduce((current, key) => Object.assign(current, { [key]: obj[key] }), {});

    return objctToFilter.map((e) => filterProperties(e));
};

const object = [
    { name: 'Tiago', admin: 'Vericard', age: 59 },
    { name: 'Betania', admin: 'Mainard', age: 57 },
    { name: 'Vanessa', admin: 'Venzel', age: 38 },
];

const properties = ['name', 'age'];

const objectFiltered = filterPropertiesInArrayObjects(object, properties);

console.log(objectFiltered);

// [
//    { name: 'Tiago', age: 59 },
//    { name: 'Betania', age: 57 },
//    { name: 'Vanessa', age: 38 }
// ]
