const initialPrice = document.querySelector('#initial-price');
const currentPrice = document.querySelector('#current-price');
const totalStocksQuantity = document.querySelector('#total-stocks');
const checkButton = document.querySelector('#btn');
const outputArea = document.querySelector('#output');

function checkProfitAndLoss(initial, quantity, current) {
    if (current > initial) {
        var profit = Number((current - initial) * quantity);

        var profitPercent = Number((profit / initial) * 100);

        var profitPercentage = profitPercent.toFixed(2);

        showOutput(`hey your profit is ${profit} and profit percent is ${profitPercentage}`);
        outputArea.style.color = 'green';
    } else if (initial > current) {
        var loss = Number((initial - current) * quantity);
        var lossPercent = Number((loss / initial) * 100);

        var lossPercentage = lossPercent.toFixed(2);

        showOutput(`hey your loss is ${loss} and loss percent is ${lossPercentage}`);

        outputArea.style.color = 'red';

    } else {
        showOutput('No Pain No Gain , No Gain No Pain');
        outputArea.style.color = '#5451A6';
    }

}

function clickHandler() {
    var costPrice = initialPrice.value;
    var qty = totalStocksQuantity.value;
    var currPrice = currentPrice.value;

    checkProfitAndLoss(costPrice, qty, currPrice);
}

function showOutput(message) {
    outputArea.innerText = message;
}

checkButton.addEventListener('click', clickHandler)