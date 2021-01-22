< !--浏览器搞笑标题-->
 var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.2/source/favicon.png");
        document.title = '喔呦，网页崩溃啦';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.2/source/favicon.png");
        document.title = '欢迎主人！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});