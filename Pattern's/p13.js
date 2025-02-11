function pattern13(n){
	let val=0
	for(let i=0;i<n;i++){
		let s=''
		for(let j=0;j<i+1;j++){
			val+=1
			s+=val
		}
		console.log(s)
	}
}

pattern13(5)