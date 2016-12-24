window.onload = function() {
    document.getElementById("startSession").onclick = function () {
        console.log(document.getElementById('youtubeUrl').value)
        var youtubeUrl = document.getElementById("youtubeUrl").value
        createSession(youtube_parser(youtubeUrl));
    }
}

function youtube_parser(url){
  console.log(url)
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function createSession(videoId) {
  chrome.tabs.create({url: '/screenshot.html?id='+videoId}, function(tab) {
    targetId = tab.id;
    activeSession = true;
  });
}

function getYoutubeId () {
  console.log(window.location.href.split('=')[1]);
  return window.location.href.split('=')[1];
}
