export function isValidIPv4(str) {
  const parts = str.split(".");

  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    if (part.length === 0) return false;

    if (Number.isNaN(Number(part))) return false;

    if (part.length > 1 && part[0] === "0") return false;

    const num = Number(part);

    if (num < 0 || num > 255) return false;
  }
  return true;
}
