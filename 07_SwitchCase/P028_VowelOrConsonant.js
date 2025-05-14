// Vowel or Consonant

let char = 'O';

switch (char.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
