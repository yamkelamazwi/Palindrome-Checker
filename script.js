let checkBtn = document.getElementById("check-btn");
let textInput = document.getElementById("text-input");
let result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const input = textInput.value;

  if (input === "") {
    alert("Please input a value");
    return;
  }

  let cleaned = input.toLowerCase()
  .replace(/[^a-z0-9]/g, "");

  let reversed = cleaned
  .split("")
  .reverse()
  .join("");

  if (cleaned === reversed) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
  
});
