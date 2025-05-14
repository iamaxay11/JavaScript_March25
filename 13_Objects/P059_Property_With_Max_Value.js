// Find property with maximum value
let scores = {
    math: 88,
    science: 92,
    english: 81
  };

  let maxSubject = "";
  let maxScore = 0;
  
  for (let subject in scores) {
    if (scores[subject] > maxScore) {
      maxScore = scores[subject];
      maxSubject = subject;
    }
}
console.log(`${maxSubject} has highest score: ${maxScore}`);
