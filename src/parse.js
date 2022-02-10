import { readFileSync } from 'fs'

export function parse_QIF(file_path) {

    /**
     * Summary: Takes QIF file and returns data contained.
     *
     * @since 1.0.1
     * @access public
     *
     * @param {String}   file_path       Takes path to QIF file.
     *
     * @return {Object}  data            Object of data contained in file.
     */

    const data = {
	'type'    : "",
	'date'    : [],
	'memo'    : [],
	'ammount' : []
    }

    let file = readFileSync(file_path, 'utf8'); // Reads given file
    let array_file = file.split('\r\n'); // Splits the file into an array

    array_file.forEach( (str) => { // Parse array
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
