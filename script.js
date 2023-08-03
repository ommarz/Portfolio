function myFunction() {
  let burger = document.querySelector('.hamburger');
  let body = document.querySelector('body');
  let navLi = document.querySelectorAll('.nav-li');
  let close = document.querySelector('.close');
  let logo = document.querySelector('.logo');
  let toolbar = document.querySelector('.toolbar');
  let navToolbar = document.querySelector('.nav_toolbar');
  let navUl = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {

    navLi.forEach(link => link.classList.toggle('nav-li-navigation'));
    body.classList.toggle('body-navigation');
    toolbar.classList.toggle('toolbar-navigation');
    navUl.classList.add('nav-links-navigation')
    navUl.classList.remove('nav-links');
    burger.classList.add('hamburger-navigation');
    burger.classList.remove('hamburger');
    close.classList.add('close-navigation');
    close.classList.remove('close');
    logo.classList.add('logo-navigation');
    logo.classList.remove('logo');
    navToolbar.classList.add('nav_toolbar_navigation');
    navToolbar.classList.remove('nav_toolbar');
  });

  close.addEventListener('click', () => {
    navLi.forEach(link => link.classList.toggle('nav-li-navigation'));
    body.classList.toggle('body-navigation');
    toolbar.classList.toggle('toolbar-navigation');
    navUl.classList.remove('nav-links-navigation')
    navUl.classList.add('nav-links');
    burger.classList.remove('hamburger-navigation');
    burger.classList.add('hamburger');
    close.classList.remove('close-navigation');
    close.classList.add('close');
    logo.classList.remove('logo-navigation');
    logo.classList.add('logo');
    navToolbar.classList.remove('nav_toolbar_navigation');
    navToolbar.classList.add('nav_toolbar');
  });
}

myFunction();
