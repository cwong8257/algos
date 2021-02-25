// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let endIndex = nums1.length - 1
    let end1Index = m - 1
    let end2Index = n - 1

    while (end1Index >= 0 && end2Index >= 0) {
        if(nums1[end1Index] > nums2[end2Index]){
            nums1[endIndex] = nums1[end1Index]
            end1Index--
        }
        else{
            nums1[endIndex] = nums2[end2Index]
            end2Index--
        }
        endIndex--
    }

    if (end2Index < 0) return

    while (end2Index >= 0) {
      nums1[endIndex] = nums2[end2Index]
      end2Index--
      endIndex--
    }
};