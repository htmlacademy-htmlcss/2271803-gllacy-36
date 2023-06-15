// SLIDER

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.slider-button-previous');
const buttonNext = document.querySelector('.slider-button-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.current-slide').classList.remove('current-slide');
  document.querySelector('.slider-pagination-button-current').classList.remove('slider-pagination-button-current');
};

const changeColor = (theme) => {
  document.body.style.backgroundColor = theme;
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('current-slide');
    tab.classList.add('slider-pagination-button-current');
    changeColor(slides[index].dataset.theme);
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('current-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
  changeColor(slides[counter].dataset.theme);
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('current-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
  changeColor(slides[counter].dataset.theme);
});

// SEARCH-INPUT-CANCEL

const searchInput = document.querySelector('.search-input');
const searchCancelButton = document.querySelector('.search-cancel-button');
searchCancelButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});

// MODAL

const feedback = document.querySelector('.modal-link');
const feedbackModal = document.querySelector('.modal-container');
const modalClose = feedbackModal.querySelector('.modal-close-button');

feedback.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackModal.classList.add('modal-show');
});

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackModal.classList.remove('modal-show');
});

feedbackModal.addEventListener('click', (evt) => {
  if (!evt.target.closest('.modal')) {
    feedbackModal.classList.remove('modal-show');
  }
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 27) {
    if (feedbackModal.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackModal.classList.remove('modal-show');
    }
  }
});
