export const camelCaseStr = (str) =>
  str
    .replace(/_/g, " ")
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

export const isValidEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return emailRegex.test(email);
};

export const isValidTimeZone = (timeZone) => {
  const timeZoneRegex = /^[a-zA-Z]+\/[a-zA-Z_]+$/;
  return timeZoneRegex.test(timeZone);
};
