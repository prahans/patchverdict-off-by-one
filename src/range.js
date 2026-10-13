export function range(start, end) {
  const values = [];

  for (let value = start; value <= end; value++) {
    values.push(value);
  }

  return values;
}
