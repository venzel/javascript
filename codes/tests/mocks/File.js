const { readFile } = require('fs/promises');
const Gamer = require('./Gamer');
const error = require('./error');
const configs = require('./config');

class File {
    static async fileContent(filePath) {
        return (await readFile(filePath)).toString('utf8');
    }

    static async fileFilter(filePath) {
        const fileContent = await File.fileContent(filePath);

        const [header, ...lines] = fileContent.split('\n');

        return {
            header,
            lines,
        };
    }

    static async parseCsvToJson(filePath) {
        const { valid, message } = await File.isValid(filePath);

        if (!valid) {
            throw new Error(message);
        }

        return File.fileContent(filePath);
    }

    static parseData(key, value) {
        const map = {
            ID: () => {
                return Number(value.trim());
            },
            NAME: () => {
                return value.trim();
            },
            AGE: () => {
                return Number(value.trim());
            },
        };

        return map[key]();
    }

    static async parseCsvToObject(filePath) {
        const aux = [];

        const { lines } = await File.fileFilter(filePath);

        lines.forEach((line) => {
            let [id, name, age] = line.split(',');

            id = File.parseData('ID', id);
            name = File.parseData('NAME', name);
            age = File.parseData('AGE', age);

            aux.push({ id, name, age });
        });

        return aux;
    }

    static async parseCsvToObjectGamer(filePath) {
        const aux = [];

        const { lines } = await File.fileFilter(filePath);

        lines.forEach((line) => {
            let [id, name, age] = line.split(',');

            id = File.parseData('ID', id);
            name = File.parseData('NAME', name);
            age = File.parseData('AGE', age);

            aux.push(new Gamer(id, name, age));
        });

        return aux;
    }

    static async isValid(filePath, options = configs) {
        const { header, lines } = await File.fileFilter(filePath);

        const isHeaderValid = header === options.fields.join(', ');

        if (!isHeaderValid) {
            return {
                message: error.FILE_HEADER_INVALID,
                valid: false,
            };
        }

        const maxLinesValid = lines.length <= options.maxLines;

        if (!maxLinesValid) {
            return {
                message: error.FILE_MAX_LINES_INVALID,
                valid: false,
            };
        }

        const minLinesValid = lines.length >= options.minLines;

        if (!minLinesValid) {
            return {
                message: error.FILE_MIN_LINES_INVALID,
                valid: false,
            };
        }

        return {
            message: null,
            valid: true,
        };
    }
}

module.exports = File;
