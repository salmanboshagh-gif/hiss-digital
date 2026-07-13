// Smooth intersection animations (vanilla)
(function(){
  if (typeof window === 'undefined') return;
  if (typeof IntersectionObserver === 'undefined') return;
  const animMap = { fadeUp: 'animate-fade-up', fadeInScale: 'animate-fade-in-scale', slideRight: 'animate-slide-right', slideLeft: 'animate-slide-left' };
  document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el = entry.target;
          const anim = el.getAttribute('data-anim');
          const delay = el.getAttribute('data-delay');
          if(delay) el.style.animationDelay = delay + 'ms';
          if(anim && animMap[anim]){
            el.classList.remove('in-view-hidden');
            el.classList.add(animMap[anim]);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-anim]').forEach(el=>observer.observe(el));
  });
})();
