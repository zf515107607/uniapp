
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/search/search","pages/add-input/add-input"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#ADADAD","selectedColor":"#FEE42A","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"糗事","iconPath":"static/index.png","selectedIconPath":"static/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/news.png","selectedIconPath":"static/newsed.png"},{"pagePath":"pages/paper/paper","text":"小纸条","iconPath":"static/paper.png","selectedIconPath":"static/papered.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"static/home.png","selectedIconPath":"static/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"news","compilerVersion":"2.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","disableScroll":false,"scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索资讯","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#FF9619","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"$FF9619","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","disabled":false},"buttons":[{"color":"$FF9619","colorPressed":"#BBBBBB","float":"right","fontSize":"15px","text":"取消"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});