import { startTimer, resetTimer } from './timer.js';
import { loadData, saveData } from './storage.js'; // Import loadData and saveData


document.addEventListener('DOMContentLoaded', () => {
  // Load saved state from localStorage
  const isFocus = loadData('isFocus') === true; // Check Focus state from localStorage
  const timeLeft = loadData('timeLeft') || 25 * 60; // Get the saved time or default to 25 minutes

  // Set initial status based on the timer state (Focus or Break)
  document.getElementById("status").textContent = isFocus ? "Focus" : "Break";
  document.getElementById("timer-display").textContent = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;

  // Add event listeners for Start and Reset buttons
  document.getElementById("start-timer").addEventListener("click", startTimer);
  document.getElementById("reset-timer").addEventListener("click", resetTimer);
});
