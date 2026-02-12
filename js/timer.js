// timer.js

let timeLeft = 25 * 60; // Focus time in seconds (25 minutes)
let timerInterval;
let isFocus = true; // Track if it's Focus or Break time

// Function to start the timer
export function startTimer() {
  if (timerInterval) return; // Prevent multiple timers

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      switchToBreak(); // Switch to Break when the timer ends
    }
  }, 1000);
}

// Function to reset the timer
export function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateTimerDisplay();
  document.getElementById("status").textContent = "Focus"; // Reset the status to Focus
}

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer-display").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to switch to Break
function switchToBreak() {
  isFocus = false;
  document.getElementById("status").textContent = "Break"; // Change the label to Break
  timeLeft = 5 * 60; // Break time is 5 minutes
  startTimer(); // Start the break timer
}
