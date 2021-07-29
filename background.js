let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))

        //if (/^https:\/\/learn\.dcollege/.test(current_tab_info.url)) {
           // chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))
       // }
        // https://learn.dcollege.net/
    });
})
