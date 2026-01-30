function rand(min,max){return Math.random()*(max-min)+min}
const container = document.getElementById('bubble-container');
function makeBubble(){
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = Math.floor(rand(18,130));
  b.style.width = size+'px';
  b.style.height = size+'px';
  b.style.left = rand(-10,100) + 'vw';
  b.style.bottom = '-30vh';
  const hue = Math.floor(rand(160,220));
  b.style.background = `radial-gradient(circle at 30% 35%, rgba(255,255,255,0.45), hsla(${hue},70%,60%,0.25))`;
  const dur = rand(10,32).toFixed(1)+'s';
  b.style.animationDuration = dur;
  b.style.animationDelay = (rand(0,8)).toFixed(2) + 's';
  container.appendChild(b);
  b.addEventListener('animationend', ()=>{b.remove();spawnOnce()});
}

function spawnOnce(){
  // keep around ~30 bubbles
  const count = container.querySelectorAll('.bubble').length;
  if(count < 30) setTimeout(makeBubble, rand(50,600));
}

for(let i=0;i<25;i++){makeBubble()}
setInterval(()=>{spawnOnce()}, 1400);
