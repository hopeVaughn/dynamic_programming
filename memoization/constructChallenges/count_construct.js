/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.

The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.
*/

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target]
  if (target === "") return 1

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo)
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false

// m = target.length
// n = wordBank.length

// space and time complexity w/o memoization.
// O(n^m*m) time - Branching factor to the height factor
// O(m^2) space


// space and time complexity w/ memoization
// O(n*m^2) time
// O(m^2) space