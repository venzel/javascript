/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 */

const replaceAccents = (stg) => {
    return stg.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const replaceWhiteSpaces = (stg) => {
    return stg.replaceAll(' ', '_');
};

const generateStringSlug = (stg) => {
    const stgWithoutAccents = replaceAccents(stg);

    const stgWithoutWhiteSpaces = replaceWhiteSpaces(stgWithoutAccents);

    return stgWithoutWhiteSpaces.toLowerCase();
};

const str = 'Maça Verde';

console.log(generateStringSlug(str));

// maca_verde
