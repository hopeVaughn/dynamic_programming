/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.

The function should return a 2D array containing all the ways the the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.

You may reuse the elements of the 'wordBank' as many times as needed.
*/

function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target]
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // the below variable gives us everything after the word. Once you remove the word what is the remainder of the word all the way to the end.
      const suffix = target.slice(word.length);
      // the below variable should return a 2D array of all the possible ways to achieve the result
      const suffixWays = allConstruct(suffix, wordBank, memo);
      // adds the suffix to the beginning of the array
      const targetWays = suffixWays.map(way => [word, ...way]);
      // pushes the spread output of the above variable into out outer result variable to create an accurate 2D array.
      result.push(...targetWays)
    }
  }
  memo[target] = result;
  return result;
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
/*
[
  ['purp','le'],
  ['p','ur','p','le']
]
*/
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
/*
[
  ['ab','cd','ef],
  ['ab','c','def'],
  ['abc','def'],
  ['abcd','ef'],
]
*/
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // []


// m = target.length
// n = wordBank.length

// space and time complexity w/ memoization.
// O(n^m) time 
// O(m) space
