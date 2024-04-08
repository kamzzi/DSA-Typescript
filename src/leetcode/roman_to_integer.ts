type ValidKey = string | number | symbol;
type RomansKey = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const isRoman = (roman: ValidKey): roman is keyof typeof ROMANS => {
  return roman in ROMANS;
};

const ROMANS: Record<RomansKey, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const result = [];

  const romanNumbers = s.split("").map((roman) => {
    if (isRoman(roman)) {
      return ROMANS[roman];
    }
    return 0;
  });

  for (let i = 0; i < romanNumbers.length; i++) {
    const current = romanNumbers[i];
    const next = romanNumbers[i + 1];

    if (current < next) {
      result.push(next - current);
      i++;
    } else {
      result.push(current);
    }
  }

  const sum = result.reduce((acc, next) => (acc += next), 0);

  return sum;
}

/* 
    Requirements : None

    Explanation of my solution :
    * Convert a string of (EXAMPLE: XIII) to array contains a numbers of ROMAN number.
    * Check if next element is higher than behind him and correctly calculate.
    * Sum elements and return.
    
*/
