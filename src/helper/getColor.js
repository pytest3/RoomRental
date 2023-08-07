export function getColor(data, type) {
  const roomType = data.filter((i) => i.type === type)[0];
  const color = roomType.color;
  return color;
}
