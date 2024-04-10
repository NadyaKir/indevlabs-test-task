function missingNum(arr) {
  // Check for an empty array
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  // Sorting the array
  const sortedArr = sortArray(arr);

  // Check if there is only one element in the array
  if (sortedArr.length === 1) {
    return sortedArr[0]; // Return this element
  }

  // Searching for the missing number in the sorted array
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      return sortedArr[i] + 1; // Return the missing number
    }
  }

  // If the missing number is not found, return the next number after the last number in the array
  return sortedArr[sortedArr.length - 1] + 1;
}

// Function to sort the array
const sortArray = (arr) => [...arr].sort((a, b) => a - b);

module.exports = missingNum;
