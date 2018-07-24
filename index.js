function bruteForceTwoSum(array, sum) {
  let answer = [];
  for (let i=0; i<array.length; i++) {
    for (let j=i+1; j<array.length; j++) {
      if (array[i] === sum - array[j]) {
        answer.push([array[i], array[j]]);
      }
    }  
  }
  return answer;
}

function hashTwoSum(array, sum) {
  let answers = [];
  for (let i=0; i<array.length; i++) {
    let blind = array.slice(i+1, array.length);
    if (blind.includes(sum - array[i])) {
      answers.push([array[i], (sum - array[i])]);
    }
  }
  return answers;
}

function sortArray(array) {
  let sorted =[];
  while (array.length !== 0) {
    sorted = sorted.concat(findAndRemoveMin(array));
  }
  return sorted;
}

function findAndRemoveMin(array) {
  let currentMin = array[0];
  let currentMinIdx = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i] < currentMin) {
      currentMin = array[i];
      currentMinIdx = i;
    }
  }
  return array.splice(currentMinIdx, 1);
}

function binarySearch(array, target) {
  let sortedArray = sortArray(array);
  let min = 0;
  let max = sortedArray.length -1;
  let guess;
  
  while (min < max) {
    guess = Math.floor((min+max)/2);
    if (sortedArray[guess] === target) {
      return target;
    } else {
      if ((min+max) < target) {
        min = guess+1;
      } else {
        max= guess-1;
      }
    }
  }
  return false;
}

function binarySearchTwoSum(array, targ) {
  let sortArr = sortArray(array);
  let results = [];
  
  for (let i=0; i<sortArr.length; i++) {
    let diff = targ - sortArr[i];
    let binaryIdx = binarySearch(sortArr, diff);
    if (binaryIdx) {
      results.push(sortArr[i], sortArr[binaryIdx]);
    }
  }
  return results;
}