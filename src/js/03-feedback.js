import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
    const state = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }, 500);

  const loadFormState = () => {
    const state = localStorage.getItem('feedback-form-state');
    if (state) {
      const { email, message } = JSON.parse(state);
      emailInput.value = email;
      messageInput.value = message;
    }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const state = { email: emailInput.value, message: messageInput.value };
  console.log('Form data:', state);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

window.addEventListener('load', loadFormState);


