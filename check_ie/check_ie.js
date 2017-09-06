(function(window) {
	var win = window,
		sys = {},
		ua = navigator.userAgent.toLowerCase(),
		s = "";

	(s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1]:
	(s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
	(s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
	if (sys.ie && (sys.ie == 5.0 || sys.ie == 6.0 || sys.ie == 7.0 || sys.ie == 8.0 || sys.ie == 9.0 || sys.ie == 10.0)) {
		// 浏览器版本过低
		alert("浏览器版本过低");
	}
	var divDOM = document.createElement("div");
	divDOM.id = "alert_browser";
	divDOM.innerHTML = "<p style='font-family:Georgia,Serif;width:100%;height:50px;line-height:50px;font-size:14px;margin:0;padding:0;"+
	"text-align:center;position:absolute;left:0;top:0;"+
	"background-color:#FAFAD2;border-bottom: 1px solid #DCDCDC'>系统检测您的浏览器版本过低，请升级您的浏览器&nbsp;&nbsp;"+
	// 浏览器下载图标全部在这里
	"<a target='_blank' href='http://chrome.360.cn/' style='margin:0 10px;'><img style='vertical-align:middle;' src='http://i6.download.fd.pchome.net/g1/M00/08/04/oYYBAFN0Lg2IVp_SAADF669ldkIAABh7QKbKLUAAMYD687.png' width='30' height='30' alt='360急速浏览器' /></a>"+
	"<a target='_blank' href='http://dl.pconline.com.cn/download/51614-1.html' style='margin:0 10px;'><img style='vertical-align:middle;' src='https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/chrome-512.png' width='30' height='30' alt='谷歌浏览器' /></a>"+
	"<a target='_blank' href='https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads' style='margin:0 10px;'><img style='vertical-align:middle;' src='https://vignette1.wikia.nocookie.net/kirby/images/4/40/IE.png/revision/latest?cb=20110716080705&path-prefix=en' width='30' height='30' alt='IE最新版本' /></a>"+
	"<p>";
	document.body.appendChild(divDOM)
})(window)