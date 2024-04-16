function mincost(arr)
{ //sum of cost of each individual operation 
// return the min cost

	arr.sort((a,b) => a-b);//sorting on basis of integerValues(byDefault string lekar karta tha)
	let sum = arr[0];
	let totalSum = 0;
	for(let i=1; i<arr.length; i++){
		sum += arr[i];
		totalSum += sum;//add sums of all operations
	}
	return totalSum;
}

module.exports=mincost;

/*
In your problem, after adding two smallest ropes, you need to place their sum back into the array in its correct position (maintaining the sorted order). Here’s how you can do it:
Sort the array.
Remove the first two elements (i.e., the two smallest numbers) from the array.
Add them together and store the result.
Find the correct position in the array to insert this result (so that the array remains sorted). You can do this by iterating over the array and finding the first number that is larger than your result.
Use the splice() method to insert the result at that position in the array.
Repeat steps 2-5 until there’s only one element left in the array.
This approach ensures that you’re always adding the two smallest numbers, which is the key to minimizing the total cost.

However, please note that this approach may not be the most efficient one because sorting the array in every iteration can be costly. A more efficient approach would be to use a 
priority queue or a min-heap data structure, but since you haven’t learned that yet, this approach will work fine for now.
*/