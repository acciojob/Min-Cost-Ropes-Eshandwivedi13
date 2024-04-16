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
