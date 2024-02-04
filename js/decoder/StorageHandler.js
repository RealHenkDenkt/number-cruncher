class StorageHandler {
    constructor() {
    }
    // Sets a key and stores its value into the storage
    setStorageKey(key, value) {
        localStorage.setItem( key, value); //.set({ [key]: value });
    }
    // Gets a key value from the storage
    getStorageKeyValue(key) {
        return localStorage.getItem( key) ;
    }
        
    loadData() {
		let number = localStorage.getItem('numin');
        //let select = $("#numberIn");
        $('#numberIn').val(number).focus().select();
        let numberProperties = new NumberProperties(number);
        numberProperties.loadFromStorage();
        //$('#numberIn').trigger('input');
    }
}    
