// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const nums = []

  _bstToArray(root)

  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i]
    const next = nums[i + 1]

    if (curr >= next) {
      return false
    }
  }

  return true

  function _bstToArray (root) {
    if (!root) return

    _bstToArray(root.left)
    nums.push(root.val)
    _bstToArray(root.right)
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValid(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};

const isValid = (root, max, min) => {
  if(!root) return true;
  if(root.val >= max || root.val <= min) return false;
  return isValid(root.left, root.val, min) && isValid(root.right, max, root.val);
}