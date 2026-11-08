// Side rail active section
const links=[...document.querySelectorAll('.rail nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}
}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>io.observe(s));

// Project filter
function bindFilter(sel,attr,itemSel,key){
  document.querySelectorAll(sel).forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll(sel).forEach(b=>b.setAttribute('aria-pressed','false'));
    btn.setAttribute('aria-pressed','true');
    const f=btn.dataset[key];
    document.querySelectorAll(itemSel).forEach(el=>{
      el.classList.toggle('hidden', f!=='all' && el.dataset[attr]!==f);
    });
  }));
}
bindFilter('[data-filter]','cat','.proj','filter');
document.querySelectorAll('[data-cfilter]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-cfilter]').forEach(b=>b.setAttribute('aria-pressed','false'));
  btn.setAttribute('aria-pressed','true');
  const f=btn.dataset.cfilter;
  document.querySelectorAll('.copy-grid .card').forEach(el=>{
    const cat=el.dataset.ccat;
    el.classList.toggle('hidden', f==='all' ? cat!=='all-only' : cat!==f);
  });
}));
document.querySelector('[data-cfilter="all"]').click();

// Project modal
const modal=document.getElementById('projModal');
function openModal(name){document.getElementById('modalTitle').textContent=name;modal.classList.add('open');modal.querySelector('.close').focus()}
function closeModal(){modal.classList.remove('open')}
document.querySelectorAll('.proj').forEach(p=>{
  p.addEventListener('click',()=>openModal(p.dataset.brand));
  p.addEventListener('keydown',e=>{if(e.key==='Enter')openModal(p.dataset.brand)});
});
modal.querySelector('.close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// Video placeholder
document.querySelectorAll('.reel').forEach(r=>r.addEventListener('click',()=>alert('Add a video link here: '+r.dataset.video)));
