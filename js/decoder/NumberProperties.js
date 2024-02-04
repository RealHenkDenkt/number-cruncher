class NumberProperties {
	handlers = [];
	operations = false;
	table = {};
	opTable = {};
	indexTable = {};
	mirror = 0;
	startTime = 0;
	endTime = 0;
	exceptions = [
		'composite',
		'prime',
		'pythagoreanPrime',
		'semiPrime'
	];
	
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
			let value = calc.calculate(number)
			
			let n = calc.calculate(this.getMirror(number));

			if (type == 'divisors') {
				console.log(divisors);
			}			


			if (true == isValid) {
				this.opTable.addRow(
					value,
					type,
					n
				);
			}
		}
		
		return this.opTable.getTable();
	}
	
	getTables () {
		this.table = new NumberPropertiesTable();
		let tables = [];
		let firstNumber = this.number;
		this.table.addNumberToRow(this.number, 'NUMBER');
		this.analyze('left', this.number);
		tables.push(this.table.getTable());
		this.table = new NumberPropertiesTable();
		let mirror = '';
        let numberString = this.number.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }

        this.number = parseInt(mirror);

        this.table.addNumberToRow(this.number, 'MIRROR');
        this.analyze('right', this.number);
		tables.push(this.table.getTable());
		this.number = firstNumber;
        
		return tables;
	}
	
	analyzeIndexes () {

		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
			//	this.startTime = performance.now()
				let calc = handler.types[type];
				let number = this.number;
				let firstNumber = number;
				//let isValid = calc.check(number);
				if (number > 99999 && this.exceptions.indexOf(type) > -1) {
					this.indexTable.addRow(
						calc.symbol,
						number,
						type,
						'?'
					);
					continue;
				} 
				
				let value = calc.byIndex(number);
				this.indexTable.addRow(
					calc.symbol,
					number,
					type,
					value
				);
				
				this.endTime = performance.now();
			//console.log(type + ': ' + (this.endTime - this.startTime));

			}
		}
	}
	
	analyze (direction, number) {
		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
			//	this.startTime = performance.now()
				// voor ieder type een tr met head en een table row met body
				let calc = handler.types[type];
				//let number = this.number;
				if (number > 99999 && this.exceptions.indexOf(type) > -1 ){
					this.table.addIndex (direction, type, calc.symbol, '?');
					continue;
				}
				
				let isValid = calc.check(number);
				
				let i, t = 0;
		
				for (i = 1; i <= number; i++) {
					if (calc.check(i)) t++;
				}
				
				if (true == isValid) {
					this.table.addIndex (direction, type, calc.symbol, t);
				}

				this.endTime = performance.now();
			//	console.log(type + ': ' + (this.endTime - this.startTime));

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