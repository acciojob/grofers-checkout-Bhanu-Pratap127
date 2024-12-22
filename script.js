const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const prices = document.querySelectorAll(".price");
  let total = 0;
  
  prices.forEach(price => {
    total += parseFloat(price.innerText);
  });

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  
  newCell.innerText = `Total Price: ${total}`;
  newRow.appendChild(newCell);
  
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

