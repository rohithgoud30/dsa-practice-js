function pattern18(n){
	for(let i=0;i<n;i++){
		let val=64+n
		let s=''
		for(let j=0;j<i+1;j++){
			s+=String.fromCharCode(val-i+j)
		}
		console.log(s)
	}
}

pattern18(5)