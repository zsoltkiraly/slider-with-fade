var sliderWithFade=function(){function a(a,b){var c=0,d=b.length;if(d>0)for(;d>c;c++){var e=b[c];e.setAttribute("data-id",c+1)}var f=a.querySelectorAll("nav.dots ul li"),c=0,d=f.length;if(d>0)for(;d>c;c++){var g=f[c];g.setAttribute("data-id",c+1)}f[0].classList.add("active"),b[0].classList.add("z-index-4"),b[0].classList.add("active"),b[b.length-1].classList.add("z-index-3")}function b(a,b){var c=document.createElement("NAV");c.setAttribute("class","dots"),a.appendChild(c),c.innerHTML="<ul></ul>";var d=a.querySelector("nav.dots ul"),e=0;for(d.innerHTML="";e<b.length;)d.innerHTML+="<li></li>",e++}function c(a,b){a.classList.add("disabled-click"),setTimeout(function(){a.classList.remove("disabled-click")},b.transition)}function d(a,b,c){a.style.transition="",b.style.transition="opacity "+c.transition+"ms ease"}function e(a,b){a.classList.remove("z-index-4"),a.classList.remove("active"),b.classList.add("z-index-4"),b.classList.add("active")}function f(a){var b=document.createElement("NAV");b.setAttribute("class","navigation"),a.appendChild(b),b.innerHTML='<i class="navigation-left"></i>';var c=document.createElement("NAV");c.setAttribute("class","navigation"),a.appendChild(c),c.innerHTML='<i class="navigation-right"></i>'}function g(a,b,f){function g(b,c){var f=a.querySelector("ul.slided-container li.z-index-3"),g=f.nextElementSibling,h=b[0],j=b[b.length-1];if(b.length>2)if(null!=g||void 0!=g){var k=0,l=b.length;if(l>0)for(;l>k;k++){var m=b[k];if(g.getAttribute("data-id")==m.getAttribute("data-id")){m.classList.add("z-index-3");var f=a.querySelector("ul.slided-container li.z-index-3");if(f)var n=f.nextElementSibling;n?(d(f,n,c),e(f,n)):(d(f,h,c),e(f,h))}else m.classList.remove("z-index-3")}}else{var o=h.nextElementSibling;d(f,o,c),e(h,o),h.classList.add("z-index-3"),j.classList.remove("z-index-3"),h.style.transition=""}else{var p=a.querySelector("ul.slided-container li.z-index-4.active");p.style.transition="opacity "+c.transition+"ms ease",p.classList.remove("active");var f=a.querySelector("ul.slided-container li.z-index-3");f.classList.add("active"),setTimeout(function(){p.style.transition="",p.classList.remove("z-index-4"),p.classList.add("z-index-3"),f.classList.remove("z-index-3"),f.classList.add("z-index-4"),f.style.transition="opacity "+c.transition+"ms ease"},c.transition)}i(a)}function h(b,c){var d=a.querySelector("ul.slided-container li.z-index-4"),e=d.previousElementSibling,f=b[0],g=b[b.length-1];if(null!=e||void 0!=e){var h=0,i=b.length;if(i>0)for(;i>h;h++){var k=b[h];if(e.getAttribute("data-id")==k.getAttribute("data-id")){var l=a.querySelector("ul.slided-container li.z-index-4.active");l&&(l.classList.remove("active"),setTimeout(function(){if(l.style.transition="",l.classList.remove("z-index-4"),l.previousElementSibling){var a=l.previousElementSibling;a.classList.remove("z-index-3"),a.classList.add("z-index-4"),a.classList.add("active"),a.style.transition="opacity "+c.transition+"ms ease",a.previousElementSibling?a.previousElementSibling.classList.add("z-index-3"):g.classList.add("z-index-3")}},c.transition))}}}else f.classList.remove("z-index-4"),f.classList.remove("active"),f.style.transition="",f.classList.add("z-index-3"),g.classList.remove("z-index-3"),setTimeout(function(){g.style.transition="opacity "+c.transition+"ms ease",g.classList.add("z-index-4"),g.classList.add("active")},50),setTimeout(function(){f.classList.remove("z-index-3"),b[b.length-2].classList.add("z-index-3")},c.transition);j(a)}function i(a){var b=a.querySelector("ul.slided-container li.active"),c=b.getAttribute("data-id"),d=a.querySelectorAll("nav.dots ul li"),e=0,f=d.length;if(f>0)for(;f>e;e++){var g=d[e],h=g.getAttribute("data-id");h==c?g.classList.add("active"):g.classList.remove("active")}}function j(a){var b=a.querySelector("ul.slided-container li.z-index-4"),c=a.querySelectorAll("nav.dots ul li");if(b){var d=b.previousElementSibling.getAttribute("data-id"),e=0,f=c.length;if(f>0)for(;f>e;e++){var g=c[e],h=g.getAttribute("data-id");h==d?g.classList.add("active"):g.classList.remove("active")}}else c[0].classList.remove("active"),c[c.length-1].classList.add("active")}function k(a,b,d){1==d.autoplay&&(clearInterval(o),o=setInterval(function(){c(a,d),g(b,d)},d.autoplayTime))}function l(a,b,c,d,e,f,g,h){b.classList.remove("z-index-3"),a.classList.add("z-index-3"),d.style.transition="opacity "+e.transition+"ms ease",setTimeout(function(){d.classList.remove("active")},50),setTimeout(function(){d.style.transition="",d.classList.remove("z-index-4"),a.classList.remove("z-index-3"),a.style.transition="opacity "+e.transition+"ms ease",a.classList.add("z-index-4"),a.classList.add("active"),f==g?c[c.length-1].classList.add("z-index-3"):f==h&&c[c.length-2].classList.add("z-index-3")},e.transition)}var m=a.querySelector("i.navigation-left"),n=a.querySelector("i.navigation-right");if(1==f.autoplay)var o=setInterval(function(){c(a,f),g(b,f)},f.autoplayTime);m.addEventListener("click",function(){c(a,f),h(b,f),k(a,b,f)},!1),n.addEventListener("click",function(){c(a,f),g(b,f),i(a),k(a,b,f)},!1),window.addEventListener("resize",function(){k(a,b,f)},!1);var p=a.querySelectorAll("nav.dots ul li"),q=b[0].getAttribute("data-id"),r=b[b.length-1].getAttribute("data-id"),s=0,t=p.length;if(t>0)for(;t>s;s++){var u=p[s];u.addEventListener("click",function(d){for(var e=this,g=e.getAttribute("data-id"),h=0;t>h;h++){var i=p[h];e==i?i.classList.add("active"):i.classList.remove("active")}for(var j=0,m=b.length;m>j;j++){var n=b[j],o=a.querySelector("ul.slided-container li.z-index-4"),s=o.getAttribute("data-id");if(parseFloat(g)!=parseFloat(s))if(k(a,b,f),g!=q&&g!=r){var u=n.getAttribute("data-id");g==u?n!=o&&(c(a,f),n.classList.add("z-index-3"),o.style.transition="opacity "+f.transition+"ms ease",setTimeout(function(){o.classList.remove("active")},50),setTimeout(function(){o.style.transition="",o.classList.remove("z-index-4");var b=a.querySelector("ul.slided-container li.z-index-3");b.classList.remove("z-index-3"),b.style.transition="opacity "+f.transition+"ms ease",b.classList.add("z-index-4"),b.classList.add("active"),b.previousElementSibling.classList.add("z-index-3")},f.transition)):n.classList.remove("z-index-3")}else g==q&&(c(a,f),l(b[0],n,b,o,f,g,q,r)),g==r&&(c(a,f),l(b[b.length-1],n,b,o,f,g,q,r));else d.preventDefault()}},!1)}}function h(a){a.querySelector("ul.slided-container li").classList.add("z-index-3")}function i(a){setTimeout(function(){a.classList.remove("show"),setTimeout(function(){a.classList.remove("loading")},500)},500)}function j(c){var d=document.querySelector("#"+c.contentBox);if(d){var e=d.querySelector(".slider-fade");if(i(e),e){var j=e.querySelectorAll("ul.slided-container li");j.length>1?(b(e,j),a(e,j),f(e),g(e,j,c)):h(e)}}}return{app:j}}();