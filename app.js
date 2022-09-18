// https://www.omnicalculator.com/conversion/ml-to-kg

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgRadio = document.getElementById('kgRadio');
const mlRadio = document.getElementById('mlRadio');

let kg;
let ml = v; 

// labels of the inpust
const variable = document.getElementById('variable');

kgRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

mlRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;

  else if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;
})

// calculation

function computekg() {
  return Number(ml.value) / 1000;
}

function computeml() {
  return Number(kg.value) * 1000;
}