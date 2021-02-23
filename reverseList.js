// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * Iterative in-place solution O(n)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//   let prev = null
//   let curr = null
//   let next = head

//   while (next) {
//     prev = curr
//     curr = next
//     next = next.next
//     curr.next = prev
//   }

//   return curr
// };

/**
 * Recursive in-place solution O(n)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const [front, back] = _reverseList(head)

  if (back) {
    back.next = null
  }

  return front

  function _reverseList (head) {
    if (head === null) return [null, null]
    if (head.next === null) return [head, head]

    const [front, back] = _reverseList(head.next)

    back.next = head

    return [front, head]
  }
};

// const ll = new ListNode(11, new ListNode(23, new ListNode(56, null)))
// console.log(reverseList(ll))