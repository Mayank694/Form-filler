let btn = document.getElementById('changeColor');

btn.onclick = function(e){
    chrome.storage.sync.get('color',function(data){
        btn.style.background = data.color;
        btn.setAttribute('value',data.color)
    })
    chrome.tabs.executeScript({
        file: 'library/jquery.js'
      });
    chrome.tabs.executeScript({
        file: 'content_scripts.js'
    });
}