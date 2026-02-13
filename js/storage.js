// storage.js

// Load data from localStorage
export function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Save data to localStorage
export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
