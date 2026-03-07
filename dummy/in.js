// const arr = [1, 2, 3];
// arr.push(4);
// arr.pop()
// const arr2 = arr.slice(1)
// arr.splice(0,0,90)
// for (let i of arr) {
//   console.log(i);
// }
// console.log(`size:${arr.length}`)
// console.log(`arr[3]:${arr[3]}`)
// for(let i in arr){
//     console.log(i)
// }

// const _2d = [[1,2,3],[4,5,6]]
// for(let i = 0; i < _2d.length; i++){
//     for(let j = 0; j < _2d[i].length; j++){
//         console.log(_2d[i][j] + ' ')
//     }
//     console.log()
// }

// for(const arr of _2d){
//     for(const n of arr){
//         process.stdout.write(`${n}, `)
//     }
// }

// const arr = [1, 4, 6, 7, 91];
// const target = 15;
// Find if a sorted array has two elements that sum up to a target value, find if pair exist whose difference =k

// `1. b.f.: for each element check each element in the array if it sums up to the target value`;
// let n = arr.length;
// let found = false;
// for(let i = 0; i < n; i++){
//     console.log(i);
//     for(let j = i + 1; j < n; j++){
//         if(arr[i] + arr[j] === target){
//             console.log(`indexes: ${i} and ${j}`);
//             found = true;
//             break;
//         }
//     }
//     if(found) break;
// }
// `2. two pointer approach: take a left pointer at index 0 and right pointer at n - 1, if sum > target move the right pointer, if less than right, if found break`;

// let left = 0;
// let right = n - 1;

// while (left < right) {
//   let sum = arr[left] + arr[right];
//   if (sum == target) {
//     console.log(`indexes: ${left} and ${right}`);
//     break;
//   } else if (sum < target) {
//     left++;
//   } else right--;
// }

//  Finding the longest/shortest subarray with a specific characteristic (e.g., maximum sum sub-array of size k).

// Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k.nums = [2, 1, 5, 1, 3, 2], k = 3, , Output: 9
// let nums = [2, 1, 5, 1, 3, 2];
// let k = 3;

`The below is brute force to find all possible subarrays`;
// let n = nums.length;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     let sum = 0;
//     let k = i;
//     for (; k < i + j + 1; k++) {
//       sum += nums[k];
//     }
//     k--;
//     if (sum === target) {
//       console.log(`indexes left: ${i}, right ${k}`);
//     }
//     console.log();
//   }
// }

`1. take two pointers, starting at index 0 and k - 1, and slide it till the end of the array, and keep updating for every greater sum found.`;

// let n = nums.length;
// let sum = 0;
// for (let i = 0; i < k; i++) {
//   sum += nums[i];
// }
// let max = sum;
// for (let r = k; r < n; r++) {
//     sum+=nums[r];
//     sum-=nums[r - k];
//     max = Math.max(sum,max);
// }
// console.log(`Max sum: ${max}`)

// Maximum contiguous sub-array, nums = [-2,1,-3,4,-1,2,1,-5,4], output: 6
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

`1.b.f. for all subarrays find the sum, O(n3)`;
`2.carry forward O(n2)`;
`3.Kadane's Algo: so kadane's algo is about maximum sum of a subarray, so minimizing length is not the objective, so if the sum upto that point is positive, there is a chance that the sum could increse if we enccounter a positive number, but if the sum turns negative or zero, means that moving further from this point, if we encounter a positive number, the overall sum will get affected if we keep the negative sum till now, and if it is zero, it doesnt matter if you keep it or not, so discarding would be a better choice.`;
// let sum = nums[0];
// let max = nums[0];
// let r = 1;
// for (; r < nums.length; r++) {
//   sum += nums[r];
//   max = Math.max(sum, max);
//   if (sum <= 0) {
//     sum = 0;
//   }
// }
// console.log(`max sum: ${max}`);

// Longest subarray with sum = k, nums = [1,2,3,1,1,1,1] k = 3
`So the brute force approach solution would be to use carry forward, keep track of subarray indexes. Optimized approach should take less than O(n2). So prefix sum is the technique to use carry forward and store the sum uptill that index using an array.Ok so one solution is that we use carry forward, calculate sum upto that point, we take a hashmap, we insert the sum into the hashmap, we check if (sum - k) exists in the hashmap.`;
// let nums = [1, 2, 3, 1, 1, 1, 1];
// let k = 3;
// const n = nums.length;
// const map = new Map();
// let sum = 0;
// let l = -1;
// let r = -1;
// for (let i = 0; i < n; i++) {
//   sum += nums[i];
//   if (map.has(sum - k) && i - map.get(sum - k) > r - l + 1) {
//     l = map.get(sum - k) + 1;
//     r = i;
//   }
//   if (!map.has(sum)) {
//     map.set(sum, i);
//   }
// }
// console.log(map)
// console.log(`left: ${l}, right: ${r}`);

// Find the minimum length subarray whose sum ≥ k. nums = [2,3,1,2,4,3] k = 7
`so we take a two pointer approach, we move the right pointer if sum < k, and the left when it is >= k, and also update the min subarray length`;
// let nums = [2, 3, 1, 2, 4, 3];
// let k = 7;

// let l = 0;
// let r = 0;
// let len = Infinity;
// let sum = 0;
// for (; r < nums.length; r++) {
//   sum += nums[r];
//   while (sum >= k) {
//     len = Math.min(r - l + 1, len);
//     sum -= nums[l];
//     l++;
//   }
// }

// console.log(len)

// Longest Subarray With At Most K Distinct Elements nums = [1,2,1,2,3] k = 2
`So to find the longest subarray with atmost k distinct elements, we will take a two pointer approach and also use a map to keep track of the count of the elements`;

// let nums = [1, 2, 1, 2, 3];
// let k = 2;

// let l = 0;
// let r = 0;
// let map = new Map();
// let len = -Infinity;

// for (; r < nums.length; r++) {
//   if (map.has(nums[r])) {
//     map.set(nums[r], map.get(nums[r] + 1));
//   } else if (map.size < k) {
//     map.set(nums[r], 1);
//   } else {
//     while (map.size >= k) {
//       map.set(nums[l], map.get(nums[l]) - 1);
//       if (map.get(nums[l]) === 0) {
//         map.delete(nums[l]);
//       }
//       l++;
//     }
//     map.set(nums[r], 1);
//   }
//   len = Math.max(len, r - l + 1);
// }
// console.log(len);

// Two Sum nums = [2,7,11,15] target = 9
`using a hashmap, and finding target - nums[currentIndex] in hashmap.`;
// let nums = [2, 7, 11, 15];
// let target = 9;
// let map = new Map();
// for (let i = 0; i < nums.length; i++) {
//   const matched = map.get(target - nums[i]);
//   if (matched >= 0) {
//     console.log(`matched: [${map.get(target - nums[i])}, ${i}]`);
//     break;
//   }
//   map.set(nums[i], i);
// }

// Product of Array Except Self nums = [1,2,3,4]
`brute force would be to first calculate the product of entire array, then return a new array of prod/nums[i], but this fails for 0`;
// let nums = [0, 2, 0, 4];
// let prod = 1;
// let zeroCount = 0;

// for (const n of nums) {
//   if (n === 0) zeroCount++;
//   else prod *= n;
// }

// for (const n of nums) {
//   if (zeroCount === 0) {
//     console.log(prod / n);
//   } else if (zeroCount === 1 && n === 0) {
//     console.log(prod);
//   } else {
//     console.log(0);
//   }
// }

//With division ban

// let nums = [0, 2, 3, 4];
// let p = [];
// let s = [];
// let prod = 1;
// for (const n of nums) {
//   prod *= n;
//   p.push(prod);
// }
// console.log(p);
// prod = 1;
// for (let i = nums.length - 1; i >= 0; i--) {
//   const n = nums[i];
//   prod *= n;
//   //   s.splice(0, 0, prod);
//   s[i] = prod;
// }
// console.log(s);
// const res = [];
// for (let i = 0; i < nums.length; i++) {
//   let prefix = i > 0 ? p[i - 1] : 1;
//   let suffix = i < nums.length - 1 ? s[i + 1] : 1;
//   res.push(prefix * suffix);
// }
// res.forEach((n) => console.log(n));

// let nums = [1, 2, 3, 4];
// let n = nums.length;
// const res = [];
// let prod = 1;

// for (let i = 0; i < n; i++) {
//   res.push(prod);
//   prod *= nums[i];
// }

// prod = 1;

// for (let i = nums.length - 1; i >= 0; i--) {
//   res[i] *= prod;
//   prod *= nums[i];
// }
// res.forEach((n) => console.log(n));

// // Reverse a string without using built-in reverse methods. Input:  "hello" Output: "olleh"
// let s = 'hello';
// // console.log(s.split('').reverse().join(''));
// function reverse(s) {
//   const arr = [];
//   for (const ch of s) {
//     if (ch) arr.push(ch);
//   }
//   let n = s.length;
//   let l = 0;
//   let r = n - 1;
//   while (l < r) {
//     [arr[l],arr[r]] = [arr[r],arr[l]]
//     l++;
//     r--;
//   }
//   let res = '';
//   for(const ch of arr){
//     res += ch
//   }
//   return res;
// }
// console.log(reverse(s));

// First Non-Repeating Character s = "aabbcde"
let s = 'aabbcde';
let map = {};
for(const c of s){
    let count = map[c] ? map[c] + 1 : 1;
    map[c] = count;
}
for(const entry in Object.getOwnPropertyNames(map)){
    
}

