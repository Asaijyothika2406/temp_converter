function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  let result;

  if (isNaN(temperature)) {
    alert('Please enter a valid number for temperature.');
    return;
  }

  // Conversion logic
  if (fromUnit === toUnit) {
    result = temperature; // Same unit, no conversion
  } else if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      result = (temperature * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      result = temperature + 273.15;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      result = (temperature - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      result = (temperature - 32) * 5/9 + 273.15;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      result = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      result = (temperature - 273.15) * 9/5 + 32;
    }
  }

  // Display result
  document.getElementById('result').textContent = `Result= ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
