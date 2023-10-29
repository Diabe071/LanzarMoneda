let caraCount = 0;
let cruzCount = 0;

function flipCoin() {
  const result = Math.random() < 0.5 ? 'Cara' : 'Cruz';
  const coin = document.querySelector('.coin');
  const caraImage = 'cara.png';
  const cruzImage = 'cruz.png';

  if (result === 'Cara') {
    coin.style.backgroundImage = `url(${caraImage})`;
    caraCount++;
    document.getElementById('caraCount').innerText = caraCount;
  } else {
    coin.style.backgroundImage = `url(${cruzImage})`;
    cruzCount++;
    document.getElementById('cruzCount').innerText = cruzCount;
  }

  document.getElementById('result').innerText = `Resultado: ${result}`;
}