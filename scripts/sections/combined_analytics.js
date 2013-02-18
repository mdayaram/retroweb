// Moovweb and Reddit combined analytics for tracking pageviews.

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12131688-1']);
_gaq.push(['_setCustomVar', 1, 'site', ' reddit.com', 3]);
_gaq.push(['_setCustomVar', 2, 'srpath', ' reddit.com-GET_listing', 3]);
_gaq.push(['_setCustomVar', 3, 'usertype', 'guest', 2]);
_gaq.push(['_setCustomVar', 4, 'uitype', 'web', 3]);
_gaq.push(['_trackPageview']);
_gaq.push(['www_tracker._setAccount', 'UA-26739163-9']);
_gaq.push(['www_tracker._trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
