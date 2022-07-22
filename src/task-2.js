const nextBD = new Date(2023, 1, 27);
const daysLeft = getDaysBeforeBirthday(nextBD);
console.log(`Next birthday time is ${nextBD}.\n ${daysLeft} days left before next birthday.`);

/**
 * Get day before next birthday
 * @param {*} nextBirthdayDate Next birthday date
 * @returns Count of days before next birthday
 */
function getDaysBeforeBirthday(nextBirthdayDate) {
  const todayMs = Date.now();
  const diffMs = nextBirthdayDate.getTime() - todayMs;
  return Math.round(diffMs / 1000 / 60 / 60 / 24);
}