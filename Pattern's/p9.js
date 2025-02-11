function pattern9(n){
	for(let i=0;i<n;i++){
		let s=''
		//space's
		for(let j=0;j<n-i-1;j++){
			s+=' '
		}
		//star's
		for(let k=0;k<2*i+1;k++){
			s+='*'
		}
		console.log(s)
	}

	for(let i=0;i<n;i++){
		let s=''
		//space's
		for(let j=0;j<i;j++){
			s+=' '
		}
		//star's
		for(let k=0;k<2*n-2*i-1;k++){
			s+='*'
		}
		console.log(s)
	}
}

pattern9(5)