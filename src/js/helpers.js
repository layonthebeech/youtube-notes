export default {
  youtube_parser: function(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  },
  getQueryString: function() {
     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      console.log(tabs)
      return tabs[0].url;
  });
  }
}
