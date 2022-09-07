const romanLegend:Record<string, number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

function romanToInt(s:string):number {
  const romanInputList = s.split('');
  const lastIndex = romanInputList.length - 1;

  const valueCalc = romanInputList.reduce((total:number, letter:string, index:number) => {
    if (lastIndex === index) return total;
    if (romanLegend[letter] >= romanLegend[romanInputList[index + 1]]) {
      return total + romanLegend[letter];
    }
    return total - romanLegend[letter];
  }, 0);
  const lastLetter = romanInputList[lastIndex];

  return valueCalc + romanLegend[lastLetter];
};

console.log(romanToInt('XX'))

// Base code to develop this one: https://leetcode.com/problems/roman-to-integer/discuss/2521728/Beginner-friendly-JavaJavaScript-Solutions