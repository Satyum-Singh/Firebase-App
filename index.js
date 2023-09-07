const appSettings = {
  databaseURL:
    "https://myfirstapp-3084e-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const inputField = document.getElementById("input-field");
const addbtn = document.getElementById("add-btn");

addbtn.addEventListener("click", function () {
  let inputValue = inputField.value;
  console.log(inputValue);
});
