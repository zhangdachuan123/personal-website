//百度地图配置
var map = new BMap.Map("container");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(true);


//邮箱提示
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
const emailInput = document.querySelector('#email-input');
const emailSug = document.querySelector("#email-sug-wrapper");
let lis
let currentIndex = 0
let sugLength = postfixList.length
emailInput.focus();
emailInput.addEventListener('input', function () {
    //input事件:在用户输入时触发,在input或textarea元素的值发生改变时触发,
    const value = getUser()
    const listSug = tishi(value)
    charu(listSug)
    xianshi(value)
});

//2把li对应的提示内容，放在输入框中，同时隐藏提示框,删除时li有伴随
emailSug.addEventListener('click', function (e) {
    const target = e.target
    if (target.tagName = 'LI') {
        comfirSug(target)
    }
})
function comfirSug(ele) {
    emailInput.value = ele.innerHTML
    closeSug()
    currentIndex = 0
    emailInput.focus();

}
//键盘，上，下，回车，谁处于激活状态(最多)
emailInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 38) {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : sugLength - 1
        changeActive()
    } else if (e.keyCode === 40) {
        currentIndex = currentIndex < sugLength - 1 ? currentIndex + 1 : 0
        changeActive()
    } else if (e.keyCode === 13) {
        comfirSug(lis[currentIndex])
    } else if (e.keyCode === 27) {
        emailInput.select()
    }
})
function changeActive() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
    }
    lis[currentIndex].className = 'active'
}

//1获取用户输入
function getUser() {
    return emailInput.value.trim();
};

//1根据用户输入的内容获取提示数组
function tishi(value) {
    let suffix = ''
    //2当用户输入含有@符号时，我们选取用户输入的@前面的字符和后缀拼接
    if (value.includes('@')) {
        const i = value.indexOf('@')
        suffix = value.substring(i + 1)
        value = value.substring(0, i)
    }
    //3根据@之后的字符串，选取复合需求的后缀(筛选功能)//输入postfixList中的内容时有提示，输入不满足时全部显示

    const newPostfixList = postfixList.filter((item) => {
        return item.includes(suffix) ////筛选的每一个项目有没有包含输入的后缀
    })
    let list
    if (newPostfixList.length > 0) {
        list = newPostfixList
        sugLength = newPostfixList.length
    } else {
        list = postfixList
        sugLength = postfixList.length
    }
    return list.map((item) => {
        return value + '@' + item;
    });
};

//1根据提示数组生成li插入到ul中
function charu(list) {
    emailSug.innerHTML = ''
    list.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        if (index === 0) {
            li.className = 'active'
        }
        emailSug.appendChild(li);
    });
    lis = document.querySelectorAll('#email-sug-wrapper li')
};

//1根据输入框中内容的有无切换提示框的显示状态.
function xianshi(value) {
    if (value === '') {
        closeSug()
    } else {
        openSug()
    }
}
function closeSug() {
    emailSug.style.display = 'none'
}
function openSug() {
    emailSug.style.display = 'block'
}