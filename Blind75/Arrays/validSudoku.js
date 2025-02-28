/**
 * Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 * Difficulty: Medium
 *
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated.
 *
 * Time Complexity: O(1) - board is always 9x9
 * Space Complexity: O(1) - fixed size sets
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};

module.exports = { isValidSudoku };
