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

  const ans=document.getElementById("ans")
	  ans.innerText = `Total Price: ${total}`;
};

getSumBtn.addEventListener("click", getSum);

