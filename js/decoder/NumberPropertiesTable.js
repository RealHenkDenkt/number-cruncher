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