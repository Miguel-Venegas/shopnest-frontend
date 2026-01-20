export const isRequired = (value, message) => {
  if (!value || !value.trim()) return message;
  return null;
};

export const isLengthBetween = (value, min, max, message) => {
  if (value.length < min || value.length > max) return message;
  return null;
};

export const isNonNegativeNumber = (value, message) => {
  const num = Number(value);
  if (Number.isNaN(num)) return message;
  if (num < 0) return message;
  return null;
};

export const isInteger = (value, message) => {
  const num = Number(value);
  if (!Number.isInteger(num)) return message;
  return null;
};

export const isValidUrl = (value, message) => {
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol)) {
      return message;
    }
    return null;
  } catch {
    return message;
  }
};
