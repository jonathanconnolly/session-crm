/* ppuR v2 (2026-10-15): reviews come live from session-crm/public/ppu-reviews.json (ranked, kept fresh by the daily ppu-google-review-count task); the QUOTES above are only a fallback. Each page starts in its own slice of the ranking (home/about/book/jax = 0/1/2/3), starting each day on one of its top 3, so moving between pages shows different reviews. */
 var ROTATE_MS = 7000, ROOT_ID = '__ROOT__', MODE = '__MODE__', SLOTS = {'ppuR-home':0,'ppuR-about':1,'ppuR-book':2,'ppuR-jax':3};
 var POOL_URL = 'https://raw.githubusercontent.com/jonathanconnolly/session-crm/main/public/ppu-reviews.json';
 var root = document.getElementById(ROOT_ID);
 if (!root) return;
 var stage = root.querySelector('.ppuR__stage'), slides = [], idx = 0, timer = null, built = false;
 function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
 function size(t){return t.length<=120?'s':(t.length<=230?'m':'l');}
 function clean(t){return String(t||'').replace(/^[\s"“]+|[\s"”]+$/g,'');}
 function pick(r){var t=clean(MODE==='short'?(r.s||(String(r.q||'').length<=150?r.q:'')):r.q);return t?{q:t,n:r.n}:null;}
 function slot(){if(ROOT_ID in SLOTS)return SLOTS[ROOT_ID];var h=0;for(var i=0;i<ROOT_ID.length;i++)h=(h*31+ROOT_ID.charCodeAt(i))|0;return Math.abs(h)%4;}
 function arrange(list){
  var k=slot(), own=[], rest=[], day=Math.floor(Date.now()/864e5);
  list.forEach(function(x,i){(i%4===k?own:rest).push(x);});
  if(own.length){var r=day%Math.min(3,own.length);own=own.slice(r).concat(own.slice(0,r));} /* daily: start on one of this page's top 3 */
  return own.concat(rest);
 }
 function build(list){
  if (built) return; var items=[]; arrange(list).forEach(function(r){var p=pick(r);if(p)items.push(p);});
  if (!items.length) return; built = true;
  stage.innerHTML = items.map(function(x,i){
   return '<figure class="ppuR__slide'+(i===0?' on':'')+'"><blockquote class="ppuR__text '+size(x.q)+'">'+esc(x.q)+'</blockquote>'
    +'<figcaption class="ppuR__name">&mdash; '+esc(x.n)+'</figcaption></figure>';
  }).join('');
  slides = stage.children; idx = 0; fit(); restart();
 }
 function show(n){if(!slides.length)return;slides[idx].classList.remove('on');idx=(n+slides.length)%slides.length;slides[idx].classList.add('on');restart();}
 function restart(){clearTimeout(timer);timer=setTimeout(function(){show(idx+1);},ROTATE_MS);}
 [].forEach.call(root.querySelectorAll('.ppuR__nav'),function(b){b.addEventListener('click',function(){show(idx+(+b.getAttribute('data-dir')));});});
 function fit(){if(!root.hasAttribute('data-fit'))return;root.style.minHeight='';var host=root.closest&&root.closest('.fb-element');var h=host?host.getBoundingClientRect().height:(self!==top?document.documentElement.clientHeight:0);if(h>root.offsetHeight+2)root.style.minHeight=h+'px';}
 fit();window.addEventListener('load',fit);window.addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
 var fallback = setTimeout(function(){build(QUOTES);}, 2500);
 fetch(POOL_URL,{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){
  var list=d&&d.reviews; if(list&&list.length>=10){clearTimeout(fallback);build(list);} else {clearTimeout(fallback);build(QUOTES);}
 }).catch(function(){clearTimeout(fallback);build(QUOTES);});
 /* live Google review count for [data-ppu-review-count] (same as the site-wide sync; runs once per page) */
 if(!window.__ppuReviewSync){window.__ppuReviewSync=1;fetch('https://raw.githubusercontent.com/jonathanconnolly/session-crm/main/public/google-reviews.json',{cache:'no-store'}).then(function(r){return r.json()}).then(function(d){var n=d&&parseInt(d.count,10);if(!n)return;[].forEach.call(document.querySelectorAll('[data-ppu-review-count]'),function(el){el.textContent=String(n)});}).catch(function(){});}
})();
