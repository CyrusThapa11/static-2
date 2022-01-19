const story = document.querySelectorAll('.story-btn');

story.forEach((el) => {
  el.addEventListener('click', () => {
    // console.log('clickedd');
    el.classList.toggle('change');
    el.nextElementSibling.classList.toggle('change');
  });
});
