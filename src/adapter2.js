var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
        document.writeln("<font color='red'>警告: 网页版 GeoGebra 可能会占用大量CPU, GPU与RAM资源, 可能会造成移动设备暂时卡顿, 如果发生此类情况, 关闭浏览器或重启手机即可恢复正常.</font><br>")
    }
