const amountText = document.getElementById('amount');
const tipSlider = document.getElementById('tip');
const tipText = document.getElementById('tip-text');
const split = document.getElementById('split');
const splitContainer = document.getElementById('split-container');
const splitInput = document.getElementById('split-input');
const splitTotal = document.getElementById('split-total');
const totalTipText = document.getElementById('total');

// function for converting the tip percentage to its decimal value
function tipPercentage(tip) {
   const tipAmount = tip / 100;
   return tipAmount;
};

// function to calculate the bill and the tip
function totalAmountOfTip(bill, tip) {
   const tipTotal = tipPercentage(tip);
   const total = bill * tipTotal;
   return total;
};

// function to calculate the split bill
function splitBill(totalBill, splitBill) {
   const billSplit = totalBill / splitBill;
   return billSplit.toFixed(2);
};

// Event listeners

// when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
   tipText.textContent = tipPercentage(tipSlider.value);
   totalTipText.textContent = totalAmountOfTip(amountText.value, tipSlider.value).toFixed(2);
});

// when slider is moved
tipSlider.addEventListener('input', function() {
   tipText.textContent = tipPercentage(tipSlider.value);
   totalTipText.textContent = totalAmountOfTip(amountText.value, tipSlider.value).toFixed(2);
});

// when amount is inputted
amountText.addEventListener('input', function() {
   totalTipText.textContent = totalAmountOfTip(amountText.value, tipSlider.value).toFixed(2);
});

// to show and hide the split bill container
split.addEventListener('click', function() {
   if (split.checked === true) {
      splitContainer.style.height = 'auto';
      splitContainer.style.overflow = 'auto';
   } else {
      splitContainer.style.height = 0;
      splitInput.textContent = '';
   }
});

// calculating the split amount
splitInput.addEventListener('input', function() {
   if (splitInput.value === '') {
      splitTotal.textContent = '';
   } else {
      splitTotal.textContent = splitBill(amountText.value, splitInput.value);
   };
});