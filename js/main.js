const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlSHortenerResults = document.querySelector('.url-shortener-form__results-wrapper');
const elUrlShortenerCopyButton = document.querySelector('.js-button-copy-clipboard');

elUrlShortenerForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  elUrlSHortenerResults.classList.add('url-shortener-form__results-wrapper--open');
});

elUrlShortenerForm.addEventListener('click', function (evt) {
  if (evt.target.matches('.js-button-copy-clipboard')) {
    evt.target.textContent = 'Copied!';

    evt.target.classList.add('button--rectangle-small-copied');

   navigator.clipboard.writeText(evt.target.previousElementSibling.textContent)

    setTimeout(function () {
      evt.target.textContent = 'Copy';
      evt.target.classList.remove('button--rectangle-small-copied');
    }, 1000);

  }
});