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
  
  //запустить анимацию блоков при загрузке страницы
  const blocksWindow = document.querySelectorAll('.about-window, .about-window__box');
  
  Array.from(blocksWindow).forEach(function (span) {
    const blockAbout = span.querySelectorAll('.about-window__box-top');
  
    setTimeout(function() {
      blockAbout.forEach(function (element) {
        element.style.top = "32px";
        element.style.opacity = 1;
  
        
      });
  
    }, 500);

  });
     
    const footerYearEl = document.querySelector('.footer__year');
            let today = new Date();
            let year = today.getFullYear(); // 2023
    
            footerYearEl.textContent = year;
  }