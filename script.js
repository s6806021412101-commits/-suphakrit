// Header shadow + active nav link based on pathname
(function(){
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');

  // mark active by pathname
  const path = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
    }
  });

  // header shadow on scroll
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // contact form placeholder handler (no server) — show simple success message
  window.handleSubmit = function(e){
    e.preventDefault();
    alert('Thanks! Your message was not actually sent (no backend). To enable sending, integrate an email service or form backend.');
    e.target.reset();
  };
})();
