import { startTimer, resetTimer } from './timer.js';
import { loadData, saveData } from './storage.js';


document.addEventListener('DOMContentLoaded', () => {
  
  const isFocus = loadData('isFocus') === true; 
  const timeLeft = loadData('timeLeft') || 25 * 60; 

  
  document.getElementById("status").textContent = isFocus ? "Focus" : "Break";
  document.getElementById("timer-display").textContent = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;

 
  document.getElementById("start-timer").addEventListener("click", startTimer);
  document.getElementById("reset-timer").addEventListener("click", resetTimer);
});
