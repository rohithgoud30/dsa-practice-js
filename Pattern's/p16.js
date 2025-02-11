function pattern16(n){
	let val=65
	for(let i=0;i<n;i++){
		let s=''
		for(let j=0;j<i+1;j++){
			s+=String.fromCharCode(val)
		}
		val+=1
		console.log(s)
	}
}

pattern16(5)