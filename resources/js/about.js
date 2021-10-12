const progressSection = document.querySelector('.progress-info');
const progressBars = document.querySelectorAll('.progress__bar');
// const progressPercent = document.querySelectorAll('.progress-heading');
function isVisible(element) {
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (elementPosition < screenHeight / 1.18) {
    return true;
  }
  return false;
}

for (const progressBar of progressBars) {
  const progressData = progressBar.dataset.progress;
  window.addEventListener('scroll', function() {
    if (isVisible(progressSection)) {
      progressBar.style.width = `${progressData}%`;
    } else {
      progressBar.style.width = `0%`;
    }
  });
  progressBar.parentElement.previousElementSibling.children[0].textContent = `${progressData}%`;
}
