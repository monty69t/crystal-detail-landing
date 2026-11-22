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
