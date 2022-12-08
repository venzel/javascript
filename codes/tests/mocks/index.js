const { readFile } = require('fs/promises');

const OPTIONS = {
    maxLines: 3,
    fields: ['id', 'name', 'age'],
};

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath);

        const validation = File.isValid(content);
    }

    static async getFileContent(filePath) {
        return (await readFile(filePath)).toString('utf-8');
    }

    static isValid(csvString, options = OPTIONS.fields) {
        const [_, ...withoutHeader] = csvString.split('\n');

        console.log(withoutHeader);
    }
}

(async () => {
    // const result = await File.csvToJson('./files/file.empty.mock.csv');
    const result = await File.csvToJson('./files/file.with.four.items.csv');
})();
