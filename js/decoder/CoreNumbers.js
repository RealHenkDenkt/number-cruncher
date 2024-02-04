$(document).ready (function (){
	clearNumberPropertiesTable();
   	
	$('#numberIn').on('input', function (){
        number = parseInt($(this).val());
		
        if(isNaN(number) || number > 9999999) {
            clearNumberPropertiesTable();
            return;
        }

		if (number < 1000001) {
			numberIn(number);
			
			// store value in storage
			let storage = new StorageHandler();
			storage.setStorageKey('numin', number);
			
		} else {
			alert('Too big: < 1,000,001');
			$('#numberIn').val('').focus();
		}
	});
	
    // load from storage
   	let storage = new StorageHandler();
   	storage.loadData();

});

class PropertiesStorage {
	constructor (){
		
	}
}

function clearNumberPropertiesTable () {
	$('#leftNumberCruncherModalTable').html('')
	$('#rightNumberCruncherModalTable').html('')
}

function numberIn (number) {
	// Figurates
	let numberProperties = new NumberProperties(number);
	let tables = numberProperties.getTables(false);
	$('#leftNumberCruncherModalTable').html(tables[0]);
	$('#rightNumberCruncherModalTable').html(tables[1]);
	
	// Operations
	let operationTable = numberProperties.getOperationTable();
	$('#numberOperationsTable').html(operationTable);
	
	// Indexes
	numberProperties.number = numberProperties.number;
	let numberIndexTable = numberProperties.getNumberIndexTable();
	$('#numberIndexTable').html(numberIndexTable);
	
	numberProperties.saveTables();
}