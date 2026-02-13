import { loadData, saveData } from './storage.js';

let timeLeft = loadData('timeLeft') || 25 * 60;  // Get the saved timer time or default to 25 minutes
let isFocus = loadData('isFocus') || true;  // Get whether the timer is in Focus or Break mode
let timerInterval;

export function startTimer() {
  if (timerInterval) return;  // Prevent multiple timers from starting

  // Start the countdown interval
  timerInterval = setInterval(() => {
    timeLeft--;  // Decrement timeLeft by 1 each second
    updateTimerDisplay();
    saveData('timeLeft', timeLeft);  // Save the updated timeLeft to localStorage

    // When the timer reaches 0, switch to Break
    if (timeLeft <= 0) {
      clearInterval(timerInterval);  // Stop the timer
      switchToBreak();  // Switch to break when the time is up
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(timerInterval);  // Stop the current timer
  timerInterval = null;
  timeLeft = 25 * 60;  // Reset the timer to 25 minutes (Focus)
  saveData('timeLeft', timeLeft);  // Save the reset time
  document.getElementById("status").textContent = "Focus";  // Reset status to Focus
  saveData('isFocus', true);  // Save the Focus state
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);  // Get the minutes part
  const seconds = timeLeft % 60;  // Get the seconds part
  document.getElementById("timer-display").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function switchToBreak() {
  isFocus = false;  // Change state to Break
  document.getElementById("status").textContent = "Break";  // Change the status label
  timeLeft = 5 * 60;  // Set timeLeft to 5 minutes for Break
  saveData('isFocus', isFocus);  // Save Break state
  saveData('timeLeft', timeLeft);  // Save break time
  startTimer();  // Start the break timer
}
