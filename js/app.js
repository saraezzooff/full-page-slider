let   imgbox      = document.querySelector('.imgbox'),
      slides      = imgbox.getElementsByTagName('img'),
      nextSlide   = document.querySelector('.next'),
      prevSlide   = document.querySelector('.prev'),
      content     = document.querySelector('.content'),
      contentText  =content.getElementsByTagName('div');
      i           = 0;

      nextSlide.addEventListener('click',()=>{
          slides[i].classList.remove('active');
          contentText[i].classList.remove('active');
          i = (i + 1) % slides.length;
          slides[i].classList.add('active');
          contentText[i].classList.add('active');
          console.log(i);

      });

      prevSlide.addEventListener('click',()=>{
        slides[i].classList.remove('active');
        contentText[i].classList.remove('active');
        i = (i - 1 +slides.length) % slides.length;
        slides[i].classList.add('active');
        contentText[i].classList.add('active');
        console.log(i);
    });

