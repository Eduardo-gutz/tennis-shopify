document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('toggle-navigation');

  menuButton.addEventListener('click', function () {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('main-navigation__nav--open');
  });
});
