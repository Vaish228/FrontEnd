(function () {
   const videoWrapper = document.querySelector(".feature__video");
  const video = videoWrapper.querySelector(".feature__player");
  const playBtn = videoWrapper.querySelector(".feature__play-btn");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoWrapper.classList.add("playing");
    } else {
      video.pause();
      videoWrapper.classList.remove("playing");
    }
  });

  // When video ends, reset
  video.addEventListener("ended", () => {
    videoWrapper.classList.remove("playing");
  });
})();

// Contact Form Modal Logic
(function () {
  const form = document.querySelector('.contact-form form');
  const modal = document.getElementById('contactModal');
  const closeBtn = modal.querySelector('.close');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('All fields are required.');
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email.');
      return;
    }

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // prevent background scroll
    form.reset();
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  // Close when clicking outside
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // Escape key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
})();





const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

/* Set current year in footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* Modal logic */
(function(){
  const modal = $('#modalSignup');
  const openBtn = $('#ctaOpenModal');
  const closeables = $$('.modal__close, .modal__backdrop, [data-dismiss="modal"]');

  function openModal() {
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('input[name=email]').focus();
  }
  function closeModal() {
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  closeables.forEach(el => el.addEventListener('click', closeModal));
  // Escape closes
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // modal form (demo)
  const modalForm = $('#modalForm');
  if(modalForm) modalForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    const email = modalForm.email.value.trim();
    if(!email){ alert('Please provide an email'); return; }
    alert('Thanks — check your inbox: ' + email);
    modalForm.reset(); closeModal();
  });
})();

/* Contact form demo */
(function(){
  const frm = $('#contactForm');
  if(!frm) return;
  frm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent — thank you!');
    frm.reset();
  });
})();

