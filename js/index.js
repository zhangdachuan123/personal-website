// const { default: axios } = require("axios");

/* =======2.作品展示轮播图(滑动翻页)(图片是横过来的)(用定位需要计算宽度以及索引)====== */
(function () {
    const oContainer = document.querySelector('.carousel');
    const oImgBox = oContainer.querySelector('.imgs');
    const oPrev = oContainer.querySelector('.prev');
    const oNext = oContainer.querySelector('.next');
    const aImgs = oContainer.querySelectorAll('.imgs-wrap');
    const moveTimes = aImgs.length - 3;//能翻页的次数=图片的长度-显示的个数
    let currTime = 0; //当前的次数
    oPrev.onclick = oNext.onclick = function () {
        // console.log(111);
        if (this == oPrev) {
            if (currTime > 0) {
                currTime--
                changeImage()
            }
        } else {
            if (currTime < moveTimes) {
                currTime++
                changeImage()
            }
        }
        // console.log(currTime);
    }
    function changeImage() {
        oImgBox.style.left = -((aImgs[0].offsetWidth + 30) * currTime) + 'px'
        changeBtn()
    }
    //切换颜色
    function changeBtn() {
        if (currTime <= 0) {
            oPrev.classList.add('invalid');
        } else {
            oPrev.classList.remove('invalid');
        }

        if (currTime >= moveTimes) {
            oNext.classList.add('invalid');
        } else {
            oNext.classList.remove('invalid')
        }
    }
    //自动换图片
    let timer
    function go() {
        timer = setInterval(() => {
            oNext.onclick();
            if (currTime == moveTimes) {
                currTime = -1
            }
        }, 1000);
    }
    go()
    //鼠标划出
    oContainer.onmouseover = function () {
        clearInterval(timer)
    }
    //鼠标划入
    oContainer.onmouseout = function () {
        go()
    }
})();
(function () {
    // //axios:包装了ajax语法，使我们用起来更加容易 promise
    const articleWrap = document.querySelector('#blog .article-wrap');
    const base_url = 'https://www.fastmock.site/mock/fa264db28456320bdda191fcb47186c5/my-website'
    let blogs
    axios.get(base_url + '/getBlogs').then(res => {
        blogs = res.data.data.list
        let blogStr = ''
        blogs.forEach(blog => {
            blogStr += `
            <article>
                    <a href="blogs.html"><img src="${blog.cover}" alt=""></a>
                    <div class="content-wrap">
                        <a href="blogs.html">
                            <h3>${blog.title}</h3>
                        </a>
                        <p>${blog.desc}</p>
                        <div class="flex justify-content-between align-items-center">
                            <span class="date"><i class="iconfont qm-clock"></i>${blog.date}</span>
                            <a class="more" href="blogs.html">查看更多<i class="iconfont qm-arrowright"></i></a>
                        </div>
                    </div>
            </article>
            `
        })  // .catch(function (err) { //失败了返回这里
        //     console.log(err);
        // })
        articleWrap.insertAdjacentHTML('beforeend', blogStr)
    })
})();