const input_celsius = document.querySelector('.input_celsius');
const input_fahrenheit = document.querySelector('.input_fahrenheit');
const input_kelvin = document.querySelector('.input_kelvin');

input_celsius.addEventListener('input', () => {
    const celsius = input_celsius.value;
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    input_fahrenheit.value = fahrenheit;
    input_kelvin.value = kelvin;
});
input_fahrenheit.addEventListener('input', () => {
    const fahrenheit = input_fahrenheit.value;
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    input_celsius.value = celsius;
    input_kelvin.value = kelvin;
});
input_kelvin.addEventListener('input', () => {
    const kelvin = input_kelvin.value;
    const celsius = kelvin - 273.15;
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    input_celsius.value = celsius;
    input_fahrenheit.value = fahrenheit;
});
