import { readFileSync } from 'fs'

export function parse_QIF(file_path) {
    let data = {
	'type'    : "",
	'date'    : [],
	'memo'    : [],
	'ammount' : []
    }

    let file = readFileSync(file_path, 'utf8'); // Reads given file
    let array_file = file.split('\r\n'); //splits the file into an array

    array_file.forEach( (str) => {
	if (str.startsWith('!Type:')) {
	    data.type = str.replace('!Type:', '');
	} else if (str.startsWith('D')) {
	    data.date.push(str.replace('D', ''));
	} else if (str.startsWith('M')) {
	    data.memo.push(str.replace('M', ''));
	} else if (str.startsWith('T')) {
	    data.ammount.push(parseFloat(str.replace('T', '')));
	}
    });

    return data;
};
