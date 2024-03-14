export let area = (radius) => {
  let result = Math.PI * radius ** 2;
  return result;
};

export function circumference(radius) {
  let result = 2 * Math.PI * radius;
  return result;
}
