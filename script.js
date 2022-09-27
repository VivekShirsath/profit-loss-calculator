const initial = document.querySelector("#initial");
const quantity = document.querySelector("#quantity");
const current = document.querySelector("#current");
const button = document.querySelector("#show");
const message = document.querySelector("#message");

function calculate() {
  let initialPrice = Number(initial.value);
  console.log(initialPrice);
  let quantityNum = Number(quantity.value);
  let currentPrice = Number(current.value);
  console.log(initialPrice <= 0);

  if (initialPrice <= 0 || quantityNum <= 0 || currentPrice <= 0) {
    message.innerText =
      "Please input all values and should be greater than zero.";
  } else {
    if (initialPrice < currentPrice) {
      initialTotal = initialPrice * quantityNum;
      currentTotal = currentPrice * quantityNum;
      let profit = currentTotal - initialTotal;

      let profitPercentage = Math.round((profit / initialTotal) * 100);
      message.innerText =
        "Congratulations ! You have made profit of " +
        profit +
        " at " +
        profitPercentage +
        "%";
    } else if (initialPrice > currentPrice) {
     initialTotal = initialPrice * quantityNum;
      currentTotal = currentPrice * quantityNum;
      let loss = initialTotal - currentTotal;
      let lossPercentage = Math.round((loss / initialTotal) * 100);
      message.innerText =
        "Sorry, you have made loss of " + loss + " at " + lossPercentage + "%";
    } else {
      message.innerText = "No profit No loss,everything remains same!!";
    }
  }
}

button.addEventListener("click", calculate);
