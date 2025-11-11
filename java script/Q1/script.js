const $ = id => document.getElementById(id);
const qs = selector => document.querySelector(selector);

function timeStrings(){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const date = now.toLocaleDateString();
  return {now, hhmm:`${hh}:${mm}`, dateStr:date, hour: now.getHours()};
}
function sfxBeep(freq=440, duration=0.07, vol=0.02){
  if(!soundEnabled) return;
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type='sine'; o.frequency.value=freq;
    g.gain.value = vol;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    setTimeout(()=>{ o.stop(); ctx.close(); }, duration*1000);
  }catch(e){}
}
function speak(text){
  if(!voiceEnabled) return;
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 1;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  if(voices && voices.length) {
    // pick a crisp voice (try to choose a neutral english voice)
    u.voice = voices.find(v=>/en/.test(v.lang)) || voices[0];
  }
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

function typeText(node, text, speed=18){
  node.innerHTML = '';
  node.dataset.typing = '1';
  let i=0;
  const id = setInterval(()=>{
    node.innerHTML += text[i] || '';
    i++;
    if(i>text.length){
      clearInterval(id);
      delete node.dataset.typing;
    }
  }, speed);
}


const pick = arr => arr[Math.floor(Math.random()*arr.length)];

let xp = 0;
let voiceEnabled = true;
let soundEnabled = true;
let remember = true;

const nameInput = qs('#nameInput');
const greetBtn = qs('#greetBtn');
const greetText = qs('#greetText');
const xpFill = qs('#xpFill');
const xpValue = qs('#xpValue');
const logArea = qs('#logArea');
const timeNow = qs('#timeNow');
const dateNow = qs('#dateNow');
const moodPills = qs('#moodPills');

const voiceToggle = qs('#voiceToggle');
const soundToggle = qs('#soundToggle');
const rememberToggle = qs('#rememberToggle');

const cube = qs('#animatedCube');

const moodPool = [
  {tag:'Jarvis', phraseList:[
    'Good {part}, {name}. Systems nominal.',
    'Welcome back, {name}. All systems green.',
    'At your service, {name}. Shall I prepare your schedule?'
  ]},
  {tag:'Gamer', phraseList:[
    'Yo {name}! +{xp} XP — Level up, champ!',
    'GG {name}! You just scored +{xp} XP.',
    'Ready, {name}? Let\'s crush today’s leaderboard!'
  ]},
  {tag:'Cute', phraseList:[
    'Hey {name} 💖 — you sparkle today!',
    'Hiya {name}! Sending you a big smile 😊',
    'You\'re awesome, {name}! Keep shining ✨'
  ]},
  {tag:'Balanced', phraseList:[
    '{part} {name}! Keep the momentum going.',
    'Hello {name}, hope your day is productive and fun.',
    'Good {part}, {name}. Small wins build up to greatness.'
  ]}
];

function formatPhrase(phrase, data){
  return phrase.replace(/\{name\}/g, data.name || '')
               .replace(/\{xp\}/g, data.xp || '0')
               .replace(/\{part\}/g, data.part || '');
}

function updateTime(){
  const ts = timeStrings();
  timeNow.textContent = ts.hhmm;
  dateNow.textContent = ts.dateStr;
  if(ts.hour >= 18 || ts.hour < 6) document.body.classList.add('night'); else document.body.classList.remove('night');
}

function timePart(hour){
  if(hour < 12) return 'Morning';
  if(hour < 17) return 'Afternoon';
  return 'Evening';
}

function pushLog(text){
  const now = new Date().toLocaleTimeString();
  const node = document.createElement('div');
  node.textContent = `[${now}] ${text}`;
  logArea.prepend(node);
  while(logArea.children.length > 30) logArea.removeChild(logArea.lastChild);
}

function awardXP(n=10){
  xp = Math.min(9999, xp + n);
  xpFill.style.width = Math.min(100, xp)%100 + '%';
  xpValue.textContent = xp;
  xpFill.animate([{transform:'scaleX(0.98)'},{transform:'scaleX(1)'}],{duration:600,iterations:1});
}

function refreshMoods(){
  moodPills.innerHTML = '';
  for(const m of moodPool){
    const chip = document.createElement('div');
    chip.className = 'mood-chip';
    chip.textContent = m.tag;
    moodPills.appendChild(chip);
  }
}

function greetUser(rawName){
  const name = (rawName || '').trim() || 'Friend';
  const ts = timeStrings();
  const part = timePart(ts.hour);

  if(remember) localStorage.setItem('nexus_name', name);
  const jarvis = moodPool[0];
  const gamer = moodPool[1];
  const cute = moodPool[2];
  const balanced = moodPool[3];

  cube.style.transform = `rotateX(${10 + Math.random()*20}deg) rotateY(${ -10 + Math.random()*20 }deg)`;
  const xpAward = (ts.hour >= 6 && ts.hour < 12) ? 12 : (ts.hour < 18 ? 8 : 10);
  awardXP(xpAward);
  sfxBeep(880,0.06,0.03);

  const jarvisLine = pick(jarvis.phraseList);
  const cuteLine = pick(cute.phraseList);
  const gamerLine = pick(gamer.phraseList);
  const balancedLine = pick(balanced.phraseList);

  const data = {name, xp: xpAward, part};

  const fullMessage = [
    formatPhrase(jarvisLine, data),
    formatPhrase(cuteLine, data),
    formatPhrase(gamerLine, data),
    formatPhrase(balancedLine, data)
  ].join(' ');

  const header = `Good ${part}, ${name}!`;
  typeText(greetText, header + ' — ' + 'composing personalized greeting...', 14);

  setTimeout(()=>{
    const reveal = `${header} ${formatPhrase(pick(jarvis.phraseList), data)} ${formatPhrase(pick(cute.phraseList), data)}`;
    typeText(greetText, reveal, 16);
    sfxBeep(600,0.08,0.02);
    setTimeout(()=>speak(fullMessage), 550);
    pushLog(`Greeted ${name} (${part}). XP +${xpAward}`);
  }, 800);

  highlightMoodChips();
}

function highlightMoodChips(){
  const chips = moodPills.children;
  if(!chips.length) return;
  for(const c of chips) c.style.boxShadow = '';
  const idx = Math.floor(Math.random()*chips.length);
  const c = chips[idx];
  c.style.boxShadow = '0 6px 18px rgba(0,240,255,0.12)';
  cube.animate([{transform:'rotateY(0deg)'},{transform:'rotateY(360deg)'}],{duration:1200,iterations:1});
}

function tryRestore(){
  const saved = localStorage.getItem('nexus_name');
  if(saved){
    nameInput.value = saved;
    if(remember) greetUser(saved);
  }
}


refreshMoods(); updateTime(); tryRestore();
setInterval(updateTime, 30*1000); // update clock

greetBtn.addEventListener('click', ()=>{
  const nm = nameInput.value.trim();
  if(!nm){
    typeText(greetText, 'Please enter a name to receive a truly personalized greeting ✨', 14);
    sfxBeep(220,0.06,0.02);
    return;
  }
  greetUser(nm);
});

nameInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') greetBtn.click();
});

voiceToggle.addEventListener('change', (e)=>{ voiceEnabled = e.target.checked; if(!voiceEnabled) window.speechSynthesis.cancel(); });
soundToggle.addEventListener('change', (e)=>{ soundEnabled = e.target.checked; });
rememberToggle.addEventListener('change', (e)=>{ remember = e.target.checked; if(!remember) localStorage.removeItem('nexus_name'); });

voiceToggle.checked = true; soundToggle.checked = true; rememberToggle.checked = true;

document.body.addEventListener('click', (ev)=>{
  awardXP(1);
  sfxBeep(440,0.03,0.01);
});
