export function setUser(userId: number) {
  localStorage.setItem("userId", JSON.stringify(userId));
}

export function getUser() {
  const userId = localStorage.getItem("userId");
  if (userId) return JSON.parse(userId);
  else return null;
}

export function removeUser() {
  localStorage.removeItem("userId");
}
