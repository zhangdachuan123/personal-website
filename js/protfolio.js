(function () {
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#fe6913", "#02b7ee", "#11305f", "#dcd203"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
})();
(function () {
    const data = [
        {
            cover: './portfolioimgs/1.png',
            title: 'APP 1',
            link: '#',
            height: 660
        },
        {
            cover: './portfolioimgs/2.png',
            title: 'APP 2',
            link: '#',
            height: 330
        },
        {
            cover: './portfolioimgs/3.png',
            title: 'APP 3',
            link: '#',
            height: 745
        },
        {
            cover: './portfolioimgs/4.png',
            title: 'APP 4',
            link: '#',
            height: 330
        },
        {
            cover: './portfolioimgs/5.png',
            title: 'CARD 5',
            link: '#',
            height: 745
        },
        {
            cover: './portfolioimgs/6.png',
            title: 'CARD 6',
            link: '#',
            height: 330
        },
        {
            cover: './portfolioimgs/7.png',
            title: 'CARD 7',
            link: '#',
            height: 660
        },
        {
            cover: './portfolioimgs/8.png',
            title: 'CARD 8',
            link: '#',
            height: 330
        },
        {
            cover: './portfolioimgs/9.png',
            title: 'WEB 9',
            link: '#',
            height: 745
        },
        {
            cover: './portfolioimgs/10.png',
            title: 'WEB 10',
            link: '#',
            height: 330
        },
        {
            cover: './portfolioimgs/11.png',
            title: 'WEB 11',
            link: '#',
            height: 745
        },
        {
            cover: './portfolioimgs/12.png',
            title: 'WEB 12',
            link: '#',
            height: 330
        },
    ]
    const cols = document.querySelectorAll('.waterfall-wrap ul');
    const inputSearch = document.querySelector('#user-input');
    const tags = document.querySelectorAll('.type-tags li');
    render(data)

    //输入筛选
    inputSearch.addEventListener('keyup', function (e) {
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90)) {
            filter(inputSearch.value)
        };
    });

    //点击type筛选
    for (let i = 0; i < tags.length; i++) {
        tags[i].onclick = function () {
            //添加激活样式
            for (let i = 0; i < tags.length; i++) {
                tags[i].classList.remove('active')
            }
            this.classList.add('active')
            //晒选数据
            if (this.innerHTML == 'ALL') {
                filter('')
            } else {
                filter(this.innerHTML)
            }
        }
    }

    //筛选满足条件的数据并返回新的数组，根据新数组按照瀑布流插入ul
    function filter(str) {
        const result = data.filter((item) => {
            const reg = new RegExp(str, 'i'); //模糊大小写
            if (item.title.search(reg) != -1) {
                return item;
            }
        })
        render(result);
    }

    //渲染作品数据
    function render(list) {
        for (let i = 0; i < cols.length; i++) {
            cols[i].height = 0
            cols[i].innerHTML = '';
        }
        list.forEach((item, i) => {
            const minCol = getMinCol()
            minCol.insertAdjacentHTML('beforeend', `
        <li><img src="${item.cover}"/>
        <p class="aa">${item.title}</p>
        <a class="aa" href="${item.link}"><i class="iconfont  qm-link1"></i></a>
        </li>
        `)
            minCol.height += item.height + 43
        })
    }

    /* 获取到最短列 */
    function getMinCol() {
        let minCol = cols[0]
        for (let i = 1; i < cols.length; i++) {
            if (cols[i].height < minCol.height) {
                minCol = cols[i]
            }
        }
        return minCol
    }
})();

