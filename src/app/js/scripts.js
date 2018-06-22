/*
Slider with fade - Code by Zsolt Király
v1.0.8 - 2018-04-05
*/

var sliderWithFade = function() {

    function slideComponente(sF, sE) {

        var i = 0,
            len = sE.length;
        if (len > 0) {
            for (; i < len; i++) {
                var slide = sE[i];
                slide.setAttribute('data-id', i + 1);
            }
        }

        var dotsLi = sF.querySelectorAll('nav.dots ul li');

        var i = 0,
            len = dotsLi.length;
        if (len > 0) {
            for (; i < len; i++) {
                var li = dotsLi[i];
                li.setAttribute('data-id', i + 1);
            }
        }

        dotsLi[0].classList.add('active');
        sE[0].classList.add('z-index-4');
        sE[0].classList.add('active');
        sE[sE.length - 1].classList.add('z-index-3');
    }

    function dotsDOM(sF, sE) {

        var dotsContainer = document.createElement('NAV');
        dotsContainer.setAttribute('class', 'dots');
        sF.appendChild(dotsContainer);
        dotsContainer.innerHTML = '<ul></ul>';

        var dotsUl = sF.querySelector('nav.dots ul');

        var stop = 0;

        dotsUl.innerHTML = '';
        while (stop < sE.length) {

            dotsUl.innerHTML += '<li></li>';
            stop++;
        }
    }

    function disabled(op, c) {

        op.classList.add('disabled-click');

        setTimeout(function() {
            op.classList.remove('disabled-click');
        }, c.transition);

    }

    function transition(el2, el3, c) {
        el2.style.transition = '';
        el3.style.transition = 'opacity ' + c.transition + 'ms ease';
    }

    function zIndex(el2, el3) {

        //Multiple class (classList.add('z-index-4', 'active') not working).
        el2.classList.remove('z-index-4');
        el2.classList.remove('active');
        el3.classList.add('z-index-4');
        el3.classList.add('active');
    }

    function navigationDOM(sF) {
        var navigationLeft = document.createElement('NAV');
        navigationLeft.setAttribute('class', 'navigation');
        sF.appendChild(navigationLeft);

        navigationLeft.innerHTML = '<i class="navigation-left"></i>';

        var navigationRight = document.createElement('NAV');
        navigationRight.setAttribute('class', 'navigation');
        sF.appendChild(navigationRight);

        navigationRight.innerHTML = '<i class="navigation-right"></i>';
    }

    function navigation(sF, sE, c) {

        function nextSlide(sE, c) {

            var zIndex2Slide = sF.querySelector('ul.slided-container li.z-index-3');
            var nextSlide = zIndex2Slide.nextElementSibling;

            var slideFirst = sE[0],
                slideLast = sE[sE.length - 1];

            if(sE.length > 2) {
                if (nextSlide != null || nextSlide != undefined) {

                    var i = 0,
                        len = sE.length;
                    if (len > 0) {
                        for (; i < len; i++) {
                            var slide = sE[i];

                            if (nextSlide.getAttribute('data-id') == slide.getAttribute('data-id')) {

                                slide.classList.add('z-index-3');

                                var zIndex2Slide = sF.querySelector('ul.slided-container li.z-index-3');

                                if (zIndex2Slide) {
                                    var zIndex3Slide = zIndex2Slide.nextElementSibling;
                                }

                                if (zIndex3Slide) {
                                    transition(zIndex2Slide, zIndex3Slide, c);
                                    zIndex(zIndex2Slide, zIndex3Slide);

                                } else {
                                    transition(zIndex2Slide, slideFirst, c);
                                    zIndex(zIndex2Slide, slideFirst);
                                }

                            } else {
                                slide.classList.remove('z-index-3');
                            }
                        }
                    }

                } else {

                    var sliderSecond = slideFirst.nextElementSibling;

                    transition(zIndex2Slide, sliderSecond, c);
                    zIndex(slideFirst, sliderSecond);

                    slideFirst.classList.add('z-index-3');
                    slideLast.classList.remove('z-index-3');

                    slideFirst.style.transition = '';
                }
            } else {

                var zIndex3SlideActive = sF.querySelector('ul.slided-container li.z-index-4.active');

                zIndex3SlideActive.style.transition = 'opacity ' + c.transition + 'ms ease';
                zIndex3SlideActive.classList.remove('active');

                var zIndex2Slide = sF.querySelector('ul.slided-container li.z-index-3');

                zIndex2Slide.classList.add('active');

                setTimeout(function() {
                    zIndex3SlideActive.style.transition = '';

                    zIndex3SlideActive.classList.remove('z-index-4');
                    zIndex3SlideActive.classList.add('z-index-3');

                    zIndex2Slide.classList.remove('z-index-3');
                    zIndex2Slide.classList.add('z-index-4');
                    zIndex2Slide.style.transition = 'opacity ' + c.transition + 'ms ease';

                }, c.transition);
            }

            dotsActiveRight(sF);
        }

        function prevSlide(sE, c) {

            var zIndex3Slide = sF.querySelector('ul.slided-container li.z-index-4');
            var prevSlide = zIndex3Slide.previousElementSibling;

            var slideFirst = sE[0],
                slideLast = sE[sE.length - 1];

            if (prevSlide != null || prevSlide != undefined) {

                var i = 0,
                    len = sE.length;
                if (len > 0) {
                    for (; i < len; i++) {
                        var slide = sE[i];

                        if (prevSlide.getAttribute('data-id') == slide.getAttribute('data-id')) {

                            var zIndex3SlideActive = sF.querySelector('ul.slided-container li.z-index-4.active');

                            if (zIndex3SlideActive) {
                                zIndex3SlideActive.classList.remove('active');

                                setTimeout(function() {
                                    zIndex3SlideActive.style.transition = '';
                                    zIndex3SlideActive.classList.remove('z-index-4');

                                    if (zIndex3SlideActive.previousElementSibling) {
                                        var zIndex2Slide = zIndex3SlideActive.previousElementSibling;

                                        zIndex2Slide.classList.remove('z-index-3');

                                        zIndex2Slide.classList.add('z-index-4');
                                        zIndex2Slide.classList.add('active');
                                        zIndex2Slide.style.transition = 'opacity ' + c.transition + 'ms ease';

                                        if (zIndex2Slide.previousElementSibling) {
                                            zIndex2Slide.previousElementSibling.classList.add('z-index-3');
                                        } else {
                                            slideLast.classList.add('z-index-3');
                                        }
                                    }

                                }, c.transition);
                            }
                        }
                    }
                }

            } else {

                slideFirst.classList.remove('z-index-4');
                slideFirst.classList.remove('active');
                slideFirst.style.transition = '';
                slideFirst.classList.add('z-index-3');

                slideLast.classList.remove('z-index-3');

                setTimeout(function() {
                    slideLast.style.transition = 'opacity ' + c.transition + 'ms ease';
                    slideLast.classList.add('z-index-4');
                    slideLast.classList.add('active');
                }, 50);

                setTimeout(function() {
                    slideFirst.classList.remove('z-index-3');
                    sE[sE.length - 2].classList.add('z-index-3');

                }, c.transition);
            }
            dotsActiveLeft(sF);
        }

        function dotsActiveRight(sF) {
            var activeSlide = sF.querySelector('ul.slided-container li.active');
            var activeSlideId = activeSlide.getAttribute('data-id');

            var dotsLi = sF.querySelectorAll('nav.dots ul li');

            var i = 0,
                len = dotsLi.length;
            if (len > 0) {
                for (; i < len; i++) {
                    var dots = dotsLi[i];

                    var dotsId = dots.getAttribute('data-id');

                    if (dotsId == activeSlideId) {
                        dots.classList.add('active');

                    } else {
                        dots.classList.remove('active');
                    }
                }
            }
        }

        function dotsActiveLeft(sF) {
            var activeSlide = sF.querySelector('ul.slided-container li.z-index-4');

            var dotsLi = sF.querySelectorAll('nav.dots ul li');

            if (activeSlide) {
                var activeSlideId = activeSlide.previousElementSibling.getAttribute('data-id');

                var i = 0,
                    len = dotsLi.length;
                if (len > 0) {
                    for (; i < len; i++) {
                        var dots = dotsLi[i];

                        var dotsId = dots.getAttribute('data-id');

                        if (dotsId == activeSlideId) {
                            dots.classList.add('active');

                        } else {
                            dots.classList.remove('active');
                        }
                    }
                }
            } else {
                dotsLi[0].classList.remove('active');
                dotsLi[dotsLi.length - 1].classList.add('active');
            }
        }

        var left = sF.querySelector('i.navigation-left');
        var right = sF.querySelector('i.navigation-right');

        if (c.autoplay == true) {
            var autoplay = setInterval(function() {

                disabled(sF, c);
                nextSlide(sE, c);

            }, c.autoplayTime);
        }

        function startStop(sF, sE, c) {
            if (c.autoplay == true) {

                clearInterval(autoplay);

                autoplay = setInterval(function() {
                    disabled(sF, c);
                    nextSlide(sE, c);
                }, c.autoplayTime);
            }
        }

        left.addEventListener('click', function() {

            disabled(sF, c);
            prevSlide(sE, c);

            startStop(sF, sE, c);

        }, false);

        right.addEventListener('click', function() {

            disabled(sF, c);
            nextSlide(sE, c);

            dotsActiveRight(sF);

            startStop(sF, sE, c);

        }, false);

        window.addEventListener('resize', function() {
            startStop(sF, sE, c);
        }, false);

        var dotsLi = sF.querySelectorAll('nav.dots ul li');

        var firstId = sE[0].getAttribute('data-id');
        var lastId = sE[sE.length - 1].getAttribute('data-id');

        function firstLast(last, sL, sE, aE, c, objId, firstId, lastId) {

            sL.classList.remove('z-index-3');
            last.classList.add('z-index-3');

            aE.style.transition = 'opacity ' + c.transition + 'ms ease';

            setTimeout(function() {
                aE.classList.remove('active');
            }, 50);

            setTimeout(function() {

                aE.style.transition = '';
                aE.classList.remove('z-index-4');

                last.classList.remove('z-index-3');
                last.style.transition = 'opacity ' + c.transition + 'ms ease';
                last.classList.add('z-index-4');
                last.classList.add('active');

                if(objId == firstId) {
                    sE[sE.length - 1].classList.add('z-index-3');

                } else if(objId == lastId) {
                    sE[sE.length - 2].classList.add('z-index-3');
                }

            }, c.transition);
        };
        

        var i = 0,
            len = dotsLi.length;
        if (len > 0) {
            for (; i < len; i++) {
                var dots = dotsLi[i];

                dots.addEventListener('click', function(event) {

                    var obj = this,
                        objId = obj.getAttribute('data-id');

                    var d = 0;
                    for (; d < len; d++) {
                        var dotsList = dotsLi[d];

                        if (obj == dotsList) {
                            dotsList.classList.add('active');

                        } else {
                            dotsList.classList.remove('active');
                        }
                    }

                    var e = 0,
                        lenElement = sE.length;

                    for (; e < lenElement; e++) {
                        var slideList = sE[e];

                        var activeElment = sF.querySelector('ul.slided-container li.z-index-4'),
                            activeElmentId = activeElment.getAttribute('data-id');

                        if(parseFloat(objId) != parseFloat(activeElmentId)) {

                            startStop(sF, sE, c);

                            if(objId != firstId && objId != lastId) {
                                var slideListId = slideList.getAttribute('data-id');

                                if(objId == slideListId) {

                                    if(slideList != activeElment) {

                                        disabled(sF, c);

                                        slideList.classList.add('z-index-3');

                                        activeElment.style.transition = 'opacity ' + c.transition + 'ms ease';
                                        
                                        setTimeout(function() {
                                            activeElment.classList.remove('active');
                                        }, 50);

                                        setTimeout(function() {
                                            activeElment.style.transition = '';
                                            activeElment.classList.remove('z-index-4');

                                            var setActive = sF.querySelector('ul.slided-container li.z-index-3');

                                            setActive.classList.remove('z-index-3');
                                            setActive.style.transition = 'opacity ' + c.transition + 'ms ease';
                                            setActive.classList.add('z-index-4');
                                            setActive.classList.add('active');

                                            setActive.previousElementSibling.classList.add('z-index-3');
                                        }, c.transition);
                                    }

                                } else {
                                    slideList.classList.remove('z-index-3');
                                }

                            } else {

                                if(objId == firstId) {
                                    disabled(sF, c);
                                    firstLast(sE[0], slideList, sE, activeElment, c, objId, firstId, lastId);
                                }

                                if(objId == lastId) {
                                    disabled(sF, c);
                                    firstLast(sE[sE.length - 1], slideList, sE, activeElment, c, objId, firstId, lastId);
                                }
                            }
                        } else {
                            event.preventDefault();
                        }
                    } 
                }, false);
            }
        }
    }

    function one(sF) {
        sF.querySelector('ul.slided-container li').classList.add('z-index-3');
    }

    function loading(container) {
        setTimeout(function() {
            container.classList.remove('show');

            setTimeout(function() {
                container.classList.remove('loading');
            }, 500);

        }, 500);
    }

    function app(config) {

        var sliderWithFade = document.querySelector('#' + config.contentBox + '');

        if(sliderWithFade) {
            var sliderFade = sliderWithFade.querySelector('.slider-fade');

            loading(sliderFade);

            if(sliderFade) {
                var slideElement = sliderFade.querySelectorAll('ul.slided-container li');

                if(slideElement.length > 1) {
                    dotsDOM(sliderFade, slideElement);
                    slideComponente(sliderFade, slideElement);
                    navigationDOM(sliderFade);
                    navigation(sliderFade, slideElement, config);

                } else {
                    one(sliderFade);
                }
            }
        }
    }

    return {
        app: app
    }

}();