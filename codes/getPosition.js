/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 * @description O algoritmo resolve problema de intervalos de números
 * eliminando o uso de if else.
 */

const getPosition = (arr, pos) => {
    let current = null,
        next = null,
        result = arr[0];

    const count = arr.length - 1;

    for (let i = 0, k = 1; i < count; i++, k++) {
        current = arr[i];
        next = arr[k];

        if (pos <= current) {
            result = current;
            break;
        }

        if (pos > arr[count]) {
            result = arr[count];
            break;
        }

        if (pos >= current && pos <= next) {
            result = next;
            break;
        }
    }

    return result;

    // Result: 13
};

const getMapLevel = (arr) => {
    const map = {};

    arr.forEach(({ max, level }) => (map[max] = level));

    return map;

    // Return: { '1': 'Start', '3': 'Medium', '5': 'Advanced', '13': 'Super' }
};

const getIntervals = (arr) => {
    const aux = [];

    arr.forEach(({ max }) => aux.push(max));

    aux.push(aux[aux.length - 1]);

    aux.unshift(aux[0]);

    return aux;

    // Return: [ 1, 1, 3, 5, 13, 13 ]
};

const getLevel = (arr, val) => {
    const mapLevel = getMapLevel(arr);

    const intervals = getIntervals(arr);

    const position = getPosition(intervals, val);

    return mapLevel[position];

    // Result: Super
};

const array = [
    { max: 1, level: 'Start' },
    { max: 3, level: 'Medium' },
    { max: 5, level: 'Advanced' },
    { max: 13, level: 'Super' },
];

const level = getLevel(array, 9);

console.log(level); // Super

// Explicação: 9 está no intervalo entre 5 e 13, então pega o máximo intervalo.
