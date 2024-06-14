/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/09/对nexmoe主题做出的改动/index.html","644fe55f1dd20a5c1d8514daa8812860"],["/about.assets/20210207192415-1715158057211-49.jpg","5f90d675c15e0d376371a32afd772eb8"],["/about.assets/20210207192415.jpg","5f90d675c15e0d376371a32afd772eb8"],["/about.assets/20210207192416-1715158057211-51.jpg","945f68be1f65e74be684617e5d3405c4"],["/about.assets/20210207192416.jpg","945f68be1f65e74be684617e5d3405c4"],["/about.assets/20210207192530.jpg","823513218dc80f28721b450aa658f74b"],["/about.assets/20210207192532-1715158057211-42.jpg","6638fcc841d7c88b10bd2df1ab580d75"],["/about.assets/20210207192532.jpg","6638fcc841d7c88b10bd2df1ab580d75"],["/about.assets/20210207192533-1715158057211-44.jpg","d457ac29bfd0ad1f283b7c8dafa8e0fb"],["/about.assets/20210207192533.jpg","d457ac29bfd0ad1f283b7c8dafa8e0fb"],["/about.assets/20210207192534-1715158057211-46.jpg","6e6183027061eb135d2aa1d031d97041"],["/about.assets/20210207192534.jpg","6e6183027061eb135d2aa1d031d97041"],["/about.assets/20210207192753-1715158057210-31.jpg","3703a8920bea429011ef9347ae33475b"],["/about.assets/20210207192753.jpg","3703a8920bea429011ef9347ae33475b"],["/about.assets/20210207192754-1715158057210-33.jpg","539bf8683ae289754e2e47c5849d04e6"],["/about.assets/20210207192754.jpg","539bf8683ae289754e2e47c5849d04e6"],["/about.assets/20210207192755-1715158057210-35.jpg","2b4caf844bc1759886630c213f33e074"],["/about.assets/20210207192755.jpg","2b4caf844bc1759886630c213f33e074"],["/about.assets/20210207192756-1715158057210-37.jpg","43f5c40ca25047a4fa1bef6e6cd1149b"],["/about.assets/20210207192756.jpg","43f5c40ca25047a4fa1bef6e6cd1149b"],["/about.html","428b3a5d12e965bdbdc987fa7e07649b"],["/archives.html","a4bc257451cf613a1ac5cc1008ac61ea"],["/archives/2024/05/index.html","eff1612fc8135714c91ade2fed23c354"],["/archives/2024/index.html","db0562297947ac41dda6ef151a394362"],["/archives/index.html","c30738388a9ce850c8c5a27bc331b0da"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/hexo/index.html","525eacbd703a02f3e7ef3eb9e9728df4"],["/css/other.css","cc30c3c537377808e28a65c5d78340e4"],["/css/style.css","22e7e4b70109b7802a45c80b567ff04e"],["/css/webapp.css","285e9b9f624eed10972e3786b3fdf3e8"],["/download.html","c43c9720e0ecfe32a0606c8e4c435ec4"],["/friend.html","2eb0732ebf38bbd4baa012dafc884bb0"],["/images/avater.png","0372802489131321ffc62dc9df2e9539"],["/images/background/IMG_20231122_170338.jpg","f9bdac31b7c80f3a351f22a41263b1b8"],["/images/background/background.png","581e80d91f9df55b310771e841a3529f"],["/images/background/cangshu.png","f5c686425bb9f85fdf5bf88a0602c0a1"],["/images/background/cat.png","253993fae9f23bc3f3db68be44536987"],["/images/background/chichi.jpg","45374dd6fcf502c6dad711e485829fcd"],["/images/background/lihui.png","bf4df258b8e2db9ff18b430ff9842f14"],["/images/background/mmexport1711886043602.jpg","73be72c3dbf6740db2787b402f0c267f"],["/images/background/papa.jpg","531b6a61701dba0062912d07d0e04f0c"],["/images/background/xiaomai.jpg","41e8b7d8b203f591bf3e4f0b62dcc65e"],["/images/emoji/100.gif","92588bc1e94a8955f476d6cdb0091dec"],["/images/emoji/101.gif","07168a250e588070336ec11e98f73180"],["/images/emoji/102.gif","bf90da8b7128dd464f2ccd4007ca7499"],["/images/emoji/103.gif","d816400e0f36bad0a00db113aeb6b509"],["/images/emoji/104.gif","c5cf60ea306a59b79550f71a911a599d"],["/images/emoji/105.gif","b004f9d2e0e40ac252ec4cff8d3adfdf"],["/images/emoji/106.gif","ab66e8a9ba69f370343b0c0a37ce254e"],["/images/emoji/107.gif","2f68e2d84c9b7c593dfa03471d6daa1d"],["/images/emoji/108.gif","9ea4861ab0fdb7842ddf628a9a24707f"],["/images/emoji/109.gif","d6bab74b7ee6f8b4ca147cb1edde3080"],["/images/emoji/110.gif","31ef4bcc34f1aadc35c923265d8d6c4a"],["/images/emoji/111.gif","f2f24ead97e0bf664193a535d31e6ac3"],["/images/emoji/112.gif","620d12101aeec84d2d0a8c77100ffe0c"],["/images/emoji/113.gif","6ef9572b33bfbfdff45abf141ca2a9be"],["/images/emoji/114.gif","1af3dacd558fa7c91833df58dfd8d985"],["/images/emoji/115.gif","fd1142e29b0307cd3eaa857c9231763e"],["/images/emoji/116.gif","cbabb1d567752f6d994d60fd698d6652"],["/images/emoji/117.gif","e9e331fa6c61c925775f88490593d88d"],["/images/emoji/118.gif","f8451ac7b68b753656d018b8bfdfcf73"],["/images/emoji/119.gif","5751314de69e6bafb7488d8033d2ffda"],["/images/emoji/120.gif","eac1a14fe16d52119c4cce2a45ee3571"],["/images/emoji/121.gif","6fff041cce9c355bf565078747950dbc"],["/images/emoji/122.gif","c72abaf967aa5df1f7358c958d6c5895"],["/images/emoji/123.gif","a6721bdd6c228b065da98420c617ecc3"],["/images/emoji/124.gif","418a2ee24201a3408e5e9fca9c2eeb20"],["/images/emoji/125.gif","f8647a306f62a8ad4faa44a18e0cd530"],["/images/emoji/126.gif","36236ab3c9873316ef9a6d84718ca1f3"],["/images/emoji/127.gif","87e94503fda8406d8d8a7ef5d350f9cd"],["/images/emoji/128.gif","efc2f8f110a089c387d9ec6dcc9ebd4e"],["/images/emoji/129.gif","9f669f47fad8149c406522a6cadb60d2"],["/images/emoji/130.gif","126876c11becbdaf142ef0a42e866236"],["/images/emoji/131.gif","580ee31409f008f629d416cbf0be825e"],["/images/emoji/132.gif","7b9272aacfe4bb3eabe24677995f78b0"],["/images/emoji/133.gif","08fcb17659c9f89f4679a326faa02a9d"],["/images/emoji/134.gif","d4273ac35e751b4d271ea555cf9e4286"],["/images/emoji/135.gif","f1ad9a230f65ab4149193d163816e4d8"],["/images/emoji/136.gif","6a657e3f2563385ea973f8e72672f7c9"],["/images/emoji/137.gif","5050f4c158acd39f6aace0e1fc1d71cc"],["/images/emoji/138.gif","fc6097ca62831981dc104364d0ffe58c"],["/images/emoji/139.gif","609d95f0c8434bfbc7bac9aa4870b163"],["/images/emoji/140.gif","613674f8ad979183f49bb444d4fdb554"],["/images/emoji/141.gif","205b95779f0382b6b2e37702aa7c6485"],["/images/emoji/142.gif","3b9d2ba2e87bef91e56e9127d56aa546"],["/images/emoji/143.gif","2ac7ff772d4c72be226d0ea614edc32a"],["/images/emoji/144.gif","556b7deede0a5297cb17b4c07fc5ec68"],["/images/emoji/145.gif","f5a0be56417b831f18db47b7651d15e5"],["/images/emoji/146.gif","de4a643091c6c86ea6683e0488c5ceb3"],["/images/emoji/147.gif","63a6b3b5e78974d4fc752839706dc470"],["/images/emoji/148.gif","faad0cd9527eb5e99921667df2a2bcc5"],["/images/emoji/149.gif","753b9b92396bbace2a948f682d25c789"],["/images/emoji/150.gif","5bf4d795265f48477c2d9f07b74f8ecd"],["/images/emoji/151.gif","73b1d0f25b03a090d5d34abd28d3d430"],["/images/emoji/152.gif","b9829a380ae4fdd8782e7579ea54a68b"],["/images/emoji/153.gif","947b07ae57011a8d640a43d8d128b5a4"],["/images/emoji/154.gif","dad0f5c7a9733dd54b4638825c87bac5"],["/images/emoji/155.gif","1cc2dc29bddccc1bb27496ec994f2eee"],["/images/emoji/156.gif","87afe2274e0e27314377e66900ca7797"],["/images/emoji/157.gif","75ebc9e768941c649eb9b17f03ba4faf"],["/images/emoji/158.gif","9b797d6ee690c56ae4adcf65a6d054b4"],["/images/emoji/159.gif","8a0e51bd92c1531f24ce13f8979074cd"],["/images/emoji/160.gif","5e8faee648e64b0d11e556593fe16a7f"],["/images/emoji/161.gif","3ac8a0bb7ea3c23f9c80b3ad2298b615"],["/images/emoji/162.gif","755435edbdb75253afa865e8c9c86d9e"],["/images/emoji/163.gif","6c48eafa50d2d8ce77f9bf278194d3d6"],["/images/emoji/164.gif","cc31ff6037501965105b2949441667d3"],["/images/emoji/165.gif","11fae2aeeea20aa7134a6a1831a9f966"],["/images/emoji/166.gif","7184aa30253a50198b4b05467397d520"],["/images/emoji/167.gif","f30b55511a448f4daff39152daa8cd14"],["/images/emoji/168.gif","23cc90fc6a6a4a916a3a0740df0a266b"],["/images/emoji/169.gif","45375b2157bf95b0c0df5db9eb319c61"],["/images/emoji/170.gif","afb50f1c5c34af7ff0625b9674f08c89"],["/images/emoji/171.gif","b733a36bf3c63d848b3d741c36b493f4"],["/images/emoji/172.gif","033478e51831814709c6a84932d1b437"],["/images/emoji/173.gif","9b454cd69adaf35840c9979d65c56ffa"],["/images/emoji/174.gif","5e12d397b2482ad75546b340315e4e23"],["/images/emoji/175.gif","49a1ec6e2184160806c712913a490e73"],["/images/emoji/176.gif","da72b1ae05f7037c145d0d108ecbd9bb"],["/images/emoji/177.gif","578c342b255b7d1ebc1ba927f81db161"],["/images/emoji/178.gif","b10a0611a54452c7bb2dc6ce23ae399e"],["/images/emoji/179.gif","d35885ca05d6b58e9395257f428e4471"],["/images/emoji/180.gif","19257e373e262e26f4e06267ee4752ec"],["/images/emoji/181.gif","2b82e579f8e28f49cca5745f9ae96f4a"],["/images/emoji/182.gif","da259b207b01ba7df70d82f38bf56240"],["/images/emoji/183.gif","dff3ec6f19e9f860b56ca08ef2daa766"],["/images/emoji/184.gif","a786f6eff46e3c4ee047a911995706e1"],["/images/emoji/185.gif","d8f770afe3e0ee5d0f39a4276418f99f"],["/images/emoji/186.gif","75cc37c7f5488b048eca8366d1f5c267"],["/images/emoji/187.gif","2e09350136c2d799a5104a0aabd3460c"],["/images/emoji/188.gif","b0abc1562f1d0495720e45ae1a6b60a5"],["/images/emoji/189.gif","fa4594a6b493c4a0592c3a345307c5e5"],["/images/emoji/190.gif","01df46c22decf2eba7ddc8e055786d3d"],["/images/emoji/191.gif","7341843bac9b023ca321475a6cd80819"],["/images/emoji/192.gif","463da8d41012d47d30eb3b456c069444"],["/images/emoji/193.gif","134c756ff05828ef892d4caebb66765a"],["/images/emoji/194.gif","c88814fcee886659fd92694574859750"],["/images/emoji/195.gif","619e886911ceb694f802ce26d79912ad"],["/images/emoji/196.gif","d4192288bc81cbecdba176b4ae35e8d6"],["/images/emoji/197.gif","b3a524b3d2be653be3e3e65388dc8219"],["/images/emoji/198.gif","88770c539a97b062d75680525c03970d"],["/images/emoji/199.gif","9da78ce8d878999c696af18ce378241c"],["/images/emoji/200.png","2d358a56143d168c29b227d0d251634b"],["/images/emoji/201.png","83aefc74df4f3d2fbd3150c983c58d38"],["/images/emoji/202.png","a8642fbef6254c8786cd6caa379cf3cc"],["/images/emoji/203.png","3ae73730a0613996fcabe952a2f9a7a8"],["/images/emoji/204.png","957f7d722499e196991004a753fbffa7"],["/images/emoji/205.png","b6ba27514b5aabb179d038811e866a2b"],["/images/emoji/206.png","935f6e662580c0adea4eec8fcd3edcd5"],["/images/emoji/207.png","9f2666523baf746fe910d7825b2b7548"],["/images/emoji/208.png","67733baab490453d6b6763ae708422c8"],["/images/emoji/209.png","2559c9611924a72dde4b7acf185ccdba"],["/images/emoji/210.png","8231e003e89c1864c34ed9803c5b1768"],["/images/emoji/211.png","57189d5e2fd833b698faee1774c1ea70"],["/images/emoji/212.png","edf338d067ed4d86fc141e27d1ade024"],["/images/emoji/213.png","13ab30a11cb8a11b548bb8c924b5e31d"],["/images/emoji/214.png","747440bee5093b70a85ed260f2efb5e4"],["/images/emoji/215.png","96c95431ef32931d90fdde1dde502706"],["/images/emoji/216.png","979fa22c0782c4092b2725ba82409d4f"],["/images/emoji/217.png","b5c489f86ce3b7a024c5c51566c5de30"],["/images/emoji/218.png","aa08f53d39653aad6bc541a7228bc447"],["/images/emoji/219.png","6103880f0efcdb63d7b57380d966ba33"],["/images/f1.jpg","a71970ad4c38bac89049a81e59193fad"],["/images/head.jpg","c7e1dd13459be76c63f3ba69654342b1"],["/images/head/avater.png","0372802489131321ffc62dc9df2e9539"],["/images/head/call.jpg","417c53f8595953f248365da028b130d7"],["/images/head/f1.jpg","a71970ad4c38bac89049a81e59193fad"],["/images/head/head.jpg","c7e1dd13459be76c63f3ba69654342b1"],["/images/head/uniapp.jpg","244fcce8fee245a0562210809a264d1b"],["/images/head/vue.jpg","20d2faed75e19291a04d998a96ac9b84"],["/images/post/JavaScript.jpg","90f5dd2a6750c1abe2ab1f2ae3dccb70"],["/images/post/TypeScript.jpg","b931f45d5643b287ad646bf8b8907a8b"],["/images/post/algorithm.jpg","8ca44c471f68c044a7dd56228e6aadab"],["/images/post/beautify.jpg","077f1277934f72f01a555723aae8e3ba"],["/images/post/browser.jpg","16024f5ccb974c1d09c6bb4bc1c15bca"],["/images/post/css.jpg","3a2294da80b37a04ad4c260e79b60402"],["/images/post/data.jpg","9fcc73a14c726cff25c66449e18537af"],["/images/post/development_tool.jpg","4329f0a621bebf2655255ce294ffa4c6"],["/images/post/docker.jpg","f5c747dc58446f843eb879e443aa90b3"],["/images/post/echarts.jpg","f7134616999b70af5f393cad243b0950"],["/images/post/editor.jpg","3b14d87cddee777e393653c6ec217206"],["/images/post/es6.jpg","ce2689c6bdeef909514f00388b321f33"],["/images/post/git.jpg","70773cb689ecd239ba9e5ae3c5d5f96d"],["/images/post/internet.jpg","d16ea2b98ae737d21fd876f906777f21"],["/images/post/java.jpg","0ee74562f2a07c92f3959eebb74f719a"],["/images/post/markerdown.jpg","d0924b8e09cd9f715530e17a0b73fdac"],["/images/post/nodejs.jpg","b5f18b9bd0f2e9d74294edcf81eafff8"],["/images/post/phantomjs.png","ca9d928bde9157f174346930b6991b95"],["/images/post/ui.jpg","e3f39d19b7bc8717673c27d38bfd1379"],["/images/post/vue.jpg","c8ae10bf98f8ff98d4e74d68f0cfe9e0"],["/images/post/webpack.jpg","7db83421618edb9dc8dc003ced01fda4"],["/images/post/wechat_applet.jpg","5d944c05d6dc864ecc7fa532849065c8"],["/images/scenery/IMG_20231122_170338.jpg","f9bdac31b7c80f3a351f22a41263b1b8"],["/images/scenery/mmexport1711886043602.jpg","73be72c3dbf6740db2787b402f0c267f"],["/images/view/render_tree.png","23508359c03af076f1dbb880969ca17a"],["/index.html","0c3b12dae4f3fd03453c339efe0d2ada"],["/js/app.js","e0a9c30a839ca452615b400415b2cb9d"],["/js/clock.js","77f6a46748eac95eba9c6cd07e58ed05"],["/js/postcover.js","b6bb85780d3456ab2166fa8767b86cb5"],["/js/search.js","a927db2eae2ad1a1283a02575f042ab3"],["/js/webapp.js","8abd735e38d384fca25e8069b00075b4"],["/lib/codeBlock/codeBlockFuction.js","b8e2d7a9bfe871556fde0c49e9533d7f"],["/lib/codeBlock/codeCopy.js","b264ad5a030ceb9482c0c03c546ab292"],["/lib/codeBlock/codeLang.js","4d666eb25ec684142f25715a0ff55235"],["/lib/codeBlock/codeShrink.js","f5f15be9102e1ea57c1162d8b7a8e3c3"],["/lib/codeBlock/matery.css","018d7162829f2f9336fdb47bc74da4c1"],["/lib/fancybox/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","849591a7513b58e88fb907f17b72213f"],["/lib/iconfont/iconfont.css","d6ed9995bfddce507ddc068e18e8fedd"],["/lib/iconfont/iconfont.eot","61b31bccfeb9f8415d6589b7fdd0590f"],["/lib/iconfont/iconfont.js","b2e41ae3b6912c33c4b5a00347978224"],["/lib/iconfont/iconfont.svg","0112602a8233064dfccacbb907c5eeb7"],["/lib/iconfont/iconfont.ttf","449680d6a781fba5c2a4ff4edd817185"],["/lib/iconfont/iconfont.woff","c20a393be74c168ec24c49a877c8fe55"],["/lib/mdui_043tiny/css/mdui.css","fb530c1f4dfb27f90c6b73f0e830148a"],["/lib/mdui_043tiny/js/mdui.js","b83d858e2a8dc8b0e92cefe8ae619939"],["/sw-register.js","b94ac908b63e56d43c4dec154a22debc"],["/tags/主题优化/index.html","98ed4fec2ec7793fa7d6d43756abf50d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
