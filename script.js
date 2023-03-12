
  var btn = document.querySelector('button');
function changeColor () {
btn.style.backgroundColor = 'pink';
}

const form = document.querySelector('form');
const successMessage = document.querySelector('#form');
form.addEventListener('submit', () => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => form.submit(), 2000);
} );