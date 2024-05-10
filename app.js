function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  monthToValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToValue;

  monthlyPayment = (loanAmountValue / monthToValue + interest).toFixed(2);
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
