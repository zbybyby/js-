/*
给定一个整数数组，找到一个具有最大和的子数组，返回其最大和。
样例:
    给出数组[−2,2,−3,4,−1,2,1,−5,3]，符合要求的子数组为[4,−1,2,1]，其最大和为6
*/
function manxChildArray(nums){
    let arrays = nums,
        max = -10000,
        number = 0
    for(let i=0;i<nums.length;i++){
        number += nums[i]
        if(number > max){
            max = number
        }
        if(number < 0){
            number = 0  //子串和为负数，重新计算
        }
    }
}