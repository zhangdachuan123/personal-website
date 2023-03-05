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
    const progress = document.querySelector('#progress');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 30) {
            clearInterval(timer);
        }
    }, 100)
})();
(function () {
    const progress = document.querySelector('#progress1');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 25) {
            clearInterval(timer);
        }
    }, 100)
})();
(function () {
    const progress = document.querySelector('#progress2');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 22) {
            clearInterval(timer);
        }
    }, 100)
})();
(function () {
    const progress = document.querySelector('#progress3');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 15) {
            clearInterval(timer);
        }
    }, 100)
})();
(function () {
    const progress = document.querySelector('#progress4');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 20) {
            clearInterval(timer);
        }
    }, 100)
})();
(function () {
    const progress = document.querySelector('#progress5');
    let timer
    let count = 0;
    timer = setInterval(() => {
        count++
        //数字
        // progress.innerHTML = count + '%';
        //width+
        progress.style.width = count + '%';
        if (count >= 28) {
            clearInterval(timer);
        }
    }, 100)
})();
// (function () {
//     const progress = document.querySelector('#progress1');
//     const btn = document.querySelector('#btn1');
//     let timer
//     let count = 0;
//     btn.addEventListener('click', function () {
//         timer = setInterval(() => {
//             count++
//             //数字
//             progress.innerHTML = count + '%';
//             //width+
//             progress.style.width = count + '%';
//             if (count >= 60) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     })
// })();
// (function () {
//     const progress = document.querySelector('#progress2');
//     const btn = document.querySelector('#btn2');
//     let timer
//     let count = 0;
//     btn.addEventListener('click', function () {
//         timer = setInterval(() => {
//             count++
//             //数字
//             progress.innerHTML = count + '%';
//             //width+
//             progress.style.width = count + '%';
//             if (count >= 75) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     })
// })();
// (function () {
//     const progress = document.querySelector('#progress3');
//     const btn = document.querySelector('#btn3');
//     let timer
//     let count = 0;
//     btn.addEventListener('click', function () {
//         timer = setInterval(() => {
//             count++
//             //数字
//             progress.innerHTML = count + '%';
//             //width+
//             progress.style.width = count + '%';
//             if (count >= 60) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     })
// })();
// (function () {
//     const progress = document.querySelector('#progress4');
//     const btn = document.querySelector('#btn4');
//     let timer
//     let count = 0;
//     btn.addEventListener('click', function () {
//         timer = setInterval(() => {
//             count++
//             //数字
//             progress.innerHTML = count + '%';
//             //width+
//             progress.style.width = count + '%';
//             if (count >= 65) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     })
// })();
// (function () {
//     const progress = document.querySelector('#progress5');
//     const btn = document.querySelector('#btn5');
//     let timer
//     let count = 0;
//     btn.addEventListener('click', function () {
//         timer = setInterval(() => {
//             count++
//             //数字
//             progress.innerHTML = count + '%';
//             //width+
//             progress.style.width = count + '%';
//             if (count >= 67) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     })
// })();
// (function () {
//     const skillPercent = document.querySelector('#skill-percent');
//     const progress = document.querySelector('#progress');
//     // const btn = document.querySelector('#btn');
//     let timer
//     let count = 0
//     skillPercent.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             console.log(e.target.innerHTML);
//             timer = setInterval(() => {
//                 count++
//                 progress.innerHTML = count + '%'
//                 progress.style.width = count + '%'
//                 if (count >= 100) {
//                     clearInterval(timer)

//                 }
//             }, 10)
//         }
//     })
// })();
