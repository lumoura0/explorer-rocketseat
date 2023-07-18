function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value == '';
}

export { IMC, notNumber };
