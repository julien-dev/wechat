var data = [{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_1"><div class="content"><img class="bg" src="images/screen_1.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_2"><div class="content"><img class="bg" src="images/screen_2.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_3"><div class="content"><img class="bg" src="images/screen_3.png"></div></div>'
}];
var jBody = $("body") ;

var curNum = 0 ;
var iSlider = new iSlider({
    dom : document.getElementById('container'),
    data : data,
    type:"dom",
    duration: 2000,
    isVertical: true,
    isLooping: false,
    isDebug: false,
    isAutoplay: false,
    onslidechange:function(num,e){
        curNum = num;
    },
    onslidestart:function(e){
        jBody.removeClass("can-push");
        jBody.addClass("can-not-push");
    },
    onslideend:function(e){
        if(curNum===2){
            jBody.removeClass("can-push");
            jBody.addClass("can-not-push");
        }
        else{
            jBody.removeClass("can-not-push");
            jBody.addClass("can-push");
        }

    }
});

function getRootPath(doc){
    var curWwwPath=doc.location.href;
    var pathName=doc.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    var localhostPath=curWwwPath.substring(0,pos);
    var projectName=pathName.substring(0,pathName.substr(1).lastIndexOf('/')+1);
    return(localhostPath+projectName+"/");
}
(function ( ua, appVersion, platform ) {
    window.ua= {
        win32 : platform === "Win32",
        ie : !!window.ActiveXObject || "ActiveXObject" in window,
        ieVersion : Math.floor( (/MSIE ([^;]+)/.exec( ua ) || [0, "0"])[1] ),

        // ios系列
        ios : (/iphone|ipad/gi).test( appVersion ),
        iphone : (/iphone/gi).test( appVersion ),
        ipad : (/ipad/gi).test( appVersion ),
        iosVersion : parseFloat( ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec( ua ) || [0, ''])[1])
            .replace( 'undefined', '3_2' ).replace( '_', '.' ).replace( '_', '' ) ) || false,
        safari : /Version\//gi.test( appVersion ) && /Safari/gi.test( appVersion ),
        uiWebView : /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test( ua ),

        // 安卓系列
        android : (/android/gi).test( appVersion ),
        androidVersion : parseFloat( "" + (/android ([0-9\.]*)/i.exec( ua ) || [0, ''])[1] ),

        // chrome
        chrome : /Chrome/gi.test( ua ),
        chromeVersion : parseInt( ( /Chrome\/([0-9]*)/gi.exec( ua ) || [0, 0] )[1], 10 ),

        // 内核
        webkit : /AppleWebKit/.test( appVersion ),

        // 其他浏览器
        uc : appVersion.indexOf( "UCBrowser" ) !== -1,
        Browser : / Browser/gi.test( appVersion ),
        MiuiBrowser : /MiuiBrowser/gi.test( appVersion ),

        // 微信
        MicroMessenger : ua.toLowerCase().match( /MicroMessenger/i ) == "micromessenger",

        // 触摸
        canTouch : "ontouchstart" in document,
        msPointer : window.navigator.msPointerEnabled
    }
})( navigator.userAgent, navigator.appVersion, navigator.platform );
$(document).ready(function() {

    var music = document.getElementById("bg-sound");
    music.preload="auto";
    var musicIcon = $(".music-icon");
    if ( !ua.ios ) {
        music.addEventListener("loadeddata", function()
            {
                music.volume = 0.5;
                if (music.paused) {
                    music.play();
                }
            }
        );
    }
    musicIcon.click(function(e){
        if (music.paused) {
            music.play();
        }else{
            music.pause();
        }
    })

});





