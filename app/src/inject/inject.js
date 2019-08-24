var s = document.createElement('script');
s.src = chrome.extension.getURL('src/inject/script.js');
document.body.appendChild(s);
