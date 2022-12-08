const File = require('./File');
const error = require('./error');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
    {
        const filePath = './files/file.empty.header.mock.csv';
        const result = File.parseCsvToJson(filePath);
        const rejection = new Error(error.FILE_HEADER_INVALID);
        await rejects(result, rejection);
    }

    {
        const filePath = './files/file.empty.lines.mock.csv';
        const result = File.parseCsvToJson(filePath);
        const rejection = new Error(error.FILE_MIN_LINES_INVALID);
        await rejects(result, rejection);
    }

    {
        const filePath = './files/file.with.four.lines.csv';
        const result = File.parseCsvToJson(filePath);
        const rejection = new Error(error.FILE_MAX_LINES_INVALID);
        await rejects(result, rejection);
    }

    {
        const filePath = './files/file.with.tree.lines.csv';
        const result = await File.parseCsvToObject(filePath);
        const expected = [
            {
                id: 100,
                name: 'Tiago Rizzo',
                age: 21,
            },
            {
                id: 200,
                name: 'Marcos Santos',
                age: 42,
            },
            {
                id: 300,
                name: 'Alencar Dias',
                age: 26,
            },
        ];
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

    {
        const filePath = './files/file.with.tree.lines.csv';
        const result = await File.parseCsvToObjectGamer(filePath);
        const expected = [
            {
                id: 100,
                name: 'Tiago Rizzo',
                age: 21,
            },
            {
                id: 200,
                name: 'Marcos Santos',
                age: 42,
            },
            {
                id: 300,
                name: 'Alencar Dias',
                age: 26,
            },
        ];
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }
})();
