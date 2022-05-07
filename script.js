const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const currencyOneInput = document.getElementById('currency-one-number');
const rate = document.getElementById('rate')
const btnSwap = document.getElementById('swap')

const showRate = (rates) => {
    rate.textContent = `1 ${currencyOne.value} = ${rates[currencyTwo.value]} ${currencyTwo.value}` 
}
const showResult = (rates) => {
    let res = parseInt(currencyOneInput.value) * rates[currencyTwo.value]
    document.querySelector('.currency div').textContent =res.toFixed(2) 
}
const swap = () => {
    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calcRate()
}
const calcRate = async () => {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`) 
    const result = await response.json()    
    showRate (result.rates)
    showResult (result.rates)    
}
calcRate()
btnSwap.addEventListener('click', swap);
[currencyOne, currencyTwo, currencyOneInput].forEach(e => e.addEventListener('change', calcRate))