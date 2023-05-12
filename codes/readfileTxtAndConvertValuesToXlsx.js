/**
 * @author Enéas Almeida <eneas.eng@yahoo.com>
 * @description O algoritmo ler um arquivo txt e transforma para xlsx
 */

const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const readData = () => {
    const dataPath = path.join(__dirname, './file-values.txt');
    const data = fs.readFileSync(dataPath, 'utf8');
    return data;
}

const convertToObject = (data) => {
    const dataArr = data.split('\n');

    const dataObj = dataArr.map((item) => {
        const itemArr = item.split(',');

        return {
            value: itemArr[0],
        }
    })
    return dataObj;
}

const convertToXlsx = (data) => {
    data.push({ value: null })
    data.push({ value: null })

    const currencyFormat = "\"R$\"\ #,##0.00_);[RED](\"R$\" #,##0.00)";

    const count = data.length;
    
    const wb = xlsx.utils.book_new();

    const ws = xlsx.utils.json_to_sheet(data);

    for (let i = 2; i < count; i++) {
        ws['A'+i] = { t: 'n', v: ws['A'+i].v, z: currencyFormat };
    }

    ws['A'+(count+1)] = { t: 'n', f: `SUM(A2:A${count-1})` , z: currencyFormat };

    ws['A'+(count)] = { t: 'n', v: 'null', z: ' ' };
    
    xlsx.utils.book_append_sheet(wb, ws, 'Gamer');

    xlsx.writeFile(wb, 'gamer.xlsx');
}

convertToXlsx(convertToObject(readData()))
