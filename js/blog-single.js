(function () {
    const details = document.querySelector('#details');
    const baseurl = 'https://www.fastmock.site/mock/fa264db28456320bdda191fcb47186c5/my-website'
    axios.get(baseurl + '/getblogdetail').then(res => {
        blogdetails = res.data.data.list
        console.log(blogdetails);
        let str = window.location.href;
        let a = str.split("?")
        let b = a[1].split("=")
        blogdetails.forEach(item => {
            if (b[1] == item.id) {
                details.insertAdjacentHTML('beforeend', `
              <div class="wenzi">
                        <p>${item.content}</p>
                    </div>
                    <div class="tupian">
                   <img src=" ${item.image}">
                    </div>
                    <div class="shuju">
                        <p>${item.content1}</p>
                    </div>
            `)
            }
        });
    })
})();
(function () {
    const comments = [
        // {
        //     picture: "./blog-single-img/imgs2.png",
        //     name: "Danny",
        //     time: "Thu Jan 12 2022",
        //     comment:
        //         " qwertyuioasdfghjkzxcvbnmghjkfghjvtybunimo,mivnuebnmocineuvbrnimoscinvurbnisdfghjkl;<br>scaaaaaaaaaaaaaaaaaaaaaadvrqbrj,regthrejyrnbetnhgvb",

        // },
        // {
        //     picture: "./blog-single-img/imgs2.png",
        //     name: "Jackson",
        //     time: "Thu Jan 11 2022",
        //     comment:
        //         " qwertyuioasdfghjkzxcvbnmghjkfghjvtybunimo,mivnuebnmocineuvbrnimoscinvurbnisdfghjkl;<br>scaaaaaaaaaaaaaaaaaaaaaadvrqbrj,regthrejyrnbetnhgvb",

        // },
        // {
        //     picture: "./blog-single-img/imgs2.png",
        //     name: "Jackson",
        //     time: "Thu Jan 11 2022",
        //     comment:
        //         " qwertyuioasdfghjkzxcvbnmghjkfghjvtybunimo,mivnuebnmocineuvbrnimoscinvurbnisdfghjkl;<br>scaaaaaaaaaaaaaaaaaaaaaadvrqbrj,regthrejyrnbetnhgvb",

        // },
    ];
    const comment = document.querySelector('#comments');
    const nameInput = document.querySelector('#name-input');
    const commentInput = document.querySelector('#comment-input');
    const btn = document.querySelector('#anniu');
    // renderComments();
    btn.onclick = function () {
        // 防攻击
        // /< (\/?\w+)>/g, 正则表达式：根据配规则去找东西，把找到的东西替换成"&lt;$1&gt;"
        let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
        let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
        //unshift:将新元素添加到数组的开头
        //push:末尾
        comments.unshift({
            name: nameStr,
            comment: commentStr,
            time: new Date(),
        })
        renderComments();
        setComments()

    }
    function setComments() {
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    const btn1 = document.querySelector('.btn1')
    btn1.addEventListener('click', function () {
        getComments()
    })

    function getComments() {
        const getComment = JSON.parse(localStorage.getItem('comments'))
        getComment.forEach((item) => {
            comment.insertAdjacentHTML('beforeend', `
         <hr />
        <div id="comments">
            <img src="./blog-single-img/imgs2.png" alt="">
             <div class="wrap">
                <div class="between flex">
                    <span class="span">${item.name}</span>
                    <span>${item.time}</span>
                </div>
                <p>${item.comment}</p>
             </div>
        </div>
             `)
        })
    }

    function renderComments() {
        //把评论列表里的内容先清空
        comment.innerHTML = '';
        //循环评论数组，把每一条都插进去
        comments.forEach((item) => {
            comment.insertAdjacentHTML('beforeend', `
         <hr />
        <div id="comments">
            <img src="./blog-single-img/imgs2.png" alt="">
             <div class="wrap">
                <div class="between flex">
                    <span class="span">${item.name}</span>
                    <span>${item.time}</span>
                </div>
                <p>${item.comment}</p>
             </div>
        </div>
             `)
        })
    }
})();

