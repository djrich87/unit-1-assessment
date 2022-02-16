
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const input1 = document.getElementById('math-input1')
const mathResult = document.getElementById('math-result')


plusBtn.addEventListener('click', () => {
  console.log('plus button')
mathResult.textContent = parseInt(input1.value)
})

minusBtn.addEventListener('click', () => {
  // console.log('minus button')
mathResult.textContent = parseInt(input1.value)
})