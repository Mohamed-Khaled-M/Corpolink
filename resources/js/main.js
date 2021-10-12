/* eslint-disable no-loop-func */
const guidingSectionBoxes = document.querySelectorAll('.guiding__box');
const countersContainer = document.querySelector('.statistics-section');
const counters = document.querySelectorAll('.counter');

// guiding boxes hover
for (const box of guidingSectionBoxes) {
  box.addEventListener('mouseenter', function() {
    box.parentElement.parentElement
      .querySelectorAll('.guiding__box')
      .forEach(b => {
        b.classList.remove('shadow');
      });
    box.classList.add('shadow');
  });
  box.addEventListener('mouseleave', function() {
    box.classList.remove('shadow');
    guidingSectionBoxes[1].classList.add('shadow');
  });
}

// counter up
function isVisible(element) {
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (elementPosition < screenHeight / 1.18) {
    return true;
  }
  return false;
}
counters.forEach(counter => {
  counter.textContent = '0';
  const updateCounter = () => {
    const { target } = counter.dataset;
    const currentNumber = +counter.textContent;
    const increment = target / 5000;

    if (isVisible(countersContainer)) {
      if (currentNumber < target) {
        counter.textContent = `${Math.ceil(currentNumber + increment)}`;
        setTimeout(updateCounter, 10);
      }
    } else {
      counter.textContent = 0;
    }
  };
  window.addEventListener('scroll', updateCounter);
});
