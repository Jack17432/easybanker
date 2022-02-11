# Easybanker

This package is all about tying to make it easy to get data from finacial files.

## Parse Functions

### read_QIF_File

#### documentation
Summary: Takes QIF file and returns data contained.

@since 1.0.0
@access public

@param {String}   file_path       Takes path to QIF file.

@return {JSON}  data                JSON of data contained in file.

#### JSON Example:
~~~
{
	"Type":"Bank",
	"statement":[
		{
			"D":"6/ 1/94",
			"T":"-1,000.00",
			"N":"1005",
			"P":"Bank Of Mortgage",
			"L":"[linda]",
			"S":["[linda]","Mort Int"],
			"$":["-253.64","-746.36"]},
		{
			"D":"6/ 2/94",
			"T":"75.00",
			"P":"Deposit"
		},
		{
			"D":"6/ 3/94",
			"T":"-10.00",
			"P":"JoBob Biggs",
			"M":"J.B. gets bucks",
			"L":"Entertain",
			"A":["1010 Rodeo Dr.","Waco, Tx","80505","","",""]
		}
	]
}
~~~

#### Usecase Example: 
~~~ 
import { parse_QIF } from 'easybanker'

data = parse_QIF('path to file')
~~~