const testDate = new Date(2022, 6, 23);
const daysToAdd = 10;
const newDate = addDays(testDate, daysToAdd);
console.log(`Initial date: ${testDate}\n+ ${daysToAdd} days ...\nFinal date: ${newDate}`);


/**
 * Adding days to date
 * @param {*} date Initial date
 * @param {*} days Days count to add
 * @returns Date incremented by days count
 */
function addDays(date, days) {
  const daysInMs = days * 24 * 60 * 60 * 1000;
  const newDate = new Date(date.getTime() + daysInMs);
  return newDate;
}