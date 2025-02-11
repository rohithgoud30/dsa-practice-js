function countDigits(n){
	let count=0
	while(n>0){
		count+=1
		n=Math.floor(n/10)
	}
	console.log(count)
}

countDigits(156)