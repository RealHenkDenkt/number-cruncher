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

