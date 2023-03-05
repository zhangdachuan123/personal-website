//轮播图
(function () {
    const carousel = document.querySelector('.carousel')
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const imgsBox = document.querySelector('.imgs');
    const imgWrap = document.querySelectorAll('.imgs-wrap');
    //能轮播的次数
    const moveTimes = imgWrap.length - 3;
    //当前点击的次数
    let currTime = 0;
    prev.onclick = next.onclick = function () {
        if (this == prev) {
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
    }
    function changeImage() {
        imgsBox.style.left = -((imgWrap[0].offsetWidth + 30) * currTime) + 'px'
        changeBtn()
    }
    function changeBtn() {
        if (currTime >= moveTimes) {
            next.classList.add('invalid');
        } else {
            next.classList.remove('invalid');
        }
        if (currTime <= 0) {
            prev.classList.add('invalid');
        } else {
            prev.classList.remove('invalid');
        }
    }

    let timer
    function go() {
        timer = setInterval(() => {
            next.onclick();
            if (currTime == moveTimes) {
                currTime = -1
            }
        }, 1000)
    }
    go()
    carousel.onmouseover = function () {
        clearInterval(timer)
    }
    carousel.onmouseout = function () {
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