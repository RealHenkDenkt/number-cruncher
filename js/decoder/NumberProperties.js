class NumberProperties {
	handlers = [];
	operations = false;
	table = {};
	opTable = {};
	indexTable = {};
	mirror = 0;
	
	constructor (n) {
		this.operation = new NumberOperation();
		this.number = n;
		this.mirror = this.getMirror(n);
		this.table = new NumberPropertiesTable();
		this.opTable = new NumberOperationTable();
		this.indexTable = new IndexedNumberTable();
		
		this.handlers = [
			new PrimeNumber(),
			new FigurateNumber(),
			new SpecialNumber(),
		];		
	}
	getNumberIndexTable () {
		this.analyzeIndexes();
		return this.indexTable.getTable();
	}
	getOperationTable () {
		let handler = this.operation;
		
		for (let type in handler.types) {
			let calc = handler.types[type];
			let number = this.number;
			let isValid = calc.check(number);

			if (true == isValid) {
				this.opTable.addRow(
					calc.calculate(this.getMirror(number)),
					type,
					calc.calculate(number)
					
				);
			}
		}
		
		return this.opTable.getTable();
	}
	
	getTables () {
		let tables = [];
		this.table.addNumberToRow(this.number, 'NUMBER');
		this.analyze('left');
		tables.push(this.table.getTable());
		this.table = new NumberPropertiesTable();
		let mirror = '';
        let numberString = this.number.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }

        this.number = parseInt(mirror);
        this.table.addNumberToRow(this.number, 'MIRROR');
        this.analyze('right');
		tables.push(this.table.getTable());
        
		return tables;
	}
	
	analyzeIndexes () {
		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
				let calc = handler.types[type];
				let number = this.number;
				//let isValid = calc.check(number);
				
				let value = calc.byIndex(number);
				this.indexTable.addRow(
					calc.symbol,
					number,
					type,
					value
				);

			}
		}
	}
	
	analyze (direction) {
		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
				// voor ieder type een tr met head en een table row met body
				let calc = handler.types[type];
				let number = this.number;
				let isValid = calc.check(number);
				
				let i, t = 0;
		
				for (i = 1; i <= number; i++) {
					if (calc.check(i)) t++;
				}
				
				if (true == isValid) {
					this.table.addIndex (direction, type, calc.symbol, t);
				}
			}
		}

	}
	
	getMirror (n) {
		let mirror = '';
        let numberString = n.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }

	    return parseInt(mirror);

}
}