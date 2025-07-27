const quotes = [
   {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
   },
   {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
   },
   {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
   },
   {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
   },
   {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
   }
];

const quoteTxt = document.querySelector('.quote');
const authorTxt = document.querySelector('.author');
const btnQuote = document.querySelector('.btn-quote');

const generator = (q) => {
   const index = Math.floor(Math.random() * q.length);
   const strQuotes = q[index];
   
   quoteTxt.textContent = strQuotes.quote;
   authorTxt.textContent = strQuotes.author;

   return strQuotes;
};

btnQuote.addEventListener('click', () => {
   
   quoteTxt.classList.remove('fade-in');
   quoteTxt.classList.add('fade-out');

   authorTxt.classList.remove('fade-in');
   authorTxt.classList.add('fade-out');

   setTimeout(function() {
      generator(quotes);

      quoteTxt.classList.add('fade-in');
      quoteTxt.classList.remove('fade-out');

      authorTxt.classList.add('fade-in');
      authorTxt.classList.remove('fade-out');

   }, 300);
});