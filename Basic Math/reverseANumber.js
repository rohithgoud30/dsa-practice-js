function reverseANumber(n){
	let rev=0
	while(n>0){
		let last=n%10
		rev=rev*10+last
		n=Math.floor(n/10)
	}
	console.log(1234)
}

reverseANumber(10400)

