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
// 开启Api的debug模式
WeixinApi.enableDebugMode();
// 给按钮增加click事件：请不要太纠结这个写法，demo而已
if(!window.WeixinApi || !window.WeixinJSBridge) {
    alert('请确认您是在微信内置浏览器中打开的，并且WeixinApi.js已正确引用');
}
// 刷新
//location.replace('?' + Math.random(),true);
// 需要分享的内容，请放到ready里
WeixinApi.ready(function(Api) {
    // 微信分享的数据
    var wxData = {
        "appId": "", // 服务号可以填写appId
        "imgUrl" : getRootPath(document)+'images/TLImg.png',
        "link" : getRootPath(document),
        "desc" : '经纪业务学习平台邀请函',
        "title" : "经纪业务学习平台邀请函"
    };
    // 分享的回调
    var wxCallbacks = {
        // 收藏操作是否触发回调，默认是开启的
        favorite : false,
        // 分享操作开始之前
        ready : function() {
            // 你可以在这里对分享的数据进行重组
            alert("准备分享");
        },
        // 分享被用户自动取消
        cancel : function(resp) {
            // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
            alert("分享被取消，msg=" + resp.err_msg);
        },
        // 分享失败了
        fail : function(resp) {
            // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
            alert("分享失败，msg=" + resp.err_msg);
        },
        // 分享成功
        confirm : function(resp) {
            // 分享成功了，我们是不是可以做一些分享统计呢？
            alert("分享成功，msg=" + resp.err_msg);
        },
        // 整个分享过程结束
        all : function(resp,shareTo) {
            // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
            alert("分享" + (shareTo ? "到" + shareTo : "") + "结束，msg=" + resp.err_msg);
        }
    };
    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    Api.shareToFriend(wxData, wxCallbacks);
    // 点击分享到朋友圈，会执行下面这个代码
    Api.shareToTimeline(wxData, wxCallbacks);
    // 点击分享到腾讯微博，会执行下面这个代码
    Api.shareToWeibo(wxData, wxCallbacks);
    // iOS上，可以直接调用这个API进行分享，一句话搞定

    if ( ua.ios ) {
        Api.generalShare(wxData,wxCallbacks);
    }
});
function getRootPath(doc){
    var curWwwPath=doc.location.href;
    alert(curWwwPath)
    var pathName=doc.location.pathname;
    alert(pathName)
    var pos=curWwwPath.indexOf(pathName);

    var localhostPath=curWwwPath.substring(0,pos);
    alert(localhostPath)
    var projectName=pathName.substring(0,pathName.substr(1).lastIndexOf('/')+1);
    alert(projectName)
    alert(localhostPath+projectName+"/");
    return(localhostPath+projectName+"/");
}
$(document).ready(function() {
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
    },{
        'height' : '100%',
        'width' : '100%',
        'content' : '<div class="screen screen_4"><div class="content"><img class="bg" src="images/screen_4.png"></div></div>'
    }];
    var jBody = $("body") ;

    var curNum = 0 ;
    var iSlider = new window.iSlider({
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
            if(curNum===3){
                jBody.removeClass("can-push");
                jBody.addClass("can-not-push");
            }
            else{
                jBody.removeClass("can-not-push");
                jBody.addClass("can-push");
            }

        }
    });
    var music = document.getElementById("bg-sound");
    music.preload="auto";
    var musicIcon = $(".music-icon");
    if ( !ua.ios ) {
        music.addEventListener("loadeddata", function()
            {
                if(music.volume<0.1){ music.volume = 0.5;}
                if (music.paused) {
                    music.play();
                    musicIcon.addClass("play");
                }
            }
        );
    }
    else{
        music.play();
        musicIcon.addClass("play");
    }
    musicIcon.click(function(e){
        if (music.paused) {
            music.play();
            musicIcon.addClass("play");
        }else{
            music.pause();
            musicIcon.removeClass("play");
        }
    })

});





