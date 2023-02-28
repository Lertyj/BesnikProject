const menuIcon = document.querySelector('.topnav');

function toggleMenuIcon() {
  menuIcon.classList.toggle('responsive')
}

menuIcon.addEventListener('click', toggleMenuIcon);