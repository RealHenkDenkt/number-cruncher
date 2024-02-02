class HtmlElements {
	
}

class IndexedNumberTable {
	body = '<body>';

	getTable () {
		this.body += '</body>';
		return this.body;
	}
	   
	addRow(symbol, nth, name, value) {
		let html = '<tr>';
		html += '<td class="number-symbol">' + symbol + '&nbsp;&nbsp;<span class="bold-green">' + nth + '<sup>' + getNthText(nth) + '</sup></span>' + ' ' + name + '</td>';
		html += '<td class="bold-green number-symbol">' + value + '</td></tr>';
		 
		this.body += html;
	}    
}

let getNthText = function (n) {
	let s = n.toString();
	let last = s.slice(-1);
	
	let endings = {
		'1' : 'st',
		'2' : 'nd',
		'3' : 'rd',
	};
	
	if (undefined != endings[last] ) {
		return endings[last];
	}
	
	return 'th'
}


class NumberOperationTable {
	body = '<body>';
	constructor () {
		
	}
	
	getTable () {
		this.body += '</body>';
		return this.body;
	}
	
	addRow (n, name, mirror) {
		let html = '<tr>';
		html += '<td class="cellLeft"><span class="bold-green">' + n + '</soan></td>';
		html += '<td class="cellCentered">' + name + '</td>';
		html += '<td class="cellRight"><span class="bold-green">' + mirror + '</span></td></tr>';
		
		this.body += html;
		
	}
	
	addDataCell () {
		
	}
}

class NumberPropertiesTable {
	headerRow = '';
	dataRow = '';
	header = '';
	body = '';
	
	constructor () {

	}
	
	getTable() {
		let table = '';
		table += '<thead><tr>' + this.headerRow + '</tr></thead>';
		table += '<body><tr>' + this.dataRow + '</tr></body>';
		
		return table;
	}
	
	addNumberToRow (number, name) {
		this.addHeaderCell(0, 0, name, number);
		this.addDataCell(0, 0, number, true);
	}
	addIndex (direction, name, symbol, value) {
		this.addHeaderCell(direction, name, symbol, value);
		this.addDataCell(direction, name, value);
	}
	
	addHeaderCell (direction, name, symbol, value) {
		let html = '<th><span class="n' + direction + ' bold-blue number-properties-header-cell"';
		html += ' href="#" role="button" data-toggle="dropdown"';
		html += ' aria-haspopup="true" aria-expanded="false"';
		html += ' title="' + value + '">' + symbol + '</span></th>';
		
		this.headerRow += html;
	}

	addDataCell (direction, name, value, special = false) {
		let html = '';
		if (special) {
			html = '<td class="n' + direction + ' bold-green special"';
			html += ' id="fml-composite" title="' + name + '">' + value + '</td>';
		} else {
			html = '<td class="n' + direction + ' bold-green"';
			html += ' id="fml-composite" title="' + name + '">' + value + '</td>';
		}

		this.dataRow += html;		
	}
	
}