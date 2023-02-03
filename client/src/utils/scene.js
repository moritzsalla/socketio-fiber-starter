export const getRandomCoord = () => {
  const x = Math.random() * 4 - 2;
  const y = Math.random() * 4 - 2;
  const z = Math.random() * 4 - 2;
  return [x, y, z];
};

export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
};

export const getRandomScale = () => {
  const r = Math.random() * 3 + 1;
  return [r, r, r];
};

export const getFormattedRGBColor = (color) => {
  return `rgb(${color})`;
};
