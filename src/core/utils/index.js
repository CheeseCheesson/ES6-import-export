import moment from "moment";

export function calculateSumOfNumbers(numbers) {
  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

export function getFormattedTime(date) {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
