function pattern12(n){
	for(let i=0;i<n;i++){
		let s=''
		//numbers
		for(let j=0;j<i+1;j++){
			s+=j+1
		}
		//space's
		for(let k=0;k<2*n-2*i-2;k++){
			s+=' '
		}
		//numbers
		for(let l=0;l<i+1;l++){
			s+=i-l+1
		}

		console.log(s)
	}
}

pattern12(4)