chrome.runtime.onConnectExternal.addListener(function(port) {
    port.onMessage.addListener(function(msg) {

		var view = chrome.extension.getViews({ type: 'popup' });;

		for (var i = 0; i < views.length; i++) {
    		var doc = views[i].document; 
    		doc.getElementById('numberIn').value = msg;
    		var eventInput = new Event('input');
    		doc.querySelector('#numberIn').dispatchEvent(eventInput);
		}
    });
});