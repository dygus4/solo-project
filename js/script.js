function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show')
  };
  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });