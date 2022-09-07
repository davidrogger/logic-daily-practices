const colorsCode:Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedValue(twoColors:string[]):number {
  const [first, second] = twoColors;
  const code = `${colorsCode[first]}${colorsCode[second]}`;
  return Number(code);
}

console.log(decodedValue(['brown', 'white']))

// https://exercism.org/tracks/typescript/exercises/resistor-color-duo