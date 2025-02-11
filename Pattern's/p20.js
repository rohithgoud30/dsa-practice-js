function pattern20(n){
	for(let i=0;i<2*n-1;i++){
		let s=''
		let stars= i<n?i+1:2*n-i-1
		//alphabets
		for(let j=0;j<stars;j++){
			s+='*'
		}
		//spaces
		for(let k=0;k<2*n-2*stars;k++){
			s+=' '
		}
		//alphabets
		for(let j=0;j<stars;j++){
			s+='*'
		}
		console.log(s)
	}
}

pattern20(5)