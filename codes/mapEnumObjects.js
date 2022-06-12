/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const execute = (valueEnum) => {
    const executeDog = (value) => console.log(value + 'auu');
    const executeCat = (value) => console.log(value + 'miau');
    const executeLion = (value) => console.log(value + 'roum');

    const map = {
        DOG: (value) => executeDog(value),
        CAT: (value) => executeCat(value),
        LION: (value) => executeLion(value),
    };

    const exists = map.hasOwnProperty(valueEnum);

    exists && map[valueEnum]('som -> ');
};

execute('CAT');

// som -> miau
