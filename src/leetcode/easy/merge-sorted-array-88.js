const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
var merge = function (nums1, m, nums2, n) {
  for (let i = m + n - 1; i >= 0; i--) {
    if (m === 0 || n === 0) {
      nums1[i] = m === 0 ? nums2[n - 1] : nums1[m - 1];
      if (m === 0) {
        n--;
      } else {
        m--;
      }
    }

    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m--;
    } else if (nums2[n - 1] > nums1[m - 1]) {
      nums1[i] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

console.log(merge(nums1, nums1.length - nums2.length, nums2, nums2.length));
