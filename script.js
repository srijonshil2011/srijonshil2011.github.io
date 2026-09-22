document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('menuBtn'), nav=document.getElementById('mainNav');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
  document.querySelectorAll('#mainNav .has-sub>button').forEach(b=>b.addEventListener('click',e=>{
    e.preventDefault(); e.stopPropagation(); const li=b.parentElement; li.classList.toggle('open');
  }));
  document.addEventListener('click',e=>{
    document.querySelectorAll('#mainNav .has-sub.open').forEach(li=>{if(!li.contains(e.target))li.classList.remove('open')});
  });
});
