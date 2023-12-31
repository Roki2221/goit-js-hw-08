const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';
const feedbackValue = {
  email: '',
  message: '',
};
const formValue = JSON.parse(localStorage.getItem(FORM_KEY));
if (formValue !== null) {
  form.elements.email.value = formValue.email;
  form.elements.message.value = formValue.message;
}

const handleInput = () => {
  if (
    form.elements.email.value.trim().length === 0 &&
    form.elements.message.value.trim().length === 0
  ) {
    return;
  }
  feedbackValue.email = form.elements.email.value;
  feedbackValue.message = form.elements.message.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(feedbackValue));
};

form.addEventListener('input', throttle(handleInput, 500));

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  if (
    form.elements.email.value.trim().length === 0 ||
    form.elements.message.value.trim().length === 0
  ) {
    alert('Please fill in all fields');
    return;
  }
  event.preventDefault();
  feedbackValue.email = form.elements.email.value;
  feedbackValue.message = form.elements.message.value;
  console.log(feedbackValue);
  for (let key in feedbackValue) {
    delete feedbackValue[key];
  }
  console.log(feedbackValue);

  form.elements.message.value = '';
  form.elements.email.value = '';
  localStorage.removeItem(FORM_KEY);
}
