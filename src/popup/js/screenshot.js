window.onload = function() {
  console.log('iframe');
  getYoutubeIdFromUrl();
};

function getYoutubeIdFromUrl () {
  createIframe(window.location.href.split('?')[1]);
}

function createIframe (videoId) {
  console.log(videoId)
//  console.log(window.location.href.split('=')[1]);
//   window.location.href.split('=')[1];
  var iframe = document.createElement('iframe');
  iframe.id="ytplayer";
  iframe.type="text/html";
  iframe.width="640";
  iframe.height="360";
  iframe.src="https://www.youtube.com/embed/"+videoId;
  iframe.frameborder="0";
  console.log('yo')
  document.getElementById('videoContainer').append(iframe);
}

function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
}
