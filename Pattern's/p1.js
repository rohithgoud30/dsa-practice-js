function pattern1(n){
	for(let i=1;i<=n;i++){
		let s=''
		for(let j=0;j<n;j++){
			s+='*'
		}
		console.log(s)
	}
}

pattern1(5)