function runSwitchjs() {
  chrome.tabs.executeScript({
    file: 'content.js'
  });
}

