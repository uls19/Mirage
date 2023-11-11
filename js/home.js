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

  const leftButtons = document.querySelectorAll('.page-box__btn_left');
  const rightButtons = document.querySelectorAll('.page-box__btn_right');
  const slide1El = document.querySelector('.single-slide1');
  const slide2El = document.querySelector('.single-slide2');
  const listOn = document.querySelector('.cir-box__li-left');
  const listOff = document.querySelector('.cir-box__li-right');

  Array.from(leftButtons).forEach(function (leftButton) {
    leftButton.addEventListener('click', function () {
      slide1El.classList.toggle("img_show");
      slide2El.classList.toggle("img_none");
      listOn.classList.toggle("on-color");
      listOff.classList.toggle("off-color");
    });
  });

  Array.from(rightButtons).forEach(function (rightButton) {
    rightButton.addEventListener('click', function () {
      slide1El.classList.toggle("img_show");
      slide2El.classList.toggle("img_none");
      listOn.classList.toggle("on-color");
      listOff.classList.toggle("off-color");
    });
  });


  let timer; // переменная для хранения идентификатора таймера
  function startTimer() {
    timer = setInterval(function () {
      // код для переключения слайдов или выполнения других действий по таймеру
      slide1El.classList.toggle("img_show");
      slide2El.classList.toggle("img_none");
      listOn.classList.toggle("on-color");
      listOff.classList.toggle("off-color");
    }, 6000); // интервал времени в миллисекундах (здесь установлено 2 секунды)
  }

  // Начать запускать таймер при загрузке страницы

  startTimer();

  // Остановить таймер при наведении на основной блок
  const mainBlock = document.querySelector('.page-box');
  mainBlock.addEventListener('mouseenter', function () {
    clearInterval(timer); // останавливаем таймер
  });

  // Возобновить таймер при уходе курсора с основного блока
  mainBlock.addEventListener('mouseleave', function () {
    startTimer(); // запускаем таймер снова
  });

  //запустить анимацию блоков при загрузке страницы
  const productBlocks = document.querySelectorAll('.products, .about');

  Array.from(productBlocks).forEach(function (span) {
    const blockLeft = span.querySelectorAll('.products__left');
    const blockRight = span.querySelectorAll('.products__right');
    const blockAbout = span.querySelectorAll('.about__header');

    setTimeout(function () {
      blockLeft.forEach(function (element) {
        // element.style.transition = 'left 1s, opacity 1s';
        element.style.transform = "translateX(0%)";
        element.style.opacity = '1';
      });
      blockRight.forEach(function (element) {
        // element.style.transition = 'left 1s, opacity 1s';
        element.style.transform = "translateX(0%)";
        element.style.opacity = '1';
      });

      blockAbout.forEach(function (element) {
        element.style.transition = 'top 1s, opacity 1s';
        element.style.top = '45px';
        element.style.opacity = '1';
      });
    }, 500);
  });

  /*анимация бегущие цифры*/
  const time = 2000;
  const step = 1;
  function outNum1(num) {
    let l = document.querySelector ('#out-1');
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval (() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
        l.innerHTML = n;

    },t);
  }
  outNum1(300);

  const time2 = 2500;
  const step2 = 10;
  function outNum2(num2) {
    let l2 = document.querySelector ('#out-2');
    n2 = 0;
    let t2 = Math.round(time2/(num2/step2));
    let interval = setInterval (() => {
      n2 = n2 + step2;
      if (n2 == num2) {
        clearInterval(interval);
      }
        l2.innerHTML = n2;

    },t2); 
  }
  outNum2(1200);


  const time3 = 1000;
  const step3 = 1;
  function outNum3(num3) {
    let l3 = document.querySelector ('#out-3');
    n3 = 0;
    let t3 = Math.round(time3/(num3/step3));
    let interval = setInterval (() => {
      n3 = n3 + step3;
      if (n3 == num3) {
        clearInterval(interval);
      }
        l3.innerHTML = n3;

    },t3);
  }
  outNum3(20);
  
  const footerYearEl = document.querySelector('.footer__year');
          let today = new Date();
          let year = today.getFullYear(); // 2023

          footerYearEl.textContent = year;

};















