/* 
作用域
全局作用域
局部作用域(函数内部、块级作用域)
*/

/* =======1.页面初始化，计算rem======= */
//函数立即调用(形成独立空间，避免重复定义变量，一个功能一个空间)
(function () {
    //页面初始化，针对屏幕不是1920*1080的页面尺寸
    const bulidRem = function () {
        let designSize = 1920;//设计图尺寸
        let html = document.documentElement;
        let wW = html.clientWidth;//窗口尺寸
        let rem = wW * 100 / designSize;
        html.style.fontSize = rem + 'px';
    }
    bulidRem()
    //页面缩放时 font-size 的调整
    window.onresize = bulidRem;
    //应用这个公式
    /* 1920         100(设计稿的字体大小) ==1rem
   -------   =    --------
   你的宽       你的字体大小   
   */
})(); //要加分号

/* =======2.动态插入header+导航条高亮====== */
//通过判断地址栏与href是否匹配，来判断加不加active
(function () {
    const header = document.querySelector('#header');
    if (header) {
        const navData = [
            {
                title: "首页",
                url: "index.html",
            },
            {
                title: "作品展示",
                url: "protfolio.html",
            },

            {
                title: "博客",
                url: "blogs.html",
            },

            {
                title: "我的简历",
                url: "about.html",
            },

            {
                title: "联系我",
                url: "contact.html",
            },
        ];
        const inserNav = function () {
            let res = ''
            navData.forEach((nav) => {
                res += ` <li class="${getPageName() == nav.url ? 'active' : ''}"><a href="${nav.url}">${nav.title}</a></li>`
            }) //看是否匹配，然后给class加active
            return res
        }

        //直接写死li也行，但是后期添加麻烦，所以采用拼接字符串的形式来插
        header.insertAdjacentHTML('afterbegin', `
        <div class="container flex align-items-center justify-content-between" >
        <a href="./index.html"><i class="iconfont qm-alimama1"></i></a>
        <div>
            <nav id="navbar" class="navbar">
                <ul>${inserNav()}</ul>
            </nav>
        </div>
    `)
        function getPageName() {
            const pathArr = location.pathname.split("/")
            return pathArr[pathArr.length - 1] //在数组中取数组最后一个
        }
    }
})();

