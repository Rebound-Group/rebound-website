export const colorMap = {
  melon: "#E58A80",
  blue: "#004AAD",
  green: "#255F36",
  yellow: "#FFDE59",
  black: "#000",
  opaque: "rgba(0,0,0,0.4)",
};

export const ValidateEmail = (value) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return value?.match(validRegex);
};
