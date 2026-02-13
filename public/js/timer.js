import { loadData, saveData } from './storage.js';

let timeLeft = loadData('timeLeft') || 25 * 60;  
let isFocus = loadData('isFocus') || true;  
let timerInterval;

export function startTimer() {
  if (timerInterval) return;  


  timerInterval = setInterval(() => {
    timeLeft--;  
    updateTimerDisplay();
    saveData('timeLeft', timeLeft);  

    if (timeLeft <= 0) {
      clearInterval(timerInterval);  
      switchToBreak();  
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(timerInterval);  
  timerInterval = null;
  timeLeft = 25 * 60;  
  saveData('timeLeft', timeLeft);  
  document.getElementById("status").textContent = "Focus";  
  saveData('isFocus', true);  
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);  
  const seconds = timeLeft % 60;  
  document.getElementById("timer-display").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function switchToBreak() {
  isFocus = false;  
  document.getElementById("status").textContent = "Break";  
  timeLeft = 5 * 60;  
  saveData('isFocus', isFocus);  
  saveData('timeLeft', timeLeft);  
  startTimer();  
}
