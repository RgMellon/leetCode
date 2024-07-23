class PalindromeDeque {
  s = [];
  count = 0;
  lowestCount = 0;

  constructor(s) {
    this.s = s.split("");
    this.count = this.s.length - 1;
  }

  removeFront() {
    const elementToRemove = this.s[this.lowestCount];
    this.lowestCount++;
    return elementToRemove;
  }

  removeBack() {
    const elementToRemove = this.s[this.count];
    this.count--;
    return elementToRemove;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

function isPalindrome(numberToVerify) {
  const palindromeDeque = new PalindromeDeque(String(numberToVerify));

  let isEqual = true;

  while (palindromeDeque.size() >= 1) {
    const firstChart = palindromeDeque.removeFront();
    const lastChart = palindromeDeque.removeBack();

    if (firstChart !== lastChart) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(isPalindrome(10));
