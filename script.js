'use strict';
const track=document.getElementById('marqueeTrack');
const set=track.querySelector('.tool-set');
const cloned=set.cloneNode(true);cloned.setAttribute('aria-hidden','true');track.appendChild(cloned);
const nav=document.querySelectorAll('.nav-link');
const sidebar=document.getElementById('sidebar');
const menu=document.getElementById('menuToggle');
function closeMenu(){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.innerHTML='<i class="ph ph-list"></i>'}
menu.addEventListener('click',()=>{const expanded=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');menu.innerHTML=expanded?'<i class="ph ph-x"></i>':'<i class="ph ph-list"></i>'});
nav.forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const sections=[...document.querySelectorAll('#home,#projects,#services,#about,#contact')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.forEach(link=>{const active=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')})}})},{rootMargin:'-20% 0px -65% 0px'});sections.forEach(section=>observer.observe(section));
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{const target=button.dataset.open==='projects'?'projects':'about';document.getElementById(target).scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
const year=new Date().getFullYear();document.getElementById('year').textContent=year;document.getElementById('footerYear').textContent=year;
let toastTimer;const toast=document.getElementById('toast');function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
document.getElementById('copyIntro').addEventListener('click',async()=>{const text='Hi! I am Kristine Joy Torres, an Information Technology student at the Polytechnic University of the Philippines. I have completed TESDA Java Programming NC III training (certification pending), and I am interested in Java, MySQL, Python, and web development.';try{await navigator.clipboard.writeText(text);notify('Introduction copied to clipboard!')}catch{notify('Clipboard unavailable. Please use a secure connection or localhost.')}});

const galleryData={load:{title:'Load Registration App',count:6},recording:{title:'Music Recording Management System',count:13},cinebook:{title:'CineBook — Movie Ticketing System',count:8},educore:{title:'EduCore University — Campus Network Infrastructure',count:9}};
const gallery=document.getElementById('projectGallery');const galleryPic=document.getElementById('galleryImage');const galleryCount=document.getElementById('galleryCount');const thumbs=document.getElementById('galleryThumbs');let currentGallery='load',currentSlide=0;
function showSlide(i){const info=galleryData[currentGallery];currentSlide=(i+info.count)%info.count;const path=`images/${currentGallery}-${String(currentSlide+1).padStart(2,'0')}.png`;galleryPic.src=path;galleryPic.alt=`${info.title} screenshot ${currentSlide+1} of ${info.count}`;galleryCount.textContent=`Screenshot ${currentSlide+1} of ${info.count}`;thumbs.querySelectorAll('button').forEach((b,n)=>b.setAttribute('aria-current',String(n===currentSlide)));}
document.querySelectorAll('.gallery-launch').forEach(b=>b.addEventListener('click',()=>{currentGallery=b.dataset.gallery;const info=galleryData[currentGallery];document.getElementById('galleryTitle').textContent=info.title;thumbs.replaceChildren();for(let i=0;i<info.count;i++){const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`View screenshot ${i+1}`);const im=document.createElement('img');im.src=`images/${currentGallery}-${String(i+1).padStart(2,'0')}.png`;im.alt='';im.loading='lazy';button.append(im);button.addEventListener('click',()=>showSlide(i));thumbs.append(button)}showSlide(0);gallery.showModal()}));
document.getElementById('galleryClose').addEventListener('click',()=>gallery.close());document.getElementById('galleryPrev').addEventListener('click',()=>showSlide(currentSlide-1));document.getElementById('galleryNext').addEventListener('click',()=>showSlide(currentSlide+1));gallery.addEventListener('click',e=>{if(e.target===gallery)gallery.close()});gallery.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showSlide(currentSlide-1)}if(e.key==='ArrowRight'){e.preventDefault();showSlide(currentSlide+1)}});

// Placeholder contact links intentionally do nothing until updated with real details.
document.querySelectorAll('[data-placeholder-contact="true"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const label = link.querySelector('.contact-item-text strong')?.textContent || 'contact';
    const toast = document.getElementById('toast');
    if (toast) { toast.textContent = `Add your real ${label} details in index.html first.`; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
  });
});


// Appearance switcher: respects the user's OS preference on first visit.
const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('kristine-theme');
const defaultDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(mode){document.documentElement.dataset.theme=mode;themeToggle.setAttribute('aria-pressed',String(mode==='dark'));themeToggle.setAttribute('aria-label',mode==='dark'?'Switch to light mode':'Switch to dark mode');themeToggle.innerHTML=mode==='dark'?'<i class="ph ph-sun" aria-hidden="true"></i><span>Light mode</span>':'<i class="ph ph-moon-stars" aria-hidden="true"></i><span>Dark mode</span>';document.querySelector('meta[name="theme-color"]')?.setAttribute('content',mode==='dark'?'#14252a':'#fce4d8')}
setTheme(savedTheme || (defaultDark?'dark':'light'));
themeToggle.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';localStorage.setItem('kristine-theme',next);setTheme(next)});


// Pause decorative motion when reduced motion is requested or the page is hidden.
const cloudVideo = document.getElementById('cloudBackgroundVideo');
if (cloudVideo) {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncCloudPlayback = () => {
    if (motionPreference.matches || document.hidden) cloudVideo.pause();
    else cloudVideo.play().catch(() => { /* Browser may block playback; static fallback remains. */ });
  };
  motionPreference.addEventListener('change', syncCloudPlayback);
  document.addEventListener('visibilitychange', syncCloudPlayback);
  syncCloudPlayback();
}


// Network Administration lab navigation (native <details> remains usable without JavaScript).
document.querySelectorAll('[data-lab-open]').forEach(tile => {
  tile.addEventListener('click', event => {
    const target = document.getElementById(tile.dataset.labOpen);
    if (!target) return;
    event.preventDefault();
    document.querySelectorAll('.network-lab-detail').forEach(panel => { panel.open = panel === target; });
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + target.id);
  });
});
