
  // const menuIcon = document.querySelector('.menu-icon');
  // const nav = document.querySelector('nav');

  // menuIcon.addEventListener('click', () => {
  //   menuIcon.classList.toggle('active');
  //   nav.classList.toggle('active');
  // });

  document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
    console.log("successfull")
});

