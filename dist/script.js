const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
});
nav.addEventListener('click',event=>{
  if(event.target.closest('a')){
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Открыть меню');
  }
});

// Reveal content as it enters the viewport. Keep everything visible when
// reduced motion is requested or IntersectionObserver is unavailable.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && 'IntersectionObserver' in window){
  const revealTargets=document.querySelectorAll(
    '.section-heading, .section-aside, .service-card, .protection-copy, .protection-visual, '+
    '.price-row, .price-note, .gallery-heading, .gallery-grid figure, '+
    '.steps-grid > div, .faq-inner > div, .contact-inner > div'
  );
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -35px 0px'});

  revealTargets.forEach(element=>{
    element.classList.add('reveal');
    const siblings=element.parentElement.children;
    const siblingIndex=Array.prototype.indexOf.call(siblings,element);
    if(siblings.length>1) element.style.setProperty('--reveal-delay',`${Math.min(siblingIndex%4,3)*75}ms`);
    observer.observe(element);
  });
  document.documentElement.classList.add('js-motion');
}
