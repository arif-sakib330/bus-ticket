const btn = document.getElementById("buy-ticket-btn");
const targetElement = document.getElementById("scroll");

btn.addEventListener("click", function () {
  targetElement.scrollIntoView({ behavior: "smooth" });
});

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
    const updateSeatNo = (document.getElementById("seat-count").innerText =
      seatCount + 1);

    const seatLeft = getInnerTextValue("seat-left");
    document.getElementById("seat-left").innerText = seatLeft - 1;

    btn.style.backgroundColor = "#1DD100";

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
  } else {
    const coupon = document.getElementById("input-coupon").value;
    if (coupon == "NEW15") {
      const discounted = totalSum * 0.15;
      console.log(discounted);
      document.getElementById("grand-total").innerText = totalSum - discounted;
      document.getElementById("discount").innerText = discounted;
    }
    if (coupon == "Couple 20") {
      const discounted = totalSum * 0.2;
      console.log(discounted);
      document.getElementById("grand-total").innerText = totalSum - discounted;
      document.getElementById("discount").innerText = discounted;
    } else {
      alert("Please enter valid coupon code");
    }
  }
}

function totalPrice(value) {
  const totalPrice = getInnerTextValue("total-price");
  const sum = totalPrice + parseInt(value);
  document.getElementById("total-price").innerText = sum;
}

// 4 seat
function handleSeatClick(event) {
  const button = event.target;

  const selectedSeats = document.querySelectorAll(".seat-btn.selected").length;

  if (button.classList.contains("selected") || selectedSeats < 4) {
    button.classList.toggle("selected");
  } else {
    alert("You can't buy more then 4 tickets");
  }
  updateSeatCount();
}
// apply btn

function applyBtn() {
  const applyBtn = document.getElementById("coupon-btn");
  const selectedSeats = document.querySelectorAll(".seat-btn.selected").length;
  const Button = document.getElementById("coupon-btn");
  if (selectedSeats > 3) {
    Button.disabled = false;
  } else {
    Button.disabled = true;
  }
  applyBtn.addEventListener("click", function () {
    applyBtn.classList.add("hidden");
  });
}

document.querySelectorAll(".seat-btn").forEach((button) => {
  button.addEventListener("click", handleSeatClick);
});

////Next button disable and enable

function handleSeatClick(event) {
  const button = event.target;
  button.classList.toggle("selected");
  updateSeatCount();
  applyBtn();
}

function updateSeatCount() {
  const selectedSeats = document.querySelectorAll(".seat-btn.selected").length;
  const phoneInput = document.getElementById("num-field");
  const nextButton = document.getElementById("next-btn");
  document.getElementById("seat-count").innerText = selectedSeats;
  if (selectedSeats > 0 && phoneInput.value.length > 0) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}
function handlePhoneInput() {
  updateSeatCount();
}

document.querySelectorAll(".seat-btn").forEach((button) => {
  button.addEventListener("click", handleSeatClick);
});

document
  .getElementById("num-field")
  .addEventListener("input", handlePhoneInput);

// success
const nextBtn = document.getElementById("next-btn");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const successDiv = document.getElementById("success");
nextBtn.addEventListener("click", function () {
  successDiv.classList.remove("hidden");
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
});
