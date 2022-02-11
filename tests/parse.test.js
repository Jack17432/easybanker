import { read_QIF_File } from '../src/parse.js';
import { readFileSync } from 'fs';

describe('read QIF file', () => {

    const QIF_ref = JSON.parse(readFileSync('./tests/test_files/test_QIF_JSON.json', 'utf8'));
    const QIF_file_location = './tests/test_files/test_QIF.QIF';
    let QIF;

    beforeEach(() => {
	
	QIF = read_QIF_File(QIF_file_location);
	
    });

    test('Prased correct !Type', () => {

	expect(QIF.Type).toBe(QIF_ref.Type);

    });

    test('Parsed all statements correctly', () => {

	expect(QIF.statement).toBe(QIF.statement);

    });
});
