const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received");
const btnCalculate = document.querySelector("#btn-calculate");
const displayError = document.querySelector("#display-error");
const returnedDenomination = document.querySelectorAll(".returned");

const currency = [2000, 500, 100, 20, 10, 5, 1];

btnCalculate.addEventListener("click", function calculateReturnCash() {
    if (billAmount.value >= 0) {
        if (cashReceived.value >= billAmount.value) {
            var returnAmount = cashReceived.value - billAmount.value;
            for (let i = 0; i < currency.length; i++) {
                const returnDenomination = Math.trunc(returnAmount / currency[i])
                returnAmount %= currency[i];

                returnedDenomination[i].innerText = returnDenomination;

            }
        } else {
            errorMessage("we have an option to wash dishes :(")
        }
    } else {
        errorMessage("please enter valid bill amount")
    }
})

function errorMessage(message) {
    displayError.innerText = message;
}