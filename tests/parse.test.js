import { parse_QIF } from '../src/parse.js';

describe('parse QIF', () => {

    const QIF_file_location = './tests/test_files/test_QIF.QIF';
    
    const data = parse_QIF(QIF_file_location);
    
    test('Valid type', () => {

	expect(data.type).toBe('Bank');
	
    });

    test('Valid dates', () => {

	expect(data.date).toEqual([
	    '31/01/22',
	    '31/01/22',
	    '31/01/22',
	    '01/02/22',
	    '04/02/22',
	    '04/02/22',
	    '04/02/22',
	    '05/02/22'
	]);
	
    });

    test('Valid memo', () => {

	expect(data.memo).toEqual([
	    'Bill Payment PERSON ;',
	    'TRANSFER TO PERSON ;',
	    'TRANSFER FROM PERSON ;',
	    'COMPONEY ;',
	    'TRANSFER FROM person ;',
	    'TRANSFER FROM PERSON ;',
	    'TRANSFER TO PERSON ;',
	    'COMPONEY ;'
	]);
	
    });

    test('Valid transfer ammount', () => {

	expect(data.ammount).toEqual([
	    1800.00,
	    -1803.67,
	    700.00,
	    -693.24,
	    1500.00,
	    1000.00,
	    -300.00,
	    -2188.02
	]);

    });
    
});

describe('parse OFC', () => {

    test.todo('Valid ACCTFROM data');

    test.todo('Vaild DT range');

    test.todo('Vaild account ballance');
    
    test.todo('Valid STMTTRN feilds');

});
