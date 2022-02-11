import { readFileSync } from 'fs'

function QIF_Type(QIF_File) {

    if (QIF_File.includes('!Account')) {
	throw '[INFO]: !Account type files not currently suported.';
    } else if (!QIF_File.includes('!')) {
	throw '[ERROR]: no type included in file.';
    }
    
    let type = QIF_File.slice(QIF_File.indexOf('!'), QIF_File.indexOf('\r\n'));
    QIF_File = QIF_File.replace(type + '\r\n', '');
    
    if (type.includes('!Type:')) {
	type = type.replace('!', '');
	type = type.split(':');
    } else {
	throw '[ERROR]: !Type: not detected in file';
    }
	
    return [QIF_File, type];
};

function QIF_Statement(QIF_File) {

    let statement = [];
    let QIF_File_Split = QIF_File.split('^\r\n');
    
    QIF_File_Split.forEach(curr_Statement => {

	let parsed_Statement = {};
	let curr_Statement_Split = curr_Statement.split('\r\n');

	curr_Statement_Split.forEach(field => {
	    if (field == '') { return };

	    if (parsed_Statement[field.charAt(0)] == undefined) {
		parsed_Statement[field.charAt(0)] = field.replace(field.charAt(0), '');
		
	    } else if (typeof parsed_Statement[field.charAt(0)] == 'object') {
		parsed_Statement[field.charAt(0)].push(field.replace(field.charAt(0), ''));
		
	    } else {
		let temp = parsed_Statement[field.charAt(0)];
		parsed_Statement[field.charAt(0)] = [];
		parsed_Statement[field.charAt(0)].push(temp);
		parsed_Statement[field.charAt(0)].push(field.replace(field.charAt(0), ''));
		
	    };
	});

	if (!(Object.keys(parsed_Statement).length === 0)) {
	    statement.push(parsed_Statement);
	};
    });

    return statement;
};

export function read_QIF_File(file_path) {

    let file = readFileSync(file_path, 'utf8'); 
    let QIF = {};
    
    let type;
    [file, type] = QIF_Type(file);
    QIF[type[0]] = type[1];

    QIF['statement'] = QIF_Statement(file);
					
    return QIF;
};
