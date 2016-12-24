window.onload = function() {
  //TODO Check if a session has already begun. Ask if you want to continue that session or start a new one
  //TODO Have some sort of list of saved sessions available to browse
  //TODO when you press the button and you're on youtube, fill the input with the youtube video url automatically
  //TODO add a button to youtube videos that you can press to automatically start a session with that video
  //TODO error handling, duh
    document.getElementById("startSession").onclick = function () {
        var youtubeUrl = document.getElementById("youtubeUrl").value;
        createSession(youtube_parser(youtubeUrl));
    }
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function createSession(videoId) {
  chrome.tabs.create({url: '/session.html?'+videoId}, function(tab) {
    targetId = tab.id;
    activeSession = true;
  });
}
