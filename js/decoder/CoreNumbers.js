$(document).ready (function (){
	clearNumberPropertiesTable();
   	
	$('#numberIn').on('input', function (){
        number = parseInt($(this).val());
		
        if(isNaN(number) || number > 9999999) {
            clearNumberPropertiesTable();
            return;
        }

		numberIn(number);
		
		// store value in storage
		let storage = new StorageHandler();
		storage.setStorageKey('numin', number);
	});
	
    // load from storage
   	let storage = new StorageHandler();
   	storage.loadData();

});

function clearNumberPropertiesTable () {
	$('#leftNumberCruncherModalTable').html('')
	$('#rightNumberCruncherModalTable').html('')
}

function numberIn (number) {
	// Figurates
	let numberProperties = new NumberProperties(number);
	let tables = numberProperties.getTables();
	$('#leftNumberCruncherModalTable').html(tables[0]);
	$('#rightNumberCruncherModalTable').html(tables[1]);
	
	// Operations
	let operationTable = numberProperties.getOperationTable();
	$('#numberOperationsTable').html(operationTable);
	
	// Indexes
	numberProperties.number = getMirror(numberProperties.number);
	let numberIndexTable = numberProperties.getNumberIndexTable();
	$('#numberIndexTable').html(numberIndexTable);
}