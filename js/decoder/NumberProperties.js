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
		'semiPrime'
	];
	
	constructor (n) {
		if (n == 0 ) return; 
		this.operation = new NumberOperation();
		this.number = n;
		this.mirror = this.getMirror(n);
		this.table = new NumberPropertiesTable();
		this.opTable = new NumberOperationTable();
		this.indexTable = new IndexedNumberTable();
		this.storageHandler = new StorageHandler();
		
		this.handlers = [
			new PrimeNumber(),
			new FigurateNumber(),
			new SpecialNumber(),
		];		
	}
	
	loadFromStorage () {
		this.loadOperationsTableFromStorage();
		this.loadTopTablesFromStorage();
		this.loadIndexesFromStorage();

	}
	
	getNumberIndexTable (loadFromStorage) {
		this.analyzeIndexes(loadFromStorage);
		return this.indexTable.getTable(false);
	}
	loadOperationsTableFromStorage () {
		let handler = new NumberOperation();
		let opTable = new NumberOperationTable();

		for (let type in handler.types) {
			let key = 'operations_' + type;
			let data = JSON.parse(this.storageHandler.getStorageKeyValue(key));
			if (undefined != data) {
				let value = data['value'];
				let n = data['n'];
				if (value != '0') {
					opTable.addRow(
						value,
						type,
						n
					); 			
				}
				
			}
		}
		let html = opTable.getTable();
		
		$('#numberOperationsTable').html(html);
	}
	saveTables () {
		let handler = this.storageHandler;

		for (let key in storageProperties) {
			handler.setStorageKey(key, JSON.stringify(storageProperties[key]));
		}
	}
	getOperationTable () {
		let handler = this.operation;
		
		for (let type in handler.types) {
			let calc = handler.types[type];
			let number = this.number;
			let isValid = calc.check(number);
			let value = calc.calculate(number)
			
			let n = calc.calculate(this.getMirror(number));

			if (true == isValid) {
				storageProperties['operations_' + type] =  {
					'n' : n,
					'value' : value,
					'type' : type
				}
				this.opTable.addRow(
					value,
					type,
					n
				);
			}
		}
		
		return this.opTable.getTable();
	}
	
	loadIndexesFromStorage () {
		let table = this.getNumberIndexTable(true);
		$('#numberIndexTable').html(table);
	}
	
	loadTopTablesFromStorage () {
		let tables = this.getTables(true);
		 
		$('#leftNumberCruncherModalTable').html( tables[0]);
		$('#rightNumberCruncherModalTable').html(tables[1]);
	}
	
	getTables (loadFromStorage) {
		
		this.table = new NumberPropertiesTable();
		let tables = [];
		let firstNumber = this.number;
		this.table.addNumberToRow(this.number, 'NUMBER');
		this.analyze('left', this.number, loadFromStorage);
		tables.push(this.table.getTable());
		this.table = new NumberPropertiesTable();
		let mirror = '';
        let numberString = this.number.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }

        this.number = parseInt(mirror);

        this.table.addNumberToRow(this.number, 'MIRROR');
        this.analyze('right', this.number, loadFromStorage);
		tables.push(this.table.getTable());
		this.number = firstNumber;
        
		return tables;
	}
	
	analyzeIndexes (loadFromStorage) {

		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
				if (true === loadFromStorage) {
					
					let key = 'indexes_' + type;
					let data = JSON.parse(this.storageHandler.getStorageKeyValue(key));

					if (data) {
						this.indexTable.addRow(
							data['symbol'],
							data['number'],
							type,
							data['value']
						);
					}
					continue;
				}
		//		this.startTime = performance.now()
				let calc = handler.types[type];
				let number = this.number;
				let firstNumber = number;
				//let isValid = calc.check(number);
				/*if (number > 1999993 && this.exceptions.indexOf(type) > -1) {
					storageProperties['indexes_' + type] = {
						'value' : '?',
						'symbol': calc.symbol,
					};
					this.indexTable.addRow(
						calc.symbol,
						number,
						type,
						'?'
					);
					continue;
				} */
				
				let value = calc.byIndex(number);
				this.indexTable.addRow(
					calc.symbol,
					number,
					type,
					value
				);
				storageProperties['indexes_' + type] = {
					'value' : value,
					'symbol': calc.symbol,
					'number' : number
				};
				
				this.endTime = performance.now();
		//	console.log(type + ': ' + (this.endTime - this.startTime));

			}
		}
	}
	
	analyze (direction, number, loadFromStorage) {
		if (number == 1 ) return;
		for (let h in this.handlers) {
			let handler = this.handlers[h];
			
			for (let type in handler.types) {
			//	this.startTime = performance.now()
				if (true === loadFromStorage) {

					let key = direction + '_' + type;
					let data = JSON.parse(this.storageHandler.getStorageKeyValue(key));

					if (data) {
						if (data['value'] != 0)	this.table.addIndex(direction, type, data['symbol'], data['value']);						
					} 
					continue;
				}
				let calc = handler.types[type];

				if (number > 1000003 && this.exceptions.indexOf(type) > -1 ){
					storageProperties[direction + '_' + type] = {
						'direction' : direction,
						'symbol': calc.symbol,
					};
					this.table.addIndex (direction, type, calc.symbol, '?');
					continue;
				} else if (number > 44999953 && (type == 'prime' || type == 'pythagoreanPrime') ) {
					this.table.addIndex (direction, type, calc.symbol, '?');
				}
				
				let isValid = calc.check(number);
				let index = 0;
				
				if (isValid) {
				switch (type) {
					case 'composite':
						index = CompositesList.indexOf(number) + 1;
						if (index != 0 ) this.table.addIndex (direction, type, calc.symbol, index);
						break;
					case 'prime':
						index = PrimesList.indexOf(number) + 1;
						if (index != 0 ) 
						this.table.addIndex (direction, type, calc.symbol, index);
						//index = PrimesList.indexOf(number) + 1;
						break;
					case 'pythagoreanPrime':
						index = PythagoreanPrimeList.indexOf(number) + 1;
						if (index != 0 ) 
						this.table.addIndex (direction, type, calc.symbol, index);
						break;
					case 'SemiPrime':
						if (index != 0) {
							this.table.addIndex (direction, type, calc.symbol, index);
						}
					default:
						let i, t = 0;

						for (i = 1; i <= number; i++) {
							if (calc.check(i)) t++;
						}
						
						if (true == isValid) {
							this.table.addIndex (direction, type, calc.symbol, t);
						}
					}
					storageProperties[direction+'_' + type] = {
						'direction' : direction,
						'symbol': calc.symbol,
						'value' : index
					};	
				}
				this.endTime = performance.now();
				//console.log(type + ': ' + (this.endTime - this.startTime));

			}
			
		}

	}
	
	getMirror (n) {
		if (null == n) return;
		let mirror = '';
        let numberString = n.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }

	    return parseInt(mirror);

	}
}
let storageProperties = {};

let saveProperties = function () {
	let handler = new StorageHandler();
}