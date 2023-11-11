window.onload = function () {

  /*Nav icon*/
  const navBtn = document.querySelector('.nav-icon-btn');
  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('.po-pup__menu');
  
  navBtn.onclick = function () {
      navIcon.classList.toggle('nav-icon_active'); 
      nav.classList.toggle('po-pup__menu_mobile');
      document.body.classList.toggle('no-scroll');
  
  }


    /*Slider main-page*/
    const menuLi = document.querySelectorAll('.menu__link');
    
    Array.from(menuLi).forEach(function (span) {
      const menuOut = span.querySelectorAll('.out');
      const menuOver = span.querySelectorAll('.over');
  
  
      span.onmouseover = function (e) {
        menuOut.forEach(function (element) {
          element.style.top = '67px';
        });
        menuOver.forEach(function (element) {
          element.style.top = '0px';
        });
      }
  
  
  
      span.onmouseout = function (e) {
        menuOut.forEach(function (element) {
          element.style.top = '0px';
        });
        menuOver.forEach(function (element) {
          element.style.top = '-67px';
        });
      }
  
    });

   /*"No empty" при отправке пустого сообщения*/
let reg = /\S+/;
let inp = document.querySelector('.messages-box__text');
let span = document.querySelector('.messages-box__error');

document.querySelector('.messages-box__button').onclick = function(e){
  e.preventDefault();

  if (!validate(reg, inp.value)) {
   notValid(inp, span, 'No empty');
   showMessageError();

  }else{
    valid(inp, span, '');
    hideMessageError(); 
  }
};

function validate(regex, inp){
  return regex.test(inp);
}

function notValid(inp, el, mess){
  inp.classList.add('is-invalid');
  el.innerHTML = mess;
}

function valid(inp, el, mess){
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
  el.innerHTML = mess;
}

function showMessageError() {
  let messageError = document.querySelector('.messages-box__error');
  messageError.style.display = 'block';
}

function hideMessageError() {
  let messageError = document.querySelector('.messages-box__error');
  messageError.style.display = 'none';
}

const footerYearEl = document.querySelector('.footer__year');
          let today = new Date();
          let year = today.getFullYear(); // 2023
  
          footerYearEl.textContent = year;

}