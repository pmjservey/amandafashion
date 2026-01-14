/* OBSERVE ON SCROLL */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.3});
document.querySelectorAll('.observe').forEach(sec=>observer.observe(sec));

/* PORTFOLIO FILTER */
const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.item');
filterButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const val = btn.dataset.filter;
    filterButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    items.forEach(it=>{
      it.style.display = (val==='all' || it.classList.contains(val)) ? 'block' : 'none';
    });
  });
});

/* MODAL */
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('.modal__img');
const close = modal.querySelector('.modal__close');
items.forEach(item=>{
  item.addEventListener('click',()=>{
    modal.style.display='flex';
    modalImg.src = item.querySelector('img').src;
  });
});
close.addEventListener('click',()=>modal.style.display='none');
modal.addEventListener('click',e=>{if(e.target===modal) modal.style.display='none';});

/* CAROUSEL */
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__btn.next');
const prevBtn = document.querySelector('.carousel__btn.prev');
let idx = 0;
const go = ()=>track.style.transform=`translateX(-${idx*100}%)`;
nextBtn.addEventListener('click',()=>{ idx=(idx+1)%slides.length; go(); });
prevBtn.addEventListener('click',()=>{ idx=(idx-1+slides.length)%slides.length; go(); });

/* CONTACT VALIDATION */
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const {name,email,message} = e.target;
  if(!name.value.trim()||!email.value.trim()||!message.value.trim()) return alert('Fill all fields.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) return alert('Invalid email.');
  alert('Message sent. Thank you!');
  e.target.reset();
});

/* BACK TO TOP */
document.getElementById('backTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));