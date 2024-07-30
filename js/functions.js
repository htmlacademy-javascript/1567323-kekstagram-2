// Функция для проверки длины строки.
const checkingLengthString = function (string, maxLength) {
  const result = string.length <= maxLength;
  return result;
};
checkingLengthString('12345678', 8);
checkingLengthString('123456789', 8);
checkingLengthString('простая строка', 10);
checkingLengthString('простая строка', 14);
checkingLengthString('простая строка', 23);

// Функция для проверки, является ли строка палиндромом.
function checkPalindrom(string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += normalizeString[i];
  }

  if (reverseString === normalizeString) {
    return true;
  }
  return false;
}

checkPalindrom('топот'); // true
checkPalindrom('ДовОд'); // true
checkPalindrom('Кекс'); // false

