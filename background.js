console.log("background running!!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  var msg = {
    message: "user clicked!"
  }
}
