const input = document.querySelector(".input")
const currencyList = document.querySelector(".currencyList")
const getBtn = document.querySelector(".get-result")
const output = document.querySelector(".output")
const currencySign = document.querySelector(".currency-sign")
// const inputCurrencySign = document.querySelector(".input-currency-sign")


getBtn.addEventListener("click", () => {
    fetch("https://api.exchangerate.host/latest?base=kgs")
        .then(res => res.json())
        .then(data => {
            // inputCurrencySign.innerText = data.base
            output.value = (input.value * data.rates[currencyList.value]).toFixed()
        })
    const rates = {
        USD: "$",
        EUR: "€",
        RUB: "₽"
    }
    currencySign.innerText = rates[currencyList.value]
})
