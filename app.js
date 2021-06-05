const pageviews = ["10K", "50K", "100K", "500k", "1M"];
const prices = [8, 12, 16, 24, 36];

const slider = document.querySelector('.slider');
const numberLabel = document.querySelector('.number');
const amount = document.querySelector('.plan span');
const toggle = document.querySelector('.switch input');
const planLabel = document.querySelector('.plan label');

slider.oninput = function() {
    numberLabel.textContent = pageviews[slider.value];
    calcPlan();
}

toggle.onclick = function() {
    calcPlan();
}

function calcPlan() {
    if (toggle.checked) {
        amount.textContent = prices[slider.value] * 12 * (.75);
        planLabel.textContent = '/ yearly';
    } else {
        amount.textContent = prices[slider.value];
        planLabel.textContent = '/ monthly';
    }
    amount.textContent = amount.textContent + '.00';
}

