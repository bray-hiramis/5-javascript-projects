const passwordInput = document.getElementById('password');
const lowerCaseText = document.querySelector('[data-char="lower-case"]');
const upperCaseText = document.querySelector('[data-char="upper-case"]');
const specialCharText = document.querySelector('[data-char="special-char"]');
const numberText = document.querySelector('[data-char="number"]');
const min = document.querySelector('[data-char="min"]');

function passwordStrength(psw) {
   const lowerCaseLetters = /[a-z]/g;
   const upperCaseLetters = /[A-Z]/g;
   const specialCharacters = /[!@#$%^&*]/g;
   const digits = /\d/g;
   const minLength = 8;

   if (psw.match(lowerCaseLetters)) {
      lowerCaseText.style.color = 'green';
   } else {
      lowerCaseText.style.color = 'crimson';
   };

   if (psw.match(upperCaseLetters)) {
      upperCaseText.style.color = 'green';
   } else {
      upperCaseText.style.color = 'crimson';
   };

   if (psw.match(specialCharacters)) {
      specialCharText.style.color = 'green';
   } else {
      specialCharText.style.color = 'crimson';
   };

   if (psw.match(digits)) {
      numberText.style.color = 'green';
   } else {
      numberText.style.color = 'crimson';
   };

   if (psw.length >= minLength) {
      min.style.color = 'green';
   } else {
      min.style.color = 'crimson';
   };
};

passwordInput.addEventListener('input', function() {
   passwordStrength(passwordInput.value);
})