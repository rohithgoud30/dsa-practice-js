function pattern14(n){
	for(let i=0;i<n;i++){
		let val=65
		let s=''
		for(let j=0;j<i+1;j++){
			s+=String.fromCharCode(val)
			val+=1
		}
		console.log(s)
	}
}

pattern14(5)