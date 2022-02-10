# Easybanker

This package is all about tying to make it easy to get data from finacial files.

## Parse Functions

### parse_QIF

#### documentation
Summary: Takes QIF file and returns data contained.

@since 1.0.1
@access public

@param {String}   file_path       Takes path to QIF file.

@return {Object}  data                Object of data contained in file.

data = {
	'type'    : "String",
	'date'    : [String],
	'memo'    : [String],
 	'ammount' : [float]
}

#### Example: 
~~~ 
import { parse_QIF } from 'easybanker'

data = parse_QIF('path to file')
~~~