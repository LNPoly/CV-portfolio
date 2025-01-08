window.addEventListener('scroll', function() {
    var element = document.querySelector('.fixed-whatsapp-button');
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    if (elementTop + element.offsetHeight < windowHeight) {
      element.style.top = windowHeight - element.offsetHeight - 10 + 'px';
    } else {
      element.style.top = null;
    }
  });
  