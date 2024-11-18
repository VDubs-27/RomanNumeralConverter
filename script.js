const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



function arabicToRoman(num) {
  const numerals = [
    {
      roman: "M",
      arabic: 1000
    },
    {
      roman: "CM",
      arabic: 900
    },
    {
      roman: "D",
      arabic: 500
    },
    {
      roman: "CD",
      arabic: 400
    },
    {
      roman: "C",
      arabic: 100
    },
    {
      roman: "XC",
      arabic: 90
    },
    {
      roman: "L",
      arabic: 50
    },
    {
      roman: "XL",
      arabic: 40
    },
    {
      roman: "X",
      arabic: 10
    },
    {
      roman: "IX",
      arabic: 9
    },
    {
      roman: "V",
      arabic: 5
    },
    {
      roman: "IV",
      arabic: 4
    },
    {
      roman: "I",
      arabic: 1
    }
  ];

  let result = "";
  for (const { roman, arabic } of numerals) {
    while (num >= arabic) {
      result += roman;
      num -= arabic;
    }
  }
  return result;
}

function convertNumber() {
  const num = parseInt(numberInput.value);

  if (isNaN(num)) {
    output.innerText = "Please enter a valid number";
  } else if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = arabicToRoman(num);
    output.innerText = romanNumeral;
  }
}

convertBtn.addEventListener("click", convertNumber);

numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertNumber();
  }
});
