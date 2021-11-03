/**
 * use for update check for future
 */

window.__ONLINE__ = {};

// https://stackoverflow.com/questions/3591847/google-analytics-from-a-file-url
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'UA-154996514-4', {
      'storage': 'none',
      'clientId': localStorage.getItem('ga:clientId')
  });
  ga(function(tracker) {
      localStorage.setItem('ga:clientId', tracker.get('clientId'));
  });
  ga('set', 'checkProtocolTask', null);
  
  ga('set', 'page', 'myPage');
  ga('send', 'pageview');

  setInterval(() => {
    ga('send', 'pageview');
  }, 1000 * 60 * 60);
