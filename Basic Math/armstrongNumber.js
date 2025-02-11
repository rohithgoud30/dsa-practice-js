function armstrongNumber(n){
	let len=`${n}`.length
	let org=n
	let sum=0
	while(n>0){
		let last=n%10
		sum+=last**len
		n=Math.floor(n/10)
	}
	console.log(sum===org)
}

armstrongNumber(371)