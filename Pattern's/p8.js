function pattern8(n){
	for(let i=0;i<n;i++){
		let s=''
		//space
		for(let j=0;j<i;j++){
			s+=' '
		}
		//star's
		for(let k=0;k<2*n-1-2*i;k++){
			s+='*'
		}
		console.log(s)
	}
}

pattren8(5)