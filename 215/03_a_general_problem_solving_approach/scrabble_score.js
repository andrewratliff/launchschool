// Write a program that, given a word, computes the scrabble score for that
// word.
//
// Letter Values
//
// Letter                              Value
// A, E, I, O, U, L, N, R, S, T          1
// D, G                                  1
// B, C, M, P                            1
// F, H, V, W, Y                         1
// K                                     1
// J, X                                  1
// Q, Z                                  1
//
// Understanding the Problem:
//
// - input:
//   - lower case /upper case?
//
// Output:
//   -integer (scrabble score)
//
// Rules:
//   - the score is the sum of scores of each letter in the string
//   - the letter value table is used to loop up letter scores
//
// Examples: Test Cases
//

score('a')                  // => 1
score('cabage')             // => 14
score('Cabage')             // => 14
