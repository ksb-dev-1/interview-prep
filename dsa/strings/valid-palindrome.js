function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
