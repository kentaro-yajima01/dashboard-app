// ここからコードを書いてください
// converter.js
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  // 単位データ
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // select要素にoptionを追加
  lengthUnit.forEach((unit) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  // 初期値設定
  converterInput.value = 1000;
  converterFrom.selectedIndex = 0; // meter
  converterTo.selectedIndex = 1; // kilometer

  // 変換処理
  function convert() {
    const value = parseFloat(converterInput.value);
    if (isNaN(value)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);

    const convertedValue = (value * fromBase) / toBase;
    converterResult.textContent = `${value} ${
      converterFrom.selectedOptions[0].text
    } = ${convertedValue.toFixed(3)} ${converterTo.selectedOptions[0].text}`;
  }

  converterForm.addEventListener("input", convert);
  convert(); // 初期表示
}
