/* 🟢 1854. Maximum Population Year

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.

Example 1:
==========

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

Example 2:
==========

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation: 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.
 
Constraints:
============

1 <= logs.length <= 100
1950 <= birthi < deathi <= 2050

*/

/*

function maximumPopulation(logs) {
  let maxPop = 0;
  let answer = 0;

  for (let year = 1950; year <= 2050; year++) {
    let population = 0;

    for (const [birth, death] of logs) {
      if (birth <= year && year < death) {
        population++;
      }
    }

    if (population > maxPop) {
      maxPop = population;
      answer = year;
    }
  }
  return answer;
}

*/

function maximumPopulation(logs) {
  const arr = new Array(101).fill(0);

  for (const [birth, death] of logs) {
    arr[birth - 1950]++;

    arr[death - 1950]--;
  }

  console.log(arr);

  let maxPop = 0;
  let year = 1950;
  let currentPop = 0;

  for (let i = 0; i < arr.length; i++) {
    currentPop += arr[i];

    if (currentPop > maxPop) {
      maxPop = currentPop;
      year = 1950 + i;
    }
  }
  return year;
}

// const logs = [
//   [1993, 1999],
//   [2000, 2010],
// ];

const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

console.log(maximumPopulation(logs));
