console.log("background is running!!");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  var msg = {
    message: "click"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
