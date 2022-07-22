const testDate = new Date(2001, 4, 5);
const formattedDate = getDateFormat(testDate, '*');
console.log(formattedDate);


/**
 * Format date to day.month.year with different separator
 * @param {*} date Date
 * @param {*} separator Separator 
 * @returns Formatted date
 */
function getDateFormat(date, separator) {
  const dateArray = [];

  let day = date.getDate().toString();
  if (day.length === 1)
    day = '0' + day;

  let month = (date.getMonth() + 1).toString();
  if (month.length === 1)
    month = '0' + month;

  dateArray.push(day);
  dateArray.push(month);
  dateArray.push(date.getFullYear());

  return dateArray.join(separator);
}