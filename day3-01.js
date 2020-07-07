/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let prevMax = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentMax < nums[i]) {
            prevMax =  currentMax;
            currentMax = nums[i];
        } else {
            prevMax = nums[i] < currentMax && prevMax < nums[i] ? nums[i] : prevMax;
        }
    }

    return prevMax;
}


