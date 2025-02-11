function pattern15(n){
	for(let i=0;i<n;i++){
		let val=65
		let s=''
		for(let j=0;j<n-i;j++){
			s+=String.fromCharCode(val)
			val+=1
		}
		console.log(s)
	}
}

pattern15(5)