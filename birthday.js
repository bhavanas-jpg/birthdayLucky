const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const compareValues = (sum, luckyNumber) => {
  if (sum % luckyNumber === 0) {
    outputBox.style.display = "block";
    outputBox.innerText = "Your birthday is lucky🥳🥳";
  } else {
    outputBox.style.display = "block";
    outputBox.innerText = "Your birthday is not lucky😔";
  }
};

const checkBirthDateIsLucky = () => {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.style.display = "block";
    outputBox.innerText = "Please enter both the fields😡";
  }
};
const calculateSum = (dob) => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index in dob) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
};

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
