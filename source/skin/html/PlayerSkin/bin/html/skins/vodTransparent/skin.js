(function(a){a.SewisePlayerSkin={version:"1.0.0"};a.SewisePlayer=a.SewisePlayer||{}})(window);(function(a){a.SewisePlayer.IVodPlayer=a.SewisePlayer.IVodPlayer||{play:function(){},pause:function(){},stop:function(){},seek:function(){},changeClarity:function(){},setVolume:function(){},toPlay:function(){},duration:function(){},playTime:function(){},type:function(){},showTextTip:function(){},hideTextTip:function(){},muted:function(){}}})(window);(function(a){a.SewisePlayerSkin.IVodSkin=a.SewisePlayerSkin.IVodSkin||{player:function(){},started:function(){},paused:function(){},stopped:function(){},seeking:function(){},buffering:function(){},bufferProgress:function(){},loadedProgress:function(){},loadedOpen:function(){},loadedComplete:function(){},programTitle:function(){},duration:function(){},playTime:function(){},startTime:function(){},loadSpeed:function(){},initialClarity:function(){},lang:function(){},logo:function(){},timeUpdate:function(){},
volume:function(){},clarityButton:function(){},timeDisplay:function(){},controlBarDisplay:function(){},topBarDisplay:function(){},customStrings:function(){},fullScreen:function(){},noramlScreen:function(){},initialAds:function(){}}})(window);(function(){SewisePlayerSkin.Utils={stringer:{time2FigFill:function(a){var b,a=Math.floor(a);10>a?b="0"+a:b=""+a;return b},secondsToHMS:function(a){if(!(0>a)){var b=this.time2FigFill(Math.floor(a/3600)),c=this.time2FigFill(a/60%60),a=this.time2FigFill(a%60);return b+":"+c+":"+a}},secondsToMS:function(a){if(!(0>a)){var b=this.time2FigFill(a/60),a=this.time2FigFill(a%60);return b+":"+a}},dateToTimeString:function(a){var b;b=a?a:new Date;var a=b.getFullYear(),c=b.getMonth()+1,f=b.getDate(),i=this.time2FigFill(b.getHours()),
h=this.time2FigFill(b.getMinutes());b=this.time2FigFill(b.getSeconds());return a+"-"+c+"-"+f+" "+i+":"+h+":"+b},dateToTimeStr14:function(a){var b=a.getFullYear(),c=this.time2FigFill(a.getMonth()+1),f=this.time2FigFill(a.getDate()),i=this.time2FigFill(a.getHours()),h=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+c+f+i+h+a},dateToStrHMS:function(a){var b=this.time2FigFill(a.getHours()),c=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+
":"+c+":"+a},dateToYMD:function(a){var b=a.getFullYear(),c=this.time2FigFill(a.getMonth()+1),a=this.time2FigFill(a.getUTCDate());return b+"-"+c+"-"+a},hmsToDate:function(a){var a=a.split(":"),b=new Date;b.setHours(a[0]?a[0]:0,a[1]?a[1]:0,a[2]?a[2]:0);return b}},language:{zh_cn:{stop:"\u505c\u6b62\u64ad\u653e",pause:"\u6682\u505c",play:"\u64ad\u653e",fullScreen:"\u5168\u5c4f",normalScreen:"\u6062\u590d",soundOn:"\u6253\u5f00\u58f0\u97f3",soundOff:"\u5173\u95ed\u58f0\u97f3",clarity:"\u6e05\u6670\u5ea6",
titleTip:"\u6b63\u5728\u64ad\u653e\uff1a",claritySetting:"\u6e05\u6670\u5ea6\u8bbe\u7f6e",clarityOk:"\u786e\u5b9a",clarityCancel:"\u53d6\u6d88",backToLive:"\u56de\u5230\u76f4\u64ad",loading:"\u7f13\u51b2",subtitles:"\u5b57\u5e55","default":"\u9ed8\u8ba4"},en_us:{stop:"Stop",pause:"Pause",play:"Play",fullScreen:"Full Screen",normalScreen:"Normal Screen",soundOn:"Sound On",soundOff:"Sound Off",clarity:"Clarity",titleTip:"Playing: ",claritySetting:"Definition Setting",clarityOk:"OK",clarityCancel:"Cancel",
backToLive:"Back To Live",loading:"Loading",subtitles:"Subtitles","default":"Default"},lang:{},init:function(a){switch(a){case "en_US":this.lang=this.en_us;break;case "zh_CN":this.lang=this.zh_cn;break;default:this.lang=this.zh_cn}},getString:function(a){return this.lang[a]}}}})();(function(a){SewisePlayerSkin.BannersAds=function(b,c){function f(){y=SewisePlayerSkin.Utils.stringer.dateToYMD(new Date);k=c[y]||c["0000-00-00"];g=0;if(void 0!=k)z=k.length}function i(){for(var a=(new Date).getTime(),b=0;b<z;b++){var c=SewisePlayerSkin.Utils.stringer.hmsToDate(k[b].time).getTime();if(b<z-1){var f=SewisePlayerSkin.Utils.stringer.hmsToDate(k[b+1].time).getTime();if(a>c&&a<f){g=b;j(g);break}}else if(a>c){g=b;j(g);break}}}function h(){var a=(new Date).getTime();if(g<z-1){var b=SewisePlayerSkin.Utils.stringer.hmsToDate(k[g+
1].time).getTime();a>b&&(g++,j(g))}else SewisePlayerSkin.Utils.stringer.dateToYMD(new Date)!=y&&(f(),i())}function j(a){p=k[a].ads[0].picurl;q=k[a].ads[1].picurl;""==p&&""==q||(""==p&&""!=q?p=q:""!=p&&""==q&&(q=p),A.attr("src",p),B.attr("src",q))}var d=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:left; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');d.appendTo(b);
var A=d.find("img"),d=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:right; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');d.appendTo(b);var B=d.find("img"),p,q,y,k,g,z;f();void 0!=k&&(1==z&&""==k[0].time?j(0):(i(),setInterval(h,1E4)),A.click(function(a){a.originalEvent.stopPropagation();a=k[g].ads[0].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?
window.openAdsLink(a):window.open(a,"_blank")}),B.click(function(a){a.originalEvent.stopPropagation();a=k[g].ads[1].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?window.openAdsLink(a):window.open(a,"_blank")}))}})(window.jQuery);(function(a){SewisePlayerSkin.AdsContainer=function(b,c){var f=b.$container,i=b.$sewisePlayerUi,h=c.banners;if(h){var j=a("<div class='sewise-player-ads-banner'></div>");j.css({position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px",overflow:"hidden","pointer-events":"none"});j.appendTo(f);i.css("z-index",1);SewisePlayerSkin.BannersAds(j,h)}}})(window.jQuery);(function(a){SewisePlayerSkin.ElementObject=function(){this.$sewisePlayerUi=a(".sewise-player-ui");this.$container=this.$sewisePlayerUi.parent();this.$video=this.$container.find("video").get(0);this.$controlbar=this.$sewisePlayerUi.find(".controlbar");this.$playBtn=this.$sewisePlayerUi.find(".controlbar-btns-play");this.$pauseBtn=this.$sewisePlayerUi.find(".controlbar-btns-pause");this.$stopBtn=this.$sewisePlayerUi.find(".controlbar-btns-stop");this.$fullscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
this.$normalscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");this.$soundopenBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundopen");this.$soundcloseBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundclose");this.$volumelineVolume=this.$sewisePlayerUi.find(".controlbar-volumeline-volume");this.$volumelineDragger=this.$sewisePlayerUi.find(".controlbar-volumeline-dragger");this.$volumelinePoint=this.$sewisePlayerUi.find(".controlbar-volumeline-point");this.$playtime=this.$sewisePlayerUi.find(".controlbar-playtime");
this.$controlBarProgress=this.$sewisePlayerUi.find(".controlbar-progress");this.$progressPlayedLine=this.$sewisePlayerUi.find(".controlbar-progress-playedline");this.$progressPlayedPoint=this.$sewisePlayerUi.find(".controlbar-progress-playpoint");this.$progressLoadedLine=this.$sewisePlayerUi.find(".controlbar-progress-loadedline");this.$progressSeekLine=this.$sewisePlayerUi.find(".controlbar-progress-seekline");this.$logo=this.$sewisePlayerUi.find(".logo");this.$logoIcon=this.$sewisePlayerUi.find(".logo-icon");
this.$topbar=this.$sewisePlayerUi.find(".topbar");this.$programTip=this.$sewisePlayerUi.find(".topbar-program-tip");this.$programTitle=this.$sewisePlayerUi.find(".topbar-program-title");this.$topbarClock=this.$sewisePlayerUi.find(".topbar-clock");this.$buffer=this.$sewisePlayerUi.find(".buffer");this.$bufferTip=this.$sewisePlayerUi.find(".buffer-text-tip");this.$bigPlayBtn=this.$sewisePlayerUi.find(".big-play-btn");this.defStageWidth=this.$container.width();this.defStageHeight=this.$container.height();
this.defLeftValue=parseInt(this.$container.css("left"));this.defTopValue=parseInt(this.$container.css("top"));this.defOffsetX=this.$container.get(0).getBoundingClientRect().left;this.defOffsetY=this.$container.get(0).getBoundingClientRect().top;this.defOverflow=a("body").css("overflow")}})(window.jQuery);(function(a){SewisePlayerSkin.ElementLayout=function(b){function c(){null!=document.fullscreenElement||null!=document.msFullscreenElement||null!=document.mozFullScreenElement||null!=document.webkitFullscreenElement?j.fullScreen():j.normalScreen()}var f=b.$container,i=b.$controlBarProgress,h=b.$playtime,j=this,d=b.defStageWidth,A=b.defStageHeight,B=b.defLeftValue,p=b.defTopValue,q=b.defOffsetX,y=b.defOffsetY,k=b.defOverflow,g=parseInt(d)-265;0>g&&(g+=h.width(),h.hide());i.css("width",g);document.addEventListener("fullscreenchange",
c);document.addEventListener("MSFullscreenChange",c);document.addEventListener("mozfullscreenchange",c);document.addEventListener("webkitfullscreenchange",c);this.fullScreen=function(b){if("not-support"==b){var b=a(window).width(),c=a(window).height()-8;f.css("width",b);f.css("height",c);b=p-y+"px";f.css("left",B-q+"px");f.css("top",b);a("body").css("overflow","hidden")}else f.css("width","100%"),f.css("height","100%");b=parseInt(f.width())-265;0>b?(b+=h.width(),h.hide()):h.show();i.css("width",b)};
this.normalScreen=function(){f.css("width",d);f.css("height",A);f.css("left",B);f.css("top",p);a("body").css("overflow",k);g=parseInt(d)-265;0>g?(g+=h.width(),h.hide()):h.show();i.css("width",g)}}})(window.jQuery);(function(){SewisePlayerSkin.LogoBox=function(a){var b=a.$logoIcon;b.click(function(a){a.originalEvent.stopPropagation()});this.setLogo=function(a){b.css("background","url("+a+") 0px 0px no-repeat");b.attr("href","http://www.foream.cn/")}}})(window.jQuery);(function(){SewisePlayerSkin.TopBar=function(a){var b=a.$topbar,c=a.$programTip,f=a.$programTitle,i=a.$topbarClock;setInterval(function(){var a=SewisePlayerSkin.Utils.stringer.dateToTimeString();i.text(a)},1E3);this.setTitle=function(a){f.text(a)};this.show=function(){b.css("visibility","visible")};this.hide=function(){b.css("visibility","hidden")};this.hide2=function(){b.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("titleTip");c.text(a)}}})(window.jQuery);(function(a){SewisePlayerSkin.ControlBar=function(b,c,f){function i(){!1==$&&(E.css("visibility","visible"),f.show(),$=!0,C=setTimeout(d,aa))}function h(){0!=C&&(clearTimeout(C),C=0)}function j(){0==C&&(C=setTimeout(d,aa))}function d(){E.css("visibility","hidden");f.hide();$=!1}function A(a){a=n+(a.pageX-F);0<a&&a<v&&(w.css("width",a),r.css("left",a-L/2))}function B(b){u.unbind("mousemove",A);a(document).unbind("mouseup",B);T=b.pageX;F!=T&&(n=w.width(),G=n/v,l.seek(G*H));M=!1}function p(a){e=a.originalEvent;
1==e.targetTouches.length&&(e.preventDefault(),a=n+(e.targetTouches[0].pageX-F),0<a&&a<v&&(w.css("width",a),r.css("left",a-L/2)))}function q(a){e=a.originalEvent;r.unbind("touchmove",p);r.unbind("touchend",q);if(1==e.changedTouches.length)T=e.changedTouches[0].pageX,F!=T&&(n=w.width(),G=n/v,l.seek(G*H));M=!1}function y(a){a=m+(a.pageX-I);0<a&&a<s&&(t.css("width",a),o.css("left",a-D/2))}function k(b){u.unbind("mousemove",y);a(document).unbind("mouseup",k);U=b.pageX;I!=U&&(m=t.width(),x=m/s,l.setVolume(x),
R())}function g(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=m+(e.targetTouches[0].pageX-I),0<a&&a<s&&(t.css("width",a),o.css("left",a-D/2)))}function z(a){e=a.originalEvent;o.unbind("touchmove",g);o.unbind("touchend",z);if(1==e.changedTouches.length)U=e.changedTouches[0].pageX,I!=U&&(m=t.width(),x=m/s,l.setVolume(x),R())}function R(){0<x?(l.muted(!1),N.show(),J.hide()):(l.muted(!0),N.hide(),J.show())}var u=b.$container,S=b.$video,E=b.$controlbar,V=b.$playBtn,O=b.$pauseBtn,
ga=b.$stopBtn,W=b.$fullscreenBtn,P=b.$normalscreenBtn,N=b.$soundopenBtn,J=b.$soundcloseBtn,t=b.$volumelineVolume,Q=b.$volumelineDragger,o=b.$volumelinePoint,ha=b.$playtime,w=b.$progressPlayedLine,r=b.$progressPlayedPoint,ia=b.$progressLoadedLine,K=b.$progressSeekLine,ba=b.$buffer,ja=b.$bufferTip,X=b.$bigPlayBtn,Y=this,l,ca="normal",H=0.1,da=0,ea="00:00:00",fa="00:00:00",L=0,M=!1,F=0,T=0,n=0,v=0,G=0,$=!0,D=0,s=0,m=0,x=0,I=0,U=0,Z=!1,C,aa=5E3,L=r.width(),v=K.width(),D=o.width(),s=Q.width();O.hide();
P.hide();J.hide();ba.hide();C=setTimeout(d,aa);a(S).css("pointer-events","none");u.click(function(){u.mousemove();Z?l.pause():l.play()});u.dblclick(function(){"normal"==ca?Y.fullScreen():Y.noramlScreen()});u.bind({mousemove:i,touchmove:i});E.bind({mouseover:h,touchstart:h});E.bind({mouseout:j,touchend:j});E.click(function(a){a.originalEvent.stopPropagation()});V.click(function(){l.play()});O.click(function(){l.pause()});ga.click(function(){l.stop()});X.click(function(a){a.originalEvent.stopPropagation();
l.play()});W.click(function(){Y.fullScreen()});P.click(function(){Y.noramlScreen()});N.click(function(){l.muted(!0);N.hide();J.show();t.css("width",0);o.css("left",-D/2)});J.click(function(){l.muted(!1);N.show();J.hide();t.css("width",m);o.css("left",m-D/2)});K.mousedown(function(a){n=a.pageX-a.target.getBoundingClientRect().left;v=K.width();w.css("width",n);r.css("left",n-L/2);G=n/v;l.seek(G*H)});r.mousedown(function(b){this.blur();M=!0;F=b.pageX;n=w.width();v=K.width();u.bind("mousemove",A);a(document).bind("mouseup",
B)});r.bind("touchstart",function(a){e=a.originalEvent;r.blur();a=e.targetTouches[0];M=!0;F=a.pageX;n=w.width();v=K.width();r.bind("touchmove",p);r.bind("touchend",q)});Q.mousedown(function(a){m=a.pageX-a.target.getBoundingClientRect().left;s=Q.width();t.css("width",m);o.css("left",m-D/2);x=m/s;l.setVolume(x);R()});o.mousedown(function(b){this.blur();I=b.pageX;m=t.width();s=Q.width();u.bind("mousemove",y);a(document).bind("mouseup",k)});o.bind("touchstart",function(a){e=a.originalEvent;o.blur();I=
e.targetTouches[0].pageX;m=t.width();s=Q.width();o.bind("touchmove",g);o.bind("touchend",z)});this.setPlayer=function(a){l=a};this.started=function(){V.hide();O.show();X.hide();Z=!0};this.paused=function(){V.show();O.hide();X.show();Z=!1};this.stopped=function(){V.show();O.hide();X.show();Z=!1};this.setDuration=function(a){H=a;fa=SewisePlayerSkin.Utils.stringer.secondsToMS(H)};this.timeUpdate=function(a){da=a;ea=SewisePlayerSkin.Utils.stringer.secondsToMS(da);ha.text(ea+"/"+fa);M||(n=da/H*(K.width()-
L),w.css("width",n),a=w.width(),r.css("left",a))};this.loadProgress=function(a){ia.css("width",100*a+"%")};this.initVolume=function(a){x=a;m=s*x;t.css("width",m);o.css("left",m-D/2);R()};this.hide2=function(){E.hide()};this.fullScreen=function(){W.hide();P.show();var a=u.get(0);a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():S.webkitEnterFullscreen?(S.play(),
S.webkitEnterFullscreen(),W.show(),P.hide()):c.fullScreen("not-support");ca="full"};this.noramlScreen=function(){W.show();P.hide();document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():c.normalScreen();ca="normal"};this.showBuffer=function(){ba.show()};this.hideBuffer=function(){ba.hide()};this.initLanguage=function(){var a=
SewisePlayerSkin.Utils.language.getString("loading");ja.text(a)}}})(window.jQuery);(function(a,b){b(document).ready(function(){var a=SewisePlayer.IVodPlayer,b=new SewisePlayerSkin.ElementObject,i=new SewisePlayerSkin.ElementLayout(b),h=new SewisePlayerSkin.LogoBox(b),j=new SewisePlayerSkin.TopBar(b),d=new SewisePlayerSkin.ControlBar(b,i,j);SewisePlayerSkin.IVodSkin.player=function(b){a=b;d.setPlayer(a)};SewisePlayerSkin.IVodSkin.started=function(){d.started()};SewisePlayerSkin.IVodSkin.paused=function(){d.paused()};SewisePlayerSkin.IVodSkin.stopped=function(){d.stopped()};SewisePlayerSkin.IVodSkin.duration=
function(a){d.setDuration(a)};SewisePlayerSkin.IVodSkin.timeUpdate=function(a){d.timeUpdate(a)};SewisePlayerSkin.IVodSkin.loadedProgress=function(a){d.loadProgress(a)};SewisePlayerSkin.IVodSkin.loadedOpen=function(){d.showBuffer()};SewisePlayerSkin.IVodSkin.loadedComplete=function(){d.hideBuffer()};SewisePlayerSkin.IVodSkin.programTitle=function(a){j.setTitle(a)};SewisePlayerSkin.IVodSkin.logo=function(a){h.setLogo(a)};SewisePlayerSkin.IVodSkin.volume=function(a){d.initVolume(a)};SewisePlayerSkin.IVodSkin.initialClarity=
function(){};SewisePlayerSkin.IVodSkin.clarityButton=function(){};SewisePlayerSkin.IVodSkin.timeDisplay=function(){};SewisePlayerSkin.IVodSkin.controlBarDisplay=function(a){"enable"!=a&&d.hide2()};SewisePlayerSkin.IVodSkin.topBarDisplay=function(a){"enable"!=a&&j.hide2()};SewisePlayerSkin.IVodSkin.customStrings=function(){};SewisePlayerSkin.IVodSkin.fullScreen=function(){d.fullScreen()};SewisePlayerSkin.IVodSkin.noramlScreen=function(){d.noramlScreen()};SewisePlayerSkin.IVodSkin.initialAds=function(a){a&&
SewisePlayerSkin.AdsContainer(b,a)};SewisePlayerSkin.IVodSkin.lang=function(a){SewisePlayerSkin.Utils.language.init(a);d.initLanguage();j.initLanguage()};try{SewisePlayer.CommandDispatcher.dispatchEvent({type:SewisePlayer.Events.PLAYER_SKIN_LOADED,playerSkin:SewisePlayerSkin.IVodSkin})}catch(A){console.log("No Main Player")}})})(window,window.jQuery);
