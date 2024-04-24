const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    setActiveDot(index);
    slideTo(index);
  });
});

function setActiveDot(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function slideTo(index) {
  const slideWidth = carousel.clientWidth* 0.785;;
  carousel.style.transform = `translateX(-${slideWidth * index}px)`;
}


let timeout;

function handleHover() {
  clearTimeout(timeout);

}

function handleMouseLeave() {
  timeout = setTimeout(() => {
  
    
  }, 300); 
}

// Attach event listeners
const items = document.querySelectorAll('.why-choose li');
items.forEach(item => {
  item.addEventListener('mouseenter', handleHover);
  item.addEventListener('mouseleave', handleMouseLeave);
});

const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class to the clicked button
        button.classList.toggle('active');

        const panel = button.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
