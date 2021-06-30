// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({}, function(tabs) {
    
    for (var i=0; i<tabs.length; ++i) {
      var message = {id: i};
        chrome.tabs.sendMessage(tabs[i].id, message);
    }
});


});


