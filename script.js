//Nav******************
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  for (let link of navLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const intro = document.querySelector('.intro');
  const animatedBackground = document.querySelector('.animated-background');

  intro.addEventListener('mouseenter', function() {
    animatedBackground.style.animation = 'animatedBackground 1s infinite';
  });

  intro.addEventListener('mouseleave', function() {
    animatedBackground.style.animation = 'none';
  });
});

//Scroll*********************
window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

document.getElementById('scrollToTopButton').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//Name*********************
window.addEventListener('DOMContentLoaded', function() {
  var nameElement = document.querySelector('#name span');
  var text = 'I\'m Lohitha Repalle';
  var speed = 100; // Typing speed in milliseconds

  var i = 0;
  var typingInterval = setInterval(function() {
    nameElement.textContent += text[i];
    nameElement.style.backgroundPosition = -50 * (i + 1) + '% center'; // Adjust the value to control color transition
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
});

//Typing text***************************
const typingTextElement = document.getElementById('typing-text');
const text = typingTextElement.innerText;
typingTextElement.innerText = '';

let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = text.slice(0, charIndex);
  typingTextElement.innerText = currentText;

  if (!isDeleting) {
    if (charIndex === text.length) {
      // All text has been typed
      return;
    }
    charIndex++;
  } else {
    if (charIndex === 0) {
      // All text has been deleted
      isDeleting = false;
    }
    charIndex--;
  }

  // Delay between typing/deleting characters
  setTimeout(type, 20);
}

// Start typing when the page is loaded
document.addEventListener('DOMContentLoaded', type);

//Projects***********************

const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
  let isExpanded = false;

  btn.addEventListener('click', () => {
    const projectDetails = btn.parentNode.nextElementSibling;
    const projectImages = projectDetails.nextElementSibling;

    isExpanded = !isExpanded;

    if (isExpanded) {
      projectDetails.style.display = 'block';
      projectImages.style.display = 'block';
    } else {
      projectDetails.style.display = 'none';
      projectImages.style.display = 'none';
    }
  });
});



//Resume*****************
const resumeButton = document.getElementById("resume-button");
const resumeModal = document.getElementById("resume-modal");
const closeModal = document.getElementsByClassName("close")[0];

resumeButton.addEventListener("click", () => {
  resumeModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  resumeModal.style.display = "none";
});
/*Certifications*/
$(document).ready(function() {
  var cardWidth = $('.certification-card').outerWidth(true);

  function updateArrows() {
    var activeCardIndex = $('.certification-card.active').index();
    var cardCount = $('.certification-card').length;

    if (activeCardIndex === 0) {
      $('.prev-arrow').addClass('disabled');
    } else {
      $('.prev-arrow').removeClass('disabled');
    }

    if (activeCardIndex === cardCount - 1) {
      $('.next-arrow').addClass('disabled');
    } else {
      $('.next-arrow').removeClass('disabled');
    }
  }

  $('.certification-card').click(function() {
    $('.certification-card').removeClass('active');
    $(this).addClass('active');
    updateArrows();
  });

  $('.next-arrow').click(function() {
    var activeCardIndex = $('.certification-card.active').index();
    var cardCount = $('.certification-card').length;

    if (activeCardIndex < cardCount - 1) {
      var translateX = (activeCardIndex + 1) * -cardWidth;
      $('.carousel-cards').css('transform', 'translateX(' + translateX + 'px)');
      $('.certification-card').eq(activeCardIndex + 1).addClass('active');
      $('.certification-card').eq(activeCardIndex).removeClass('active');
      updateArrows();
    }
  });

  $('.prev-arrow').click(function() {
    var activeCardIndex = $('.certification-card.active').index();

    if (activeCardIndex > 0) {
      var translateX = (activeCardIndex - 1) * -cardWidth;
      $('.carousel-cards').css('transform', 'translateX(' + translateX + 'px)');
      $('.certification-card').eq(activeCardIndex - 1).addClass('active');
      $('.certification-card').eq(activeCardIndex).removeClass('active');
      updateArrows();
    }
  });

  updateArrows();
});

/*Certifications*/


