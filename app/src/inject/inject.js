chrome.extension.sendMessage({}, function(response) {
	
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('src/inject/script.js');
	s.async = true;
	document.body.appendChild(s);

});