var s = document.createElement('script');
s.src = chrome.extension.getURL('src/inject/script.js');
document.body.appendChild(s);

var css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = chrome.extension.getURL('src/inject/override.css');;
document.getElementsByTagName("head")[0].appendChild(css);