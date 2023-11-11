export function setPermission(value: "manager" | "visitor") {
  localStorage.setItem("permission", value);
}

export function getPermission(): string | null {
  const permission = localStorage.getItem("permission");
  if (permission) return permission;
  return null;
}

export function deletePermission() {
  localStorage.removeItem("permission");
}
