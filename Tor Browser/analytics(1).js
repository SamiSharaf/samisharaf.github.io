(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85671219-1', 'auto');
ga('set', 'page', window.location.href);
ga('send', 'pageview');

document.addEventListener("DOMContentLoaded", function(event) {
  var googleLink =  document.getElementById("googleLink");
  var appleLink = document.getElementById("appleLink");
  if(googleLink) {
    var googleLinkOnClick =  googleLink.onclick;
    googleLink.onclick = function(e) {
      if(typeof googleLinkOnClick == 'function') {
        googleLinkOnClick(e);
      }
      ga('send', {
        hitType: 'event',
        eventCategory: 'App Page',
        eventAction: 'Google Play Download Button',
        eventLabel: window.location.pathname
      });
    }
  }
  if(appleLink) {
    var appleLinkOnClick = appleLink.onclick;
    appleLink.onclick = function(e) {
      if(typeof appleLinkOnClick == 'function') {
        appleLinkOnClick(e);
      }
      ga('send', {
        hitType: 'event',
        eventCategory: 'App Page',
        eventAction: 'App Store Download Button',
        eventLabel: window.location.pathname
      });
    }
  }
});
