
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
  });

