function getInnerTextValue(id) {
  const text = document.getElementById(id).innerText;
  const value = parseInt(text);
  return value;
}

const allBtn = document.getElementsByClassName("seat-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const seatName = event.target.innerText;

    const seatCount = getInnerTextValue("seat-count");
    document.getElementById("seat-count").innerText = seatCount + 1;

    const seatLeft = getInnerTextValue("seat-left");
    document.getElementById("seat-left").innerText = seatLeft - 1;

    const seatSelect = document.getElementById("seat-select");

    const div = document.createElement("div");
    div.classList.add("flex", "text-gray-400", "place-content-between", "p-2");

    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    const perSeatTaka = getInnerTextValue("taka");

    p.innerText = seatName;
    p2.innerText = "Economy";
    p3.innerText = perSeatTaka;

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

    const seatSelected = document.getElementById("seat-select");
    seatSelected.appendChild(div);

    totalPrice(perSeatTaka);
    grandTotal();
  });
}

function grandTotal(status) {
  const totalSum = getInnerTextValue("total-price");

  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalSum;
    console.log("pera nai");
  } else {
    const coupon = document.getElementById("input-coupon").value;
    console.log("pera ache");
    if (coupon == "NEW15") {
      const discounted = totalSum * 0.15;
      console.log(discounted);
      document.getElementById("grand-total").innerText = totalSum - discounted;
    }
    if (coupon == "Couple 20") {
      const discounted = totalSum * 0.2;
      console.log(discounted);
      document.getElementById("grand-total").innerText = totalSum - discounted;
    } else {
      alert("Please enter valid coupon code");
    }
  }
}

function totalPrice(value) {
  const totalPrice = getInnerTextValue("total-price");
  const sum = totalPrice + parseInt(value);
  document.getElementById("total-price").innerText = sum;

  // grandTotal(sum);
}
