


export function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}


export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
