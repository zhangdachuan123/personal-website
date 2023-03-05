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
    //从后端获取数据(ajax)
    //axios:包装了ajax语法，使我们用起来更加容易 promise
    const articleWrap = document.querySelector('#blog .article-wrap');
    const base_url = 'https://www.fastmock.site/mock/fa264db28456320bdda191fcb47186c5/my-website';
    let blogs
    axios.get(base_url + '/getBlogList').then(res => {
        blogs = res.data.data.list
        let blogStr = ''
        blogs.forEach(blog => {
            blogStr += `
            <article>
                    <a href="blog-single.html?id=${blog.id}"><img src="${blog.cover}" alt=""></a>
                    <div class="content-wrap">
                        <a href="blog-single.html?id=${blog.id}">
                            <h3>${blog.title}</h3>
                        </a>
                        <p>${blog.desc}</p>
                        <div class="flex justify-content-between align-items-center">
                            <span class="date"><i class="iconfont qm-clock"></i>${blog.date}</span>
                            <a class="more" href="blog-single.html?id=${blog.id}">查看更多<i class="iconfont qm-arrowright"></i></a>
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